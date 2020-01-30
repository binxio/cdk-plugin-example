# CDK Plugin Demo

This project contains an example CDK Credentials Provider Plugin and an example CDK App that uses the plugin for obtaining AWS Credentials to the account.

For more information, please see the blog post at:  https://binx.io/

An example `~/.aws/credentials` file is provided, because the plugin requires an unusual configuration.

Contents of this repository:

```
.
├── app/                     Example app that uses the plugin
├── aws/                     Example aws credentials file
└── my-credential-provider/  Example credentials plugin
```

