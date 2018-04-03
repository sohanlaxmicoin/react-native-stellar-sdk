const {randomBytesAsync} = require('./crypto');

const Stellar = require('stellar-sdk');

Stellar.Keypair.randomAsync = function randomAsync() {
    return randomBytesAsync(32)
        .then(secret => Stellar.Keypair.fromRawEd25519Seed(secret));
};

Stellar.Keypair.random = function random() {
    throw new Error('Use Stellar.Keypair.randomAsync for React Native');
};

module.exports = Stellar;
