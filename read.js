const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2' });

const docClient = new AWS.DynamoDB.DocumentClient();
const fetchOneByKey = () => {
  const params = {
    TableName: "Users",
    Key: {
      "email_id": "example@gmail.com"
    }
  };
  docClient.get(params, (err, data) => {
    if (err) {
      console.log("Users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
    }
    else {
      console.log("Users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
    }
  })
}

fetchOneByKey();
