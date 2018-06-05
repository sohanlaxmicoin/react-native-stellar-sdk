import {Keypair} from '../stellar-sdk';

describe('Test', () => {
    it('Creates Keypair', () => {
        expect.assertions(1);
        return expect(Keypair.randomAsync()).resolves.toHaveProperty('secret');
    });

    it('Throws Error', () => {
        expect(() => Keypair.random()).toThrow();
    });
});
