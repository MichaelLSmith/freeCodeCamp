var req;
var responseObj;

function apiCall(){
    console.log('apiCall()');
    //create a new Request Object
    req = new XMLHttpRequest();
    //send the request as a POST and the endpoint URL
    req.open('POST','https://andruxnet-random-famous-quotes.p.mashape.com/' );
    //set the request Header with the api Key
    req.setRequestHeader('X-Mashape-Authorization', 'UuZOCYntdMmshUnvVOfNYgkvX3Fmp1PY0f3jsnsVVD0B26Shd2');
    //set the response type as JSON. Alternative is to JSON.parse the response
    req.responseType = 'json';
    //request handler
    req.onreadystatechange = function(){
        //if the request is successful:
        if(req.readyState === 4 && req.status === 200){
            //do something with the response
            console.log(req);
            //save response obj as global variable
            responseObj = req.response;
            //run the print quote function
            printQuote(req.response);
        }
        // else console.log('request error. Try again.');
    }
    //send the request
    req.send();
}
//call the api request function when the page loads
// apiCall();

//function to print quote to HTML
function printQuote(responseObj){
    var output =  '<p class="Quote">'+'"'+responseObj.quote+'"'+'</p>';
        output += '<p class="right-align col s6 offset-s6 Author">';
        output += responseObj.author+'</p>';
    
    document.getElementById('quote').innerHTML = output;
}


//event listener tied to New Quote button
document.getElementById("newQuote").addEventListener("click", apiCall);

function tweetQuote(){
    var tweetURL = 'https://twitter.com/intent/tweet';
    var quote = '"'+responseObj.quote+'"'+'\n'+'&hashtags='+responseObj.author;
    console.log(quote)
    console.log(quote.length);

    var sendURL = encodeURI( tweetURL + '?text=' + quote);
    console.log(sendURL);
    window.open(sendURL);

}
//send Tweet
document.getElementById("tweet").addEventListener("mousedown", tweetQuote);

