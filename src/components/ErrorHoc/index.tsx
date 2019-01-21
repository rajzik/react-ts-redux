import React, { Component } from 'react';
// import Error from '../Error';
import { Subtract } from 'utility-types';


// export default <P extends object>(WrappedComponent: React.ComponentType<P>) => {
//   return class extends Component<P & IErrorProps> {
//     render() {
//       const { error, ...props } = this.props as IErrorProps;

//       return error ? <Error /> : <WrappedComponent {...props} />;
//     }
//   };
// };




interface InjectedProps {
  onReset: () => any;
}

export const withErrorBoundary = <WrappedProps extends InjectedProps>(
  WrappedComponent: React.ComponentType<WrappedProps>
) => {
  type HocProps = Subtract<WrappedProps, InjectedProps> & {
    // here you can extend hoc props
  };
  type HocState = {
    readonly error: Error | null | string | undefined;
  };

  return class WithErrorBoundary extends React.Component<HocProps, HocState> {
    static displayName = `withErrorBoundary(${WrappedComponent.name})`;

    readonly state: HocState = {
      error: undefined,
    };

    componentDidCatch(error: Error | null, info: object) {
      this.setState({ error: error });
      this.logErrorToCloud(error, info);
    }

    logErrorToCloud = (error: Error | null, info: object) => {
      console.log(error, info);
    };

    handleReset = () => {
      this.setState({ error: undefined });
    };

    render() {
      const { children, ...restProps } = this.props as {
        children: React.ReactNode;
      };
      const { error } = this.state;

      if (error) {
        return (
          <WrappedComponent
            {...restProps}
            onReset={this.handleReset} // injected
          />
        );
      }

      return children;
    }
  };
};
