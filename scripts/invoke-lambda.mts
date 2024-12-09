import { handler } from '../consumer/index.mjs';
import testData from '../consumer/test_data/carMockData.json' assert { type: "json" };


async function invoke() {

    console.log('Lambda Input:', testData);
    // @ts-ignore
    const result = await handler(testData, {
        awsRequestId: '1234',
        functionName: 'myFunction',
        functionVersion: '1',
        invokedFunctionArn: 'arn:aws:lambda:us-east-1:123456789012:function:myFunction',
        memoryLimitInMB: '128',
        logGroupName: 'test',
        logStreamName: 'test',
        getRemainingTimeInMillis: () => 1000,
        callbackWaitsForEmptyEventLoop: false,
        done: () => {},
        fail: () => {},
        succeed: () => {}
    });
    console.log('Lambda Result:', result);
}

invoke().catch(console.error);