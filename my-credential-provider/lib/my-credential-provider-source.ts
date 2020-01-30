import * as cdk from "aws-cdk";
import AWS = require("aws-sdk");


export class MyCredentialProviderSource implements cdk.CredentialProviderSource {
    name: string;

    constructor() {
        console.debug("MyCredentialProviderSource.constructor()");
        this.name = "MyCredentialProviderSource";
    }

    public async isAvailable(): Promise<boolean> {
        console.debug("MyCredentialProviderSource.isAvailable()");
        return true;
    }

    public async canProvideCredentials(accountId: string): Promise<boolean> {
        console.debug(`MyCredentialProviderSource.canProvideCredentials(${accountId})`);
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async getProvider(accountId: string, mode: cdk.Mode): Promise<AWS.Credentials> {
        console.debug(`MyCredentialProviderSource.getProvider(${accountId}, ${mode})`);
        return new AWS.SharedIniFileCredentials({ profile: accountId });
    }
}
