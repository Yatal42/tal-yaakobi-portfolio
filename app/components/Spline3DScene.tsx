import { lazy, Suspense } from "react";

/*
 * Spline3DScene embeds the Spline scene via the official React component.
 * We lazily import the component to ensure it only runs on the client.
 */

// Lazy load Spline component client side
const Spline = lazy(() => import("@splinetool/react-spline").then((m) => ({ default: m.default })));

export default function Spline3DScene({
  scene,
  className,
}: {
  scene: string;
  className?: string;
}) {
  return (
    <div className={className} style={{ pointerEvents: "auto", position: "relative" }}>
      <Suspense fallback={<div className="w-full h-full bg-gray-100 animate-pulse" />}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore - dynamic import default typing */}
        <Spline 
          scene={scene} 
          style={{ 
            width: "100%", 
            height: "100%",
            pointerEvents: "auto",
            touchAction: "auto"
          }}
        />
      </Suspense>
    </div>
  );
} 