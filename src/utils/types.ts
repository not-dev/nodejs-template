/**
 * Override T1 with T2
 * @param T1 - base
 * @param T2 - new
 * @returns Overridden type
 */
type Override<T1, T2> = Omit<T1, keyof T2> & T2;

/**
 * TのプロパティPを必須にする
 * @param T - base
 * @param P - Required
 * @returns Overridden type
 */
type RequiredParts<T, P extends keyof T> = Override<T, Required<Pick<T, P>>>

type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>

// type TupleSplitFirst<F extends unknown[]> = F extends F ? F extends [infer F, ...infer R] ? [F, R] : never : never

type TupleLTE<T, N extends number> = N extends N ? number extends N ? T[] : _TupleLTEOf<T, N, [], never> : never
type _TupleLTEOf<T, N extends number, R extends unknown[], U> = R['length'] extends N ? U|R : R['length'] extends 0 ? _TupleLTEOf<T, N, [T, ...R], U> :_TupleLTEOf<T, N, [T, ...R], U|R>

const isTupleLTE = <T, N extends number>(arg: T[], n:N): arg is TupleLTE<T, typeof n> => {
  if (Array.isArray(arg)) {
    return (arg.length <= n)
  }
  return false
}

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
}[Keys]

type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>
}[Keys]

type ReturnTypeAsync<T extends (...args: any[]) => Promise<unknown>> = ReturnType<T> extends Promise<infer R> ? R : never

export { isTupleLTE }
export type { Override, RequiredParts, Tuple, TupleLTE, RequireAtLeastOne, RequireOnlyOne, ReturnTypeAsync }
