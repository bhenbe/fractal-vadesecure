'use strict';

const request = require('request-promise'); // require the request-promise module

// make the request to the API, returns a Promise
var options = {
    uri: 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20',
    json: true // Automatically parses the JSON string in the response
};

// do some post-processing on the response to wrangle it into the correct format
/*var response = request(options).then(function (testApiData) {
    const testData = [];
    for (let test of testApiData) {
        testData.push({
            title: test.title,
            url: test.url
        });
    }
    console.log(response);
    return testData;
}).catch(function (err) {
    console.log(err);
});*/

var response = [ { title: 'accusamus beatae ad facilis cum similique qui sunt',
url: 'https://via.placeholder.com/600/92c952' },
{ title: 'reprehenderit est deserunt velit ipsam',
url: 'https://via.placeholder.com/600/771796' },
{ title: 'officia porro iure quia iusto qui ipsa ut modi',
url: 'https://via.placeholder.com/600/24f355' },
{ title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
url: 'https://via.placeholder.com/600/d32776' },
{ title: 'natus nisi omnis corporis facere molestiae rerum in',
url: 'https://via.placeholder.com/600/f66b97' },
{ title: 'accusamus ea aliquid et amet sequi nemo',
url: 'https://via.placeholder.com/600/56a8c2' },
{ title: 'officia delectus consequatur vero aut veniam explicabo molestias',
url: 'https://via.placeholder.com/600/b0f7cc' },
{ title: 'aut porro officiis laborum odit ea laudantium corporis',
url: 'https://via.placeholder.com/600/54176f' },
{ title: 'qui eius qui autem sed',
url: 'https://via.placeholder.com/600/51aa97' },
{ title: 'beatae et provident et ut vel',
url: 'https://via.placeholder.com/600/810b14' },
{ title: 'nihil at amet non hic quia qui',
url: 'https://via.placeholder.com/600/1ee8a4' },
{ title: 'mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores',
url: 'https://via.placeholder.com/600/66b7d2' },
{ title: 'repudiandae iusto deleniti rerum',
url: 'https://via.placeholder.com/600/197d29' },
{ title: 'est necessitatibus architecto ut laborum',
url: 'https://via.placeholder.com/600/61a65' },
{ title: 'harum dicta similique quis dolore earum ex qui',
url: 'https://via.placeholder.com/600/f9cee5' },
{ title: 'iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt',
url: 'https://via.placeholder.com/600/fdf73e' },
{ title: 'natus doloribus necessitatibus ipsa',
url: 'https://via.placeholder.com/600/9c184f' },
{ title: 'laboriosam odit nam necessitatibus et illum dolores reiciendis',
url: 'https://via.placeholder.com/600/1fe46f' },
{ title: 'perferendis nesciunt eveniet et optio a',
url: 'https://via.placeholder.com/600/56acb2' },
{ title: 'assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error',
url: 'https://via.placeholder.com/600/8985dc' } ];

module.exports = {
    title: "Post card",
    status: "ready",
    default: "default",
	context: {
		posts: response // use the response as context data for our template.
	}
};