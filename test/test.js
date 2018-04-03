require('react-native').NativeModules.RNRandomBytes = {
    randomBytes: (length, cb) => cb(null, 'i5gOos0YivqmiLBVAsWTbU9VWBausxF43ghv2C+n9y4=')
};

const Stellar = require('../stellar-sdk');

describe('Test', () => {
    it('Creates Keypair', () => {
        expect.assertions(1);
        return expect(Stellar.Keypair.randomAsync()).resolves.toHaveProperty('secret');
    });

    it('Throws Error', () => {
        expect(() => Stellar.Keypair.random()).toThrow();
    });
});
