/*
console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML ='New value';

//move the image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft = '100px';
};


var marginLeft=0;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,50)
};
*/

//Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    
    //Make a request to the counter endpoint.
    var request = new XMLhttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState == XMLhttprequest.DONE){
            //Take some action
            if(request.status == 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    
    
    
/*    //Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
*/

    //Make the request
    request.open('GET','http://thomasnevink.imad.hasura-app.io/counter',true);
    request.send(null);
};
