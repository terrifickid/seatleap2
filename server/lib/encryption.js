const crypto = require('crypto');
const URLSafeBase64 = require('./urlsafe-base64');

const algorithm = 'aes-256-cbc';
const sharedSecret = 'eix2Aephai7showeifabo6ro6ieng3oh';
const ivHex = '117a5792fbada28d1b862a925c6d7e6f';

function getKey() {
  let hash = crypto.createHash('sha256');
  let key = hash.update(sharedSecret).digest();
  return key;
}

function decodeAndDecrypt(text) {
    let key = getKey();
    let decodedBuffer = URLSafeBase64.decode(text);
    let iv = decodedBuffer.slice(0, 16);    //First 16 bytes of the cipher are the iv
    let cipherTextBuffer = decodedBuffer.slice(16, decodedBuffer.length);
    let decipher = crypto.createDecipheriv(algorithm, key, iv);
    decipher.setAutoPadding(false);
    let decrypted = decipher.update(cipherTextBuffer);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    //Look at the last byte for the padding size and remove that many
    let numberOfPaddingBytes = decrypted[decrypted.length - 1];
    if (numberOfPaddingBytes < decrypted.length) {
      decrypted = decrypted.slice(0, decrypted.length - numberOfPaddingBytes)
    }

    let decryptedString = decrypted.toString();

    return decryptedString;
}

function encryptAndEncode(text) {

    //Pad the text to a block size that breaks down into 128 byte blocks
    let blockSize = 128;
    let bufferToEncrypt = Buffer.from(text);
    let numberOfBytesToPad = blockSize - text.length % blockSize;
    let paddingBuffer = Buffer.alloc(numberOfBytesToPad, numberOfBytesToPad);
    bufferToEncrypt = Buffer.concat([bufferToEncrypt, paddingBuffer]);

    let key = getKey();
    let iv = Buffer.from(ivHex, 'hex');
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    cipher.setAutoPadding(false);
    let encrypted = cipher.update(bufferToEncrypt);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    //Add the iv to the beginning - first 16 bytes are used for the iv
    let bufferToEncode = Buffer.concat([iv, encrypted])

    return URLSafeBase64.encode(bufferToEncode);
}

exports.decodeAndDecrypt = decodeAndDecrypt;
exports.encryptAndEncode = encryptAndEncode;
