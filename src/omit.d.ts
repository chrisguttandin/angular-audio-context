// @todo This can be removed once TypeScript v3.5 can be used with Angular.
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
