function makeApiCall(url, method, contentType, data, callback){
    const options = {
        method: method,
        body: JSON.stringify(data),
        headers: {
        'Content-Type': contentType,
        },
    };
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            if(callback){
                callback(response);
            }     
    });

}