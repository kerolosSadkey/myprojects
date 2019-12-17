$(function(){
/********************************************/
    if(localStorage.length >0){
     var event_detile = {}  
       event_detile.e_type ="";  
       event_detile.e_target = "";  
       event_detile.e_date ="" ; 
     var localevent;
    for(var i=0;i < localStorage.length;i++){
        localevent=(JSON.parse(localStorage.getItem(localStorage.key(i))));
        for(var j=0;j < localevent.length;j++){
        event_detile.e_type += localevent[j].etype+ ",";  
        event_detile.e_target += localevent[j].etarget +",";  
         event_detile.e_date += localevent[j].etime + ","; 
            console.log(localevent[j].etype);
         }
    }
    
     
      
 }
    

var clearintrval =setInterval(function(){
    
$.ajax({
    "type":"POST",
    "url":"insertion.php",
    "data":{data:JSON.stringify(event_detile)},
    "success":function(response){
        
       localStorage.clear();
         
}

});

    
},5000);
    
 
    
$.ajax({
     type:"GET",
      url:"selection.php",
      data:{"seldata":""},
      success:function(respon){
          console.log("llllllllll");
          console.log(respon);
    $(".btn").click(function(){
         var events=JSON.parse(respon);
        if(events.length ==0){
            $("body").append("<h1>NOT Found data In Database<h1>")
        }
        for(var i=0;i<events.length;i++){
            
            $(".table").append("<div class='tr"+(i+1)+"'></div>")
           $(".tr"+(i+1)+"").append('<p>'+events[i].ev_type+'</p>');
           $(".tr"+(i+1)+"").append('<p>'+events[i].ev_traget+'</p>');
           $(".tr"+(i+1)+"").append('<p>'+events[i].ev_date+'</p>');
          
       }
        $(this).slideUp();
        
    })  ;    
          
       
       
}

});
    
});

