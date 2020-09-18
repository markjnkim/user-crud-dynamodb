const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
    region: "us-east-2",
});

const docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing data into DynamoDB. Please wait.");

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
data.forEach( photo => {
    const params = {
        TableName: "Photos",
        Item: {
            "name":  photo.name,
            "category": photo.category,
            "description":  photo.description
        }
    };

    docClient.put(params, (err, data) => {
       if (err) {
           console.error("Unable to add photo", photo.title, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", photo.title);
       }
    });
});