declare module "@splinetool/react-spline" {
  import * as React from "react";
  interface SplineProps extends React.HTMLAttributes<HTMLDivElement> {
    scene: string;
    style?: React.CSSProperties;
    onLoad?: () => void;
    onMouseDown?: (e: any) => void;
    onMouseUp?: (e: any) => void;
    onMouseMove?: (e: any) => void;
    onWheel?: (e: any) => void;
  }
  const Spline: React.FC<SplineProps>;
  export default Spline;
}

declare module "@splinetool/react-spline/next" {
  import * as React from "react";
  interface SplineProps extends React.HTMLAttributes<HTMLDivElement> {
    scene: string;
  }
  const Spline: React.FC<SplineProps>;
  export default Spline;
}
