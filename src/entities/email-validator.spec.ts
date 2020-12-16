import { Email } from "./email";

describe ("Email validation", () => {
    test('should not accept null string', () => {
        const email  = null;
        expect(Email.validate(email).toBeFalsy());
    })

    test('should not accept empty string', () => {
        const email  =  '';
        expect(Email.validate(email).toBeFalsy());
    })

    test('shold accept valid email', () => {
        const email = 'email@dominy.com';
        expect(Email.validate(email).toBeTruthy());
    })

    test('should not accept local part larger than 64 chars', () => {
        const email  =  'l'.repeat(65) + '@dominy.com';
        expect(Email.validate(email).toBeFalsy());
    })

    test('should not accept strings larger than 320 chars', () => {
        const email  =  'l'.repeat(64) + '@dominy.com' + 'l'.repeat(320) ;
        expect(Email.validate(email).toBeFalsy());
    })


    test('should not accept local part empthy', () => {
        const email  =  'l'.repeat(65) + '@dominy.com';
        expect(Email.validate(email).toBeFalsy());
    })

})