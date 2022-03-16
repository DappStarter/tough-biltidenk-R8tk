require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space stomach cruise range minor good clock onion genre'; 
let testAccounts = [
"0x9039b82952204165949b17385d76a499afe1a66cf445df19859dc6484921fc2a",
"0xb7a0a2919af4112750ba4d89e8900d657a358c93af0b0ed178d5d0a688572c96",
"0xe9f68916a70aa790c90fb54a3f1bf798248eb0146e26e2197fcfe211ab27a0ce",
"0xb3f849f4f07cadf820540e41904b493f15ccb8372e38963c794f3503bbeca4e9",
"0x4f098ca5679adb2105762cfc96d5a3d303d42d766faab35104ef62456b1a0c53",
"0xa23d38b73ca6803660f4db012d38379aa5369cb87745bbfd5fb9d940928c3292",
"0xe9e6591431e8f70f01f9e0107ebc11afaab6cbc643eab0cf894815f1955f6e27",
"0x0cbf18cd8719e7bfd80ffce8443fcf00181683b173b1e60e152281ae4555c5ec",
"0x12089a9031f8bfedc25143e549b256bc30fb353059582c41ff05742cf3ef3058",
"0xe1cfd34527f562a08599ff29ad7b5cc55bded38cf8849edaffb8f6e887ed1509"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


