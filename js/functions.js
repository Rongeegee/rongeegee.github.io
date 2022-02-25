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

function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };