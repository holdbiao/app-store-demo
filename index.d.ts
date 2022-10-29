import Vue from 'vue';

declare module '*.vue' {
  const vue: any
  export default vue
}

declare module '*.tsx' {
  const vue: any
  export default vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $loading: {
      show: (delay?: number) => void,
      hide: () => void
    }
  }
}