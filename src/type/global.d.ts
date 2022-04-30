/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
    readonly NEXT_PUBLIC_PER_PAGE: number;
    readonly NEXT_PUBLIC_LIMIT_PAGE: number;
  }
}
