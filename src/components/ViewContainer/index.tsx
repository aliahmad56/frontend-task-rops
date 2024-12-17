import React from 'react';
import { createStyles } from '../../utils';

export function ViewContainer({ children }: React.PropsWithChildren) {
  return <div style={styles.container}>{children}</div>;
}

const styles = createStyles({
  container: {
    paddingInline: '3em',
    marginTop: '5em',
  },
});
