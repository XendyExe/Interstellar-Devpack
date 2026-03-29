export declare function loadCloudscapeData(): Promise<void>;
export interface LightningConfig {
    lightningMinDelay: number;
    lightningMaxDelay: number;
    lightningMinDuration: number;
    lightningMaxDuration: number;
    lightningIntensity: number;
    lightningFlashColor: number;
    lightningColors: number[];
}
export interface CloudscapeConfig {
    x: number;
    y: number;
    pz: number;
    innerRotation: number;
    outerRotation: number;
    rotationExponent: number;
    innerRadius: number;
    outerRadius: number;
    ringCount: number;
    density: number;
    bgColor: number;
    gradientColors: number[];
    lightning: LightningConfig | undefined | false | null;
}
export interface InternalLightningConfig {
    lightningMinDelay: number;
    lightningMaxDelay: number;
    lightningMinDuration: number;
    lightningMaxDuration: number;
    lightningIntensity: number;
    lightningFlashColor: [number, number, number, number];
    lightningColors: [number, number, number, number][];
}
export default class CloudscapeBackdrop {
    blitVao: WebGLVertexArrayObject;
    blitVbo: WebGLBuffer;
    program: WebGLProgram;
    blitProgram: WebGLProgram;
    locations: {
        attribs: Record<string, number>;
        uniforms: Record<string, WebGLUniformLocation>;
        blitUniforms: Record<string, WebGLUniformLocation>;
    };
    vao: WebGLVertexArrayObject;
    vbo: WebGLBuffer;
    ibo: WebGLBuffer;
    colorTexture: WebGLTexture;
    framebuffer: WebGLFramebuffer;
    framebufferTexture: WebGLTexture;
    vertices: number[];
    indices: number[];
    colors: number[];
    centerX: number;
    centerY: number;
    innerRotation: number;
    outerRotation: number;
    rotationExponent: number;
    innerRadius: number;
    outerRadius: number;
    ringCount: number;
    density: number;
    bgColor: [number, number, number, number];
    gradientColors: [number, number, number, number][];
    lightning: InternalLightningConfig | null;
    cloudLength: number;
    width: number;
    height: number;
    pz: number;
    constructor(config: Partial<CloudscapeConfig>, width: number, height: number);
    lastTime: number;
    startTime: number;
    render(): void;
    destroy(): void;
}
