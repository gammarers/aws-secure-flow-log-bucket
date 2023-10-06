import { App, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { SecureFlowLogBucket } from '../src';

describe('SecureFlowLogBucket Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const bucket = new SecureFlowLogBucket(stack, 'SecureFlowLogBucket');

  it('Is Bucket', () => {
    expect(bucket).toBeInstanceOf(s3.Bucket);
  });

  const template = Template.fromStack(stack);

  it('Should have write access bucket policy', () => {
    template.hasResourceProperties('AWS::S3::BucketPolicy', Match.objectEquals({
      Bucket: {
        Ref: Match.stringLikeRegexp('SecureFlowLogBucket'),
      },
      PolicyDocument: {
        Version: '2012-10-17',
        Statement: Match.arrayWith([
          Match.objectEquals({
            Action: 's3:PutObject',
            Effect: 'Allow',
            Principal: {
              Service: 'delivery.logs.amazonaws.com',
            },
            Resource: {
              'Fn::Join': [
                '',
                [
                  {
                    'Fn::GetAtt': [
                      Match.stringLikeRegexp('SecureFlowLogBucket'),
                      'Arn',
                    ],
                  },
                  '/AWSLogs/123456789012/*',
                ],
              ],
            },
            Condition: {
              StringEquals: {
                's3:x-amz-acl': 'bucket-owner-full-control',
              },
            },
          }),
        ]),
      },
    }));
  });

  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});