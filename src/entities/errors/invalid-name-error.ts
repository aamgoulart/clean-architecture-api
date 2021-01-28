export class InvalidNameError extends Error{
    public readonly name = "InvalidnameError";

    constructor (name: string) {
        super('Invalid name' + name);
    }
}