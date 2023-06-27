import { SecureLogBucket, SecureLogBucketProps } from '@yicr/aws-secure-log-bucket';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export interface SecureFlowLogBucketProps extends SecureLogBucketProps {
  readonly keyPrefixes?: string[];
}

export class SecureFlowLogBucket extends SecureLogBucket {
  constructor(scope: Construct, id: string, props?: SecureFlowLogBucketProps) {
    super(scope, id, props);

    // 👇Get current account
    const account = cdk.Stack.of(this).account;

    // 👇バケットACLアクセス権
    this.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['s3:GetBucketAcl'],
      principals: [
        new iam.ServicePrincipal('delivery.logs.amazonaws.com'),
      ],
      resources: [this.bucketArn],
    }));

    // 👇バケット書き込みアクセス権
    this.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['s3:PutObject'],
      principals: [
        new iam.ServicePrincipal('delivery.logs.amazonaws.com'),
      ],
      //resources: [`${this.bucketArn}/AWSLogs/${account}/*`],
      resources: (() => {
        if (props?.keyPrefixes && props.keyPrefixes.length > 0) {
          const resources: Array<string> = [];
          for (const keyPrefix of props.keyPrefixes) {
            resources.push(`${this.bucketArn}/${keyPrefix}/AWSLogs/${account}/*`);
          }
          return resources;
        }
        return [`${this.bucketArn}/AWSLogs/${account}/*`];
      })(),
      conditions: {
        StringEquals: {
          's3:x-amz-acl': 'bucket-owner-full-control',
        },
      },
    }));

  }
}