import { InterstellarWebGL, Framebuffer } from "../InterstellarWebGL";
import ColorOverlayProcessor from "./ColorOverlayProcessor";
import ComplexPostProcessor from "./ComplexPostProcessor";
import PostProcessor from "./PostProcessor";
export declare class BorderGlowProcessor extends ComplexPostProcessor {
    blurProgram: PostProcessor;
    colorOverlayProcessor: ColorOverlayProcessor;
    private blurriness;
    private blurPasses;
    private opacity;
    blurHoriz: boolean;
    finalPass: boolean;
    constructor();
    render(igl: InterstellarWebGL, buffer: Framebuffer, time: number): void;
}
