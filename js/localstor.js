
/*var eventcontent=document.getElementById("eventcontent");
for(var i=0;i<localStorage.length;i++){
    var localevnet=JSON.parse(localStorage.getItem(localStorage.key(i)));
    var h3=document.createElement("h3");
    h3.setAttribute("id","h3");

    for(var j=0;j<localevnet.length;j++){
        
        h3.textContent ="[type of event: "+localevnet[j].etype +"]; [target value : "+localevnet[j].etarget+
            "]; [time of event: "+localevnet[j].etime+"];";   
        eventcontent.appendChild(h3);
    }
     

}
<<<<<<< HEAD
*/
=======

// clear locak storage after 5000 sec
setInterval(function(){
    
    
localStorage.clear();    

},5000);
>>>>>>> 1483c21314d69d51c75fd9ddfb9bb922219ff4ff
