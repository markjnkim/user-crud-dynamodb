const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

dynamodb.scan({}, (err, data) => {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data);           // successful response
})