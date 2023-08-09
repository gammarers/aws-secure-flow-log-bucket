# AWS Secure Flow Log Bucket

Specific AWS VPC FlowLog Bucket

## Install

### TypeScript

```shell
npm install @gammarer/aws-secure-flow-log-bucket
# or
yarn add @gammarer/aws-secure-flow-log-bucket
```

### Python

```shell
pip install gammarer.aws-secure-flow-log-bucket
```

### Java

Add the following to pom.xml:

```xml
<dependency>
  <groupId>com.gammarer</groupId>
  <artifactId>aws-secure-flow-log-bucket</artifactId>
</dependency>
```

## Example

### TypeScript

```shell
npm install @gammarer/aws-secure-flow-log-bucket
```

```typescript
import { SecureFlowLogBucket } from '@gammarer/aws-secure-flow-log-bucket';

const bucket = new SecureFlowLogBucket(stack, 'SecureFlowLogBucket', {
  keyPrefixes: [
    'example-prefix-a',
    'example-prefix-b',
  ],
});

```

## License

This project is licensed under the Apache-2.0 License.
