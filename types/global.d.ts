interface TypeOptions {
  allowMultiple?: boolean;
  errorWhenNotFound?: boolean;
}

type StylesObject = any;

interface CSSModules {
  (defaultStyles: StylesObject, options?: TypeOptions): <C extends Function>(Component: C) => C;
  <C extends Function>(Component: C, defaultStyles: StylesObject, options?: TypeOptions): C;
}

declare module CSSModules {
  // Extend your component's Prop interface with this one to get access to `this.props.styles`
  //
  // interface MyComponentProps extends CSSModules.InjectedCSSModuleProps {}
  interface InjectedCSSModuleProps {
      styles?: StylesObject;
  }
}

declare let CSSModules: CSSModules;

export = CSSModules;

declare module 'react' {
  interface HTMLAttributes<T> {
      styleName?: string;
  }
  interface SVGAttributes<T> {
      styleName?: string;
  }
}
