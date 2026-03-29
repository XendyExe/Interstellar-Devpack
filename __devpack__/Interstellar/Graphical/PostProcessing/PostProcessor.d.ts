export default class PostProcessor {
    program: WebGLProgram;
    positionLocation: number;
    vao: WebGLVertexArrayObject;
    constructor(vertex: string, fragment: string);
    update(time: number): void;
}
