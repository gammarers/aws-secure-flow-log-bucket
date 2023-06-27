import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  defaultReleaseBranch: 'main',
  name: 'aws-secure-flow-log-bucket',
  keywords: ['aws', 'cdk', 'aws-cdk', 's3', 'bucket', 'vpc', 'flow'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-secure-flow-log-bucket.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    '@yicr/aws-secure-log-bucket',
  ],
  peerDeps: [
    '@yicr/aws-secure-log-bucket',
  ],
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
});
project.synth();