var config = {
    //apiUrl: "http://127.0.0.1:1984/",
    apiUrl: "http://wallet.saronite.io:1984/",
    mainnetExplorerUrl: "https://saronite.info/",
    testnetExplorerUrl: "",
    stagenetExplorerUrl: "",
    nettype: 0, /* 0 - MAINNET, 1 - TESTNET, 2 - STAGENET */
    coinUnitPlaces: 9,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Saronite
    txCoinbaseMinConfirms: 30, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Saronite
    coinSymbol: 'XRN',
    openAliasPrefix: "xrn",
    coinName: 'Saronite',
    coinUriPrefix: 'saronite:',
    addressPrefix: 135,
    integratedAddressPrefix: 28039,
    subAddressPrefix: 25736,
    addressPrefixTestnet: 31006,
    integratedAddressPrefixTestnet: 25247,
    subAddressPrefixTestnet: 22944,
    addressPrefixStagenet: 31768,
    integratedAddressPrefixStagenet: 26009,
    subAddressPrefixStagenet: 23578,
    feePerKB: new JSBigInt('2000000000'),//20^10 - not used anymore, as fee is dynamic.
    dustThreshold: new JSBigInt('1000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 9,
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: true
};
