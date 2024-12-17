import React from "react";

export function useModalState(
  initailValue = false
): [boolean, () => void, () => void] {
  const [visible, setVisible] = React.useState(initailValue);

  const show = React.useCallback(() => setVisible(true), []);
  const hide = React.useCallback(() => setVisible(false), []);

  return [visible, show, hide];
}
