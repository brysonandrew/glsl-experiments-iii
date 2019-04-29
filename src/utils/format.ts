import { defined } from "./variable-evaluation"

export function removeSpaces(x: string): string {
  if (defined(x)) {
    return x.replace(/\s/g, "")
  } else {
    return ""
  }
}

export function toPath(name) {
  return name
    .replace(/-/g, "")
    .replace(/\s/g, "-")
    .replace(/[.,]/g, "")
    .toLowerCase()
}
