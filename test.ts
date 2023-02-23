import {ChainvineClient} from "@chainvine/sdk";

const client = new ChainvineClient({
    apiKey: 'afc5901f-74eb-4c35-8675-ca215107c72b',
    testMode: false, // optional, defaults to false. When set to true, the SDK will use the test API endpoint
});

console.log(client);
client.getWalletAddressForUser('067wO3UwbWNHmbPtmauIpNxBORo1').then((res) => {
    console.log(res);
});


