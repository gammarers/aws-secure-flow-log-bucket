import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  typescriptVersion: '4.9.x',
  jsiiVersion: '~5.0.0',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-secure-flow-log-bucket',
  description: 'Specific AWS VPC FlowLog Bucket',
  keywords: ['aws', 'cdk', 'aws-cdk', 's3', 'bucket', 'vpc', 'flow'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarer/aws-secure-flow-log-bucket.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  deps: [
    '@gammarer/aws-secure-log-bucket@~0.12.6',
    '@gammarer/aws-secure-bucket@~0.12.4',
  ],
  peerDeps: [
    '@gammarer/aws-secure-log-bucket@~0.12.6',
    '@gammarer/aws-secure-bucket@~0.12.4',
  ],
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '18.17.1',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * 0']), // every sunday (JST/MON:04:00)
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
  publishToPypi: {
    distName: 'gammarer.aws-secure-flow-log-bucket',
    module: 'gammarer.aws_secure_flow_log_bucket',
  },
  publishToMaven: {
    mavenGroupId: 'com.gammarer',
    javaPackage: 'com.gammarer.cdk.aws.secure_flow_log_bucket',
    mavenArtifactId: 'aws-secure-flow-log-bucket',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },
});
project.synth();