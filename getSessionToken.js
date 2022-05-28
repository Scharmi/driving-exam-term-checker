exports.getSessionToken = function() {
        const charactersBeforeToken = 13;
        const tokenLength = 36;
        var axios = require('axios');
        return axios.get('https://info-car.pl/oauth2/login')
        .then(function (response) {
            return (response.data.slice(
                response.data.indexOf("csrf") + charactersBeforeToken, 
                response.data.indexOf("csrf") + charactersBeforeToken + tokenLength
            ));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}