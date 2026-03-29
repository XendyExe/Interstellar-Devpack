import PostProcessor from "./PostProcessor";
export default class TransitionPostProcessor extends PostProcessor {
    private resolutionLocation;
    private displacementMapLocation;
    private seedLocation;
    private offsetLocation;
    private directionLocation;
    private aspectLocation;
    private saturationLocation;
    private pixelSizeLocation;
    private redOffsetLocation;
    private greenOffsetLocation;
    private blueOffsetLocation;
    private displacementTexture;
    private canvas;
    private ctx;
    private _slices;
    private _sizes;
    private _offsets;
    private sampleSize;
    private minSize;
    private average;
    seed: number;
    offset: number;
    direction: number;
    saturation: number;
    pixelSize: {
        x: number;
        y: number;
    };
    redOffset: {
        x: number;
        y: number;
    };
    greenOffset: {
        x: number;
        y: number;
    };
    blueOffset: {
        x: number;
        y: number;
    };
    constructor();
    private randomizeSizes;
    private shuffle;
    private randomizeOffsets;
    refresh(): void;
    private redraw;
    get slices(): number;
    set slices(value: number);
    lastResX: number;
    lastResY: number;
    uploaded: boolean;
    update(): void;
}
