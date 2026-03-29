import { BasePostProcessingConfig } from "../../Modding/ModdingTypes/ZoneConfig";
import { InterstellarWebGL, Framebuffer } from "../InterstellarWebGL";
import ComplexPostProcessor from "./ComplexPostProcessor";
import PostProcessor from "./PostProcessor";
export interface BloomProcessorConfig extends BasePostProcessingConfig {
    threshold: number;
    blurriness: number;
    blurPasses: number;
    opacity: number;
}
export default class BloomProcessor extends ComplexPostProcessor {
    extractBrightProgram: PostProcessor;
    blurProgram: PostProcessor;
    private threshold;
    private blurriness;
    private blurPasses;
    private opacity;
    blurHoriz: boolean;
    finalPass: boolean;
    constructor(config?: Partial<BloomProcessorConfig>);
    setUniforms: boolean;
    render(igl: InterstellarWebGL, buffer: Framebuffer, time: number): void;
}
