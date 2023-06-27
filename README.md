# AWS Secure Flow Log Bucket

Specific AWS VPC FlowLog Bucket

## Install

### TypeScript

```shell
npm install @yicr/aws-secure-flow-log-bucket
```
or
```shell
yarn add @yicr/aws-secure-flow-log-bucket
```

## Example

### TypeScript

```shell
npm install @yicr/aws-secure-flow-log-bucket
```

```typescript
import { SecureFlowLogBucket } from '@yicr/aws-secure-flow-log-bucket';

const bucket = new SecureFlowLogBucket(stack, 'SecureFlowLogBucket', {
  keyPrefixes: [
    'example-prefix-a',
    'example-prefix-b',
  ],
});

```

## License

This project is licensed under the Apache-2.0 License.
