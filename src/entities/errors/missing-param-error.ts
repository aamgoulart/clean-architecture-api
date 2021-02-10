export class MissingParamError extends Error {
    public readonly = 'MissingParamError';

    constructor(param: string) {
        super("Missing parameter from request: ${param}");
    }
}