declare module 'vue' {
  interface vue {
    $ls: {
      get (key: string): any
      set (key: string, value: any): void
    }
  }
}
