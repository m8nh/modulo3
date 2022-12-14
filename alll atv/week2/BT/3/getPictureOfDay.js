axios = require('axios');
function getJSONAPI() {
    return new Promise(function (resolve) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (json) {
                resolve(json.data);
            });
    });
}
getJSONAPI().then(result => {
    console.log(result);
})

