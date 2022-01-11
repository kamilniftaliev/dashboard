export function isFunction<T extends Function = Function>(
  value: any
): value is T {
  return typeof value === "function";
}

/** Runs the argument if it's a function, otherwise returns it as it is */
export function runIfFn<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
