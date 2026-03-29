export declare let gl: WebGL2RenderingContext;
export declare function helper_setwebgl(_gl: WebGL2RenderingContext): void;
export declare function createShader(type: number, src: string): WebGLShader;
export declare function createProgram(vsSrc: string, fsSrc: string): WebGLProgram;
export declare function debugCurrentAtlas(): false | undefined;
/**
 * Extracts and displays all layers from a WebGL2 texture array in a new tab
 * most claude code ever but im lazy
 * @param textureArray - The 2D texture array to debug
 * @param width - Width of each texture layer
 * @param height - Height of each texture layer
 * @param layerCount - Number of layers in the texture array
 * @param options - Optional configuration
 */
export declare function debugTextureArray(textureArray: WebGLTexture, width: number, height: number, layerCount: number, options?: {
    outlineColor?: string;
    outlineWidth?: number;
    backgroundColor?: string;
    spacing?: number;
    title?: string;
}): void;
