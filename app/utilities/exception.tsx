export function throwIf(when: boolean, error: Error): void {
  if (when) {
    throw error;
  }
}
export function throwIfEmpty(data: string, error: Error): void {
  throwIf(data === "", error);
}
