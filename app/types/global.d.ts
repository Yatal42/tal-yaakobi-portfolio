import type React from "react";

declare namespace JSX {
  interface IntrinsicElements {
    // Allow usage of the custom <spline-viewer> element provided by the Spline viewer script
    // The element accepts the `url` attribute and any standard HTML attributes.
    "spline-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      url?: string;
      class?: string;
    };
  }
}
