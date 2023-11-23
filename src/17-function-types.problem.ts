import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */

type EventHanlder<T> = (e: T) => void;
// type FocusListener = (isFocused: boolean) => void;

const addListener = (onFocusChange: EventHanlder<boolean>) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener(isFocused => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
