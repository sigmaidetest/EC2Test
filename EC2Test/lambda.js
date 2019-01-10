let AWS = require('aws-sdk');
const ec2 = new AWS.EC2();

exports.handler = function (event, context, callback) {

    // ec2.stopInstances({
    //     InstanceIds: [
    //         "i-04419cd9fc033848f"
    //     ]
    // }).promise()
    // .then(data => {
    //     console.log(data);
    //     callback(null, data);
    // })
    // .catch(err => {
    //     console.log("Error occurred", err);
    //     callback(err);
    // });

    // ec2.startInstances({
    //     InstanceIds: [
    //         "i-04419cd9fc033848f"
    //     ]
    // }).promise()
    // .then(data => {
    //     console.log(data);
    //     callback(null, data);
    // })
    // .catch(err => {
    //     console.log("Error occurred", err);
    //     callback(err);
    // });

    ec2.describeInstanceStatus({
        InstanceIds: [
            "i-04419cd9fc033848f"
        ]
    }).promise()
    .then(data => {
        console.log(data);
        callback(null, data);
    })
    .catch(err => {
        console.log("Error occurred", err);
        callback(err);
    });
}