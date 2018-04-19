var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    //Maker request to the counter endpoint
    
    // Capture the response anD store it in a variable
    
    // Render the variable in the correct span 
    counter = counter +1;
    var span = document.getElementById('count');
    alert(span);
    span.innerHTML = counter.toString();
};