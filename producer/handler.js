const AWS = require('aws-sdk');
AWS.config.region = process.env.AWS_REGION || 'eu-west-1';
const eventbridge = new AWS.EventBridge();

exports.producer = async function(event, context) {

    let body = JSON.parse(event.body);
    const orderEvents = body.products.map(product => ({
        Source: 'com.sufle.events',
        EventBusName: 'default',
        DetailType: 'order',
        Time: new Date(),
        // Main event body
        Detail: JSON.stringify(product)
    }))
    const result = await eventbridge.putEvents({
        Entries: orderEvents
    }).promise()
    return {
        statusCode: 200,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({"status": "OK"}),
    };
}
