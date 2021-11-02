

import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";


// Generally following this guide for Lambda + TS
//https://levelup.gitconnected.com/how-to-use-typescript-for-aws-lambda-in-3-steps-1996243547eb
// Rename lambdaHandler -> handler


export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const queries = JSON.stringify(event.queryStringParameters);
    return {
        statusCode: 200,
        body: `Queries: ${queries}`
    }
}