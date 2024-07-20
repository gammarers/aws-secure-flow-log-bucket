import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  authorOrganization: true,
  cdkVersion: '2.80.0',
  constructsVersion: '10.0.5',
  typescriptVersion: '5.3.x',
  jsiiVersion: '5.3.x',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-secure-flow-log-bucket',
  description: 'Specific AWS VPC FlowLog Bucket',
  keywords: ['aws', 'cdk', 'aws-cdk', 's3', 'bucket', 'vpc', 'flow'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-secure-flow-log-bucket.git',
  majorVersion: 1,
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    '@gammarers/aws-secure-log-bucket@~1.7.0',
    '@gammarers/aws-secure-bucket@~1.4.1',
  ],
  peerDeps: [
    '@gammarers/aws-secure-log-bucket@~1.7.0',
    '@gammarers/aws-secure-bucket@~1.4.1',
  ],
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '22.4.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * 0']), // every sunday (JST/MON:04:00)
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr', 'Yicr'],
  },
  publishToPypi: {
    distName: 'gammarers.aws-secure-flow-log-bucket',
    module: 'gammarers.aws_secure_flow_log_bucket',
  },
  publishToNuget: {
    dotNetNamespace: 'Gammarers.CDK.AWS',
    packageId: 'Gammarers.CDK.AWS.SecureFlowLogBucket',
  },
});
project.synth();