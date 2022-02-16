function makeApiCall(url, method, contentType, data, Callback){
    const options = {
        method: method,
        body: JSON.stringify(data),
        headers: {
        'Content-Type': contentType,
        },
    };
    fetch(url, options)
        .then(response => response.json())
        .then( response => {    
          alert("Thank you! Message was sent successfully.");
    });

}