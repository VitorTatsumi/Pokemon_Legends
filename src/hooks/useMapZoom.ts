import { useCallback, useEffect, useRef, useState, type PointerEvent, type RefObject } from 'react'

const MIN_ZOOM = 1
const MAX_ZOOM = 3
const STEP = 0.25
const DRAG_THRESHOLD_PX = 8

type Pan = { x: number; y: number }

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false
  return Boolean(target.closest('button, a, input, textarea, select, label, .map-zoom'))
}

export function useMapZoom(viewportRef: RefObject<HTMLDivElement | null>) {
  const [zoom, setZoom] = useState(MIN_ZOOM)
  const [pan, setPan] = useState<Pan>({ x: 0, y: 0 })
  const zoomRef = useRef(zoom)
  const panRef = useRef(pan)
  zoomRef.current = zoom
  panRef.current = pan

  const dragRef = useRef<{
    pointerId: number
    startX: number
    startY: number
    originX: number
    originY: number
    moved: boolean
  } | null>(null)
  const suppressClickRef = useRef(false)

  const clampPan = useCallback((next: Pan, nextZoom: number) => {
    if (nextZoom <= MIN_ZOOM) return { x: 0, y: 0 }
    const limit = ((nextZoom - 1) / nextZoom) * 280
    return {
      x: Math.max(-limit, Math.min(limit, next.x)),
      y: Math.max(-limit, Math.min(limit, next.y)),
    }
  }, [])

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(MAX_ZOOM, Math.round((z + STEP) * 100) / 100))
  }, [])

  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const next = Math.max(MIN_ZOOM, Math.round((z - STEP) * 100) / 100)
      if (next <= MIN_ZOOM) setPan({ x: 0, y: 0 })
      else setPan((p) => clampPan(p, next))
      return next
    })
  }, [clampPan])

  const reset = useCallback(() => {
    setZoom(MIN_ZOOM)
    setPan({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const rect = el.getBoundingClientRect()
      const cx = event.clientX - rect.left - rect.width / 2
      const cy = event.clientY - rect.top - rect.height / 2
      const direction = event.deltaY < 0 ? 1 : -1
      const z = zoomRef.current
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round((z + direction * STEP) * 100) / 100))
      if (next === z) return
      if (next <= MIN_ZOOM) {
        setZoom(next)
        setPan({ x: 0, y: 0 })
        return
      }
      const ratio = next / z
      const p = panRef.current
      setZoom(next)
      setPan(
        clampPan(
          {
            x: cx - (cx - p.x) * ratio,
            y: cy - (cy - p.y) * ratio,
          },
          next,
        ),
      )
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [clampPan, viewportRef])

  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.button !== 0) return
      // Let marker/control clicks work normally — don't capture the pointer.
      if (isInteractiveTarget(event.target)) return
      suppressClickRef.current = false
      dragRef.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        originX: pan.x,
        originY: pan.y,
        moved: false,
      }
      event.currentTarget.setPointerCapture(event.pointerId)
    },
    [pan.x, pan.y],
  )

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current
      if (!drag || drag.pointerId !== event.pointerId) return
      const dx = event.clientX - drag.startX
      const dy = event.clientY - drag.startY
      const dist2 = dx * dx + dy * dy
      if (!drag.moved && dist2 > DRAG_THRESHOLD_PX * DRAG_THRESHOLD_PX) {
        drag.moved = true
        // Only suppress clicks when we actually pan (zoomed in).
        if (zoom > MIN_ZOOM) suppressClickRef.current = true
      }
      if (!drag.moved || zoom <= MIN_ZOOM) return
      setPan(clampPan({ x: drag.originX + dx, y: drag.originY + dy }, zoom))
    },
    [clampPan, zoom],
  )

  const endDrag = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return
    dragRef.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }, [])

  const shouldIgnoreClick = useCallback(() => {
    if (!suppressClickRef.current) return false
    suppressClickRef.current = false
    return true
  }, [])

  return {
    zoom,
    pan,
    canZoomIn: zoom < MAX_ZOOM,
    canZoomOut: zoom > MIN_ZOOM,
    isZoomed: zoom > MIN_ZOOM,
    zoomIn,
    zoomOut,
    reset,
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
    shouldIgnoreClick,
  }
}
