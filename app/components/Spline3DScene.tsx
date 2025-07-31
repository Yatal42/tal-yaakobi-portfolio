import { lazy, Suspense, useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={className} style={{ pointerEvents: "auto", position: "relative" }}>
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-[#295a7d] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-sm text-[#295a7d]">Loading...</p>
          </div>
        </div>
      }>
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
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#05082e]/80">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-[#295a7d] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-sm text-[#295a7d]">Loading...</p>
            </div>
          </div>
        )}
      </Suspense>
    </div>
  );
} 