import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import * as s3 from 'aws-cdk-lib/aws-s3';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  storage
});


const s3Bucket = backend.storage.resources.bucket;


const cfnBucket = s3Bucket.node.defaultChild as s3.CfnBucket;


cfnBucket.accelerateConfiguration = {
  accelerationStatus: "Enabled" // 'Suspended' if you want to disable transfer acceleration
}