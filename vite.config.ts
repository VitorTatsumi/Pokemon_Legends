import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/** Repo name on github.io — only applied in CI so local `npm run dev` stays at /. */
const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process
  ?.env
const base = env?.GITHUB_ACTIONS === 'true' ? '/Pokemon_Legends/' : '/'

/**
 * Public folder assets are referenced as "/file.png" in many places.
 * Vite does not rewrite those string literals for a non-root `base`, so we
 * prefix them at transform time when deploying to GitHub Pages.
 */
function prefixRootStaticAssets(basePath: string): Plugin {
  const pattern =
    /(['"`])\/(?!\/)([A-Za-z0-9_./-]+\.(?:png|jpe?g|svg|webp|gif)(?:\?[A-Za-z0-9_.=&-]*)?)\1/g

  return {
    name: 'prefix-root-static-assets',
    enforce: 'pre',
    transform(code, id) {
      if (basePath === '/') return null
      if (id.includes('node_modules')) return null
      if (!/\.[cm]?[jt]sx?$/.test(id)) return null

      const next = code.replace(
        pattern,
        (_match, quote: string, assetPath: string) =>
          `${quote}${basePath}${assetPath}${quote}`,
      )
      return next === code ? null : next
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), prefixRootStaticAssets(base)],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
})
