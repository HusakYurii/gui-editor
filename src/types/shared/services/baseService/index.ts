export type TService<D extends Record<string, unknown>> = {
    initialize: (dependencies: D) => Promise<void>
    destroy: () => Promise<void>
}

