import * as cdk from "aws-cdk";
import { MyCredentialProviderSource } from "./my-credential-provider-source";


export class MyCredentialProviderPlugin implements cdk.Plugin {
    public readonly version = "1";

    public init(host: cdk.PluginHost): void {
        host.registerCredentialProviderSource(new MyCredentialProviderSource());
    }
}