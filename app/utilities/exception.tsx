export function throwIfEmpty(condition: boolean, error: Error) {
  if (condition) {
    throw error;
  }
}
