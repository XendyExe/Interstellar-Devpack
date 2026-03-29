import { BasePostProcessingConfig } from "../../Modding/ModdingTypes/ZoneConfig";
import PostProcessor from "./PostProcessor";
export interface LUTProcessorConfig extends BasePostProcessingConfig {
    path: string;
}
export default class LUTProcessor extends PostProcessor {
    texture: WebGLTexture | null;
    lutLocation: WebGLUniformLocation | null;
    constructor();
    load(lut: Blob): Promise<LUTProcessor>;
    update(time: number): void;
}
