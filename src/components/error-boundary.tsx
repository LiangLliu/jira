import React, { ReactNode } from "react";

type FailBackRender = (props: { error: Error | null }) => React.ReactElement;

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ failBackRender: FailBackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { failBackRender, children } = this.props;
    if (error) {
      return failBackRender({ error });
    }
    return children;
  }
}
