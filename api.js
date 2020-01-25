axios.get('https://api.github.com/users/nelsoncastro')
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error){
        console.warn(error);
    })