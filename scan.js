const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

const scanTable = () => {
  const params = {
    TableName: "Users"
  };
 
  dynamodb.scan(params, (err, data) => {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
  })
}

scanTable();
