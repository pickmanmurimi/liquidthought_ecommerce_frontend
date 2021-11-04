/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_API_BASE: string,
  readonly VITE_GOOGLE_PLACES_API_KEY: string,
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
