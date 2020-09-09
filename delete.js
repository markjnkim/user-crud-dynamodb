const AWS = require("aws-sdk");
AWS.config.update({region:'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

const remove = () => {
  const params = {
    TableName: "Users",
    Key: {
      "email_id": "example@gmail.com"
    }
  };

  docClient.delete(params, (err, data) => {
    if (err) {
      console.log("Users::delete::error - " + JSON.stringify(err, null, 2));
    } else {
      console.log("Users::delete::success");
    }
  });
}

remove();
