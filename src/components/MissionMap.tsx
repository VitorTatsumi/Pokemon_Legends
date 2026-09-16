import { useMemo, useRef, useState } from 'react'
import type { Mission, MissionKind } from '../data/missions'
import { missionMapPosition, missionsByLandmark } from '../data/missions'
import { useMapZoom } from '../hooks/useMapZoom'
import type { Locale } from '../i18n'
import { t } from '../i18n'
import { MapZoomControls } from './MapZoomControls'
import { SchematicCity } from './SchematicCity'
import './LumioseMap.css'
import './MissionMap.css'

const MAP_SRC = '/lumiose-map.png'

type Props = {
  locale: Locale
  selectedId: string | null
  kind: MissionKind
  completed: Record<string, boolean>
  hideCompleted: boolean
  onSelect: (id: string) => void
}

export function MissionMap({
  locale,
  selectedId,
  kind,
  completed,
  hideCompleted,
  onSelect,
}: Props) {
  const [imageOk, setImageOk] = useState(true)
  const viewportRef = useRef<HTMLDivElement>(null)
  const zoomApi = useMapZoom(viewportRef)
  const markers = useMemo(() => {
    const byLandmark = missionsByLandmark(kind)
    const list: { mission: Mission; x: number; y: number }[] = []
    for (const siblings of byLandmark.values()) {
      const visible = hideCompleted
        ? siblings.filter((m) => !completed[m.id])
        : siblings
      for (const mission of visible) {
        const pos = missionMapPosition(mission, visible)
        list.push({ mission, ...pos })
      }
    }
    return list
  }, [completed, hideCompleted, kind])

  return (
    <div className="map-shell">
      <div className="map-toolbar">
        <div>
          <h2>{t(locale, 'missionsTitle')}</h2>
          <p>{t(locale, 'missionsHint')}</p>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={['map-viewport', zoomApi.isZoomed ? 'is-zoomed' : ''].filter(Boolean).join(' ')}
        onPointerDown={zoomApi.onPointerDown}
        onPointerMove={zoomApi.onPointerMove}
        onPointerUp={zoomApi.onPointerUp}
        onPointerCancel={zoomApi.onPointerCancel}
      >
        <MapZoomControls
          locale={locale}
          canZoomIn={zoomApi.canZoomIn}
          canZoomOut={zoomApi.canZoomOut}
          isZoomed={zoomApi.isZoomed}
          onZoomIn={zoomApi.zoomIn}
          onZoomOut={zoomApi.zoomOut}
          onReset={zoomApi.reset}
        />
        <div
          className="map-stage"
          style={{
            transform: `translate(${zoomApi.pan.x}px, ${zoomApi.pan.y}px) scale(${zoomApi.zoom})`,
          }}
        >
          <div className="map-disc map-disc--photo">
            <img
              className="map-photo"
              src={MAP_SRC}
              alt={t(locale, 'missionsTitle')}
              onLoad={() => setImageOk(true)}
              onError={() => setImageOk(false)}
              draggable={false}
            />
            {!imageOk && <SchematicCity />}
            {markers.map(({ mission, x, y }) => (
              <button
                key={mission.id}
                type="button"
                className={[
                  'mission-marker',
                  mission.kind === 'main' ? 'mission-marker--main' : 'mission-marker--side',
                  selectedId === mission.id ? 'is-selected' : '',
                  completed[mission.id] ? 'is-completed' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{ left: `${x}%`, top: `${y}%` }}
                onClick={() => onSelect(mission.id)}
                onPointerDown={(event) => event.stopPropagation()}
                aria-label={`${mission.kind === 'main' ? t(locale, 'mainMission') : t(locale, 'sideMission')} ${mission.number}: ${mission.name[locale]}`}
                title={mission.name[locale]}
              >
                <span>
                  {mission.kind === 'main' ? 'M' : 'S'}
                  {mission.number}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
