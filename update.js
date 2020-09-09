const AWS = require("aws-sdk");
AWS.config.update({region:'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

const modify = () => {
  const params = {
    TableName: "Users",
    Key: { "email_id": "another-example@gmail.com" },
    UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
    ExpressionAttributeValues: {
      ":byUser": "updateUser",
      ":boolValue": true
    },
    ReturnValues: "UPDATED_NEW"
  };

  docClient.update(params, (err, data) => {
    if (err) {
      console.log("Users::update::error - " + JSON.stringify(err, null, 2));
    } else {
      console.log("Users::update::success " + JSON.stringify(data));
    }
  });
}

modify();
