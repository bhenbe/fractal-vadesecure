'use strict';

const request = require('request-promise'); // require the request-promise module

// make the request to the API, returns a Promise
var options = {
    uri: 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=200',
    json: true // Automatically parses the JSON string in the response
};

// do some post-processing on the response to wrangle it into the correct format
var response = request(options).then(function (testApiData) {
    var testData = [];
    for (let test of testApiData) {
        testData.push({
            title: test.title,
            url: test.url
        });
    }
    return testData;
}).catch(function (err) {
    console.log(err);
});

module.exports = {
    title: "Post card",
    status: "ready",
    default: "default",
	context: {
		posts: response // use the response as context data for our template.
	}
};