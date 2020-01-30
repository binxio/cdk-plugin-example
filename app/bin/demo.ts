#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { DemoStack } from '../lib/demo-stack';

const app = new cdk.App();
new DemoStack(app, 'DemoStack', {
    env: {
        account: "681665459516",
        region: "eu-west-1",
    },
});
