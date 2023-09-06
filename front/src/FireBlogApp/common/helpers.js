export function nestedGet(object, path, defaultValue) {
  const keys = path.split(".");
  let result = object;

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }

  return result !== undefined ? result : defaultValue;
}
