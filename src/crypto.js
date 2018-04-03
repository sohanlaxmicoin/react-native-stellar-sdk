const createHash = require('create-hash');
const RNRandomBytes = require('react-native').NativeModules.RNRandomBytes;

if (!RNRandomBytes) {
    throw new Error('react-native-randombytes not linked');
}

const randomBytesAsync = length => {
    return new Promise((resolve, reject) => {
        RNRandomBytes.randomBytes(length, (err, base64String) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(new Buffer(base64String, 'base64'));
        });
    });
};

const randomBytes = () => {
    throw new Error('Use crypto.randomBytesAsync for React Native');
};

module.exports = {
    randomBytesAsync,
    randomBytes,
    createHash
};
