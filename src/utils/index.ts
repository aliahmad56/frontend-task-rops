import { CSSProperties } from "react";

export const isDefined = (value: any) => value !== undefined && value !== null;
export const isNotDefined = (value: any) => !isDefined(value);

// Helps to create style objects that supports IntelliSense for passed styles object keys
// Inspired from `Stylesheet.create` method from React Native
type NamedStyles<T> = { [P in keyof T]: CSSProperties };
export function createStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  // The extra & NamedStyles<any> here helps Typescript catch typos: e.g.,
  // the following code would not error with `styles: T | NamedStyles<T>`,
  // but would error with `styles: T & NamedStyles<any>`
  styles: T & NamedStyles<any>
): T {
  return styles;
}

export const extractRouteNameFromPath = (path: string) =>
  path.split("/")?.[1] ?? "";

export function combineStyles<T extends CSSProperties | object>(
  styles: T[]
): CSSProperties {
  return styles.reduce((prev, curr) => ({ ...prev, ...curr }), {});
}
