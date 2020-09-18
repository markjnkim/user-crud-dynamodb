const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

const fetchData = () => {
  const params = {
    TableName: "Users"
  };

  dynamodb.scan(params, (err, data) => {
    if (err) console.log(err, err.stack);  // an error occurred
    else console.log(data);                // successful response
  })
}

fetchData();


const scanPhotos = () => {
  const params = {
    TableName: "Photos"
  };

  dynamodb.scan(params, (err, data) => {
    if (err) console.log(err, err.stack); // an error occurred
    else {
      console.log(data);           // successful response
    }
  })
}

// scanPhotos();

const scanTable = () => {
  const params = {
    TableName: "Thoughts"
  };

  dynamodb.scan(params, (err, data) => {
    if (err) console.log(err, err.stack);  // an error occurred
    else {
      console.log("data", data);
      // setThoughts(data);
      // console.log("thoughts", thoughts)
    }               // successful response
  })
}

// scanTable();