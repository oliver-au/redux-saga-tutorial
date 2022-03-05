
export const delay = (ms: number, value: number) => new Promise<number>((res) => setTimeout(() => res(value), ms))