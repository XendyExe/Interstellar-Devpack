import ComplexPostProcessor from "./PostProcessing/ComplexPostProcessor";
import PostProcessor from "./PostProcessing/PostProcessor";
export declare enum BUFF_STAGE {
    NONE = 0,
    GAME_BUFFER = 1,
    MIDGROUND_BUFFER = 2,
    PROCESSOR = 3
}
export declare class Framebuffer {
    id: number;
    fbo: WebGLFramebuffer;
    texture: WebGLTexture;
    stage: BUFF_STAGE;
    constructor(id: number);
    renderTo(other: Framebuffer | null, processor: PostProcessor): void;
    copyTo(other: Framebuffer, processor: PostProcessor, stage: BUFF_STAGE): void;
    resize(): void;
}
export declare class InterstellarWebGL {
    private frameBufferWidth;
    private frameBufferHeight;
    private framebuffers;
    copyProcess: PostProcessor;
    borderProcessor: ComplexPostProcessor;
    private glitchProcessor;
    allProcessors: (PostProcessor | ComplexPostProcessor)[];
    gameProcessors: (PostProcessor | ComplexPostProcessor)[];
    bgProcessors: (PostProcessor | ComplexPostProcessor)[];
    glitching: boolean;
    debugProcess: (PostProcessor | ComplexPostProcessor) | null;
    constructor();
    buffers: number;
    pushBuffer(): void;
    create(): void;
    frameTime: {
        backgrounds: number;
        postprocess: number;
        borders: number;
        final: number;
    };
    program: WebGLProgram | null;
    postProcessed: boolean;
    renderPassBackgrounds(): void;
    renderPassPostProcessing(): void;
    renderPassStartBorders(): void;
    renderPassBorders(): void;
    endFrame(): void;
    getFramebuffer(stage: BUFF_STAGE): Framebuffer;
    getInactiveFramebuffer(): Framebuffer;
    applyPostProcess(stage: BUFF_STAGE, processor: (PostProcessor | ComplexPostProcessor)): void;
}
declare const _default: InterstellarWebGL;
export default _default;
