export class Email {
    static validate(email: string): boolean {
        const [local, domain] = email.split('@');
        const domainParts = domain.split('.');
        const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!email){
            return false;
        }

        if (email.length > 320) {
            return false;
        } 

        if (local.length > 64 || local.length === 0) {
            return false;
        }

        if (domain.length > 255 || domain.length === 0) {
            return false;
        }

        if (domainParts.some(function (part){
            return part.length > 63
        })) {
            return false;
        }

        if (!email_regex.test(email)) {
            return false;
        }

    }
}