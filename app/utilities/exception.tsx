function throwIf(when: boolean, error: Error) {
  if (when) {
    throw error;
  }
}
export function throwIfEmpty(condition: string | boolean, error: Error) {
  throwIf(condition === "", error);
}
