import { GridScan } from "./GridScan";
export function GridBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <GridScan
        sensitivity={0.55}
        lineThickness={1}
        linesColor="#55AA66"
        gridScale={0.1}
        scanColor="#8C52C7"
        scanOpacity={0.4}
        enablePost
        bloomIntensity={0.6}
        chromaticAberration={0.002}
        noiseIntensity={0.01}
        lineJitter={0}
        scanGlow={0.5}
      />
    </div>
  );
}
