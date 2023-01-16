require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot filter crawl museum update coral light army gentle'; 
let testAccounts = [
"0xf0905a5aef5befb9f917ca039545f5e8318bafe5c3c2607e8f0fddceb0eb4fbb",
"0x5582f0191fabe6f9f140a41db04819e64f457cdb05a0e0d6c98901a55da0ba0d",
"0x1e950c8ab5870dfb7c47b097d469b05cd1852f3938855a993adf034e9d63e582",
"0xd4bbca4875f73227118b614a585fbfc25d70e9893ce1712f7d6cf780b460fa54",
"0x2cf77f4560ca26f3674ad855ace716ab52d62a3d65ac11741f470453d5f15053",
"0x632cfe76be4f698a1f693a71309755bafae6798ba931ae44e41d8a3bbfb85acb",
"0xb9b26da57b8e4f82de718ebe7200851b0c2f88bd366622d41c106ee694965f68",
"0x4a6f519ff770d0d285841bb95cbc801119f522359a2b95e704b4909d2ed575e1",
"0xf00f23e7df0e5685af7bb4d1bcc7b3a41abad340d9c84eede79a5f046635c9c4",
"0xad60eb678a7a0073603cfbcd7e523defa992df9df815d3cb52e008d8bbd3127e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

