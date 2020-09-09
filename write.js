const AWS = require("aws-sdk");
AWS.config.update({region:'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

const save = () => {
	const input = {
		"email_id": "another-example@gmail.com",
		"created_by": "clientUser",
		"created_on": new Date().toString(),
		"updated_by": "clientUser",
		"updated_on": new Date().toString(),
		"is_deleted": false
	};
	const params = {
		TableName: "Users",
		Item: input
	};

	docClient.put(params, (err, data) => {
		if (err) {
			console.log("Users::save::error - " + JSON.stringify(err, null, 2));
		} else {
			console.log("Users::save::success");
		}
	});
}

save();
