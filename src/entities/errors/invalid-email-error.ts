export class InvalidEmailError extends Error{
    public readonly = 'InavlidEmailError';

    constructor (email: string) {
        super('Invalid email' + email);
    }
}