 // josn function to store as object in local storage
function interaction(etype,etarget,etime){
    this.etype=etype;
    this.etarget=etarget;
    this.etime=etime;
}
//------------------------------------------------------------------
var i=0;

window.addEventListener("unload",function(eve){
    
          var date=new Date();
    var fulldate =date.getDate()+"/"+date.getMonth()+ "/" + date.getFullYear()+ "  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
          var obj=new interaction(eve.type,"windowunload",fulldate);
          var items=[];
          items.push(obj);
    localStorage.setItem('unload'+(++i),JSON.stringify(items));
    
});
//--------------------------------------------------------------------------------------------------------------
window.addEventListener("load",function(eve){
     
          var date=new Date();
       var fulldate =date.getDate()+"/"+date.getMonth()+ "/" + date.getFullYear()+ "  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
          var obj=new interaction(eve.type,"windowload",fulldate);
          var items=[];
          items.push(obj);
    
    localStorage.setItem('load'+(++i),JSON.stringify(items));
    




//------------------------------------------------------------------------------------------------------------------
var selct=document.getElementById("select");

// fill select option by 1:26
for(var i=0; i<26;i++){
    
    var option=document.createElement("option");
    var txt=document.createTextNode(i+1)
    option.appendChild(txt);
    selct.appendChild(option);
}

//--------------------------------------------------


// make array object to letters and rout of image 
var letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var image=["../image/en1.gif",  "../image/en2.jpg", "../image/en3.gif","../image/en4.jpg",                                "../image/en5.gif", "../image/en6.gif",  "../image/en7.gif",                                                      "../image/en8.gif","../image/en9.gif", "../image/en10.gif","../image/en11.gif",                      "../image/en12.gif","../image/en13.gif","../image/en14.jpg","../image/en15.jpg","../image/en16.jpg","../image/en17.gif","../image/en18.gif","../image/en19.gif","../image/en20.gif","../image/en21.jpg", "../image/en22.jpg","../image/en23.jpg","../image/en24.gif", "../image/en25.jpg", "../image/en26.jpg"];
//------------------------------------------------------------------------------

var btn=document.getElementById("btn");
var divcontentbtn=document.getElementById("btncontent");
 var imgcontent=document.getElementById("imgcontent");


 //select option from select filed and agreegate letters 
btn.addEventListener("click",function(e){
    
          
      var date=new Date();
       var fulldate =date.getDate()+"/"+date.getMonth()+ "/" + date.getFullYear()+ "  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
          var obj=new interaction(e.type,"buuton aggregation select " +selct.value+" letters",fulldate);
          console.log(obj.etime)
          var items=[];
          items.push(obj);
    localStorage.setItem('show'+(date.getDay()+date.getMonth()),JSON.stringify(items));
    
    var slevalue=selct.value;
      var checkrand=new Array();
    
    //(لو ضغط مرة اخري بيحذف العناصر المخزنة  )if press button appare as frist time element (button)
    while(divcontentbtn.firstChild){
        divcontentbtn.removeChild(divcontentbtn.firstChild);
    }
     //if press button appare as frist time element (image)
     while(imgcontent.firstChild){
        imgcontent.removeChild(imgcontent.firstChild);
    }
    
    for(var i=0;i<slevalue;i++){ //strat for generate bottuns
        var s=false;
     var rondmnum=Math.floor(Math.random()*(letters.length)); 
        //------------------------------
        //to do not display tow or more button at the same letters( بنفس الحرف button لكي لا يطبع اكثر من  )
        for(var k=0; k<checkrand.length;k++){
            if(checkrand[k]==rondmnum){
                i--;
             s=true;
            }
        }
        if(s){
            continue;
        }
        //-----------------------------------
    var button=document.createElement("input");
        button.setAttribute("class","alpha");
        button.setAttribute("type","button");
        button.setAttribute("value",letters[rondmnum]);
        divcontentbtn.appendChild(button);
        
      //-------------------------------------------------------------------
              checkrand[i]=rondmnum;
    } //end for  generate bottuns
     
    
    
    var btnevent=document.getElementsByClassName("alpha"); 
    
    
    if(e.target.id=="btn"){ // if event is made in aggregate will  make statment
        
        
        //event generate image by tha name of letter 
        Array.from(btnevent).forEach(v=>v.addEventListener("click",function(ev){
          
           //if press button appare as frist time element (image)
         while(imgcontent.firstChild){
        imgcontent.removeChild(imgcontent.firstChild);
         }
        var indx=0;
        var val=ev.target.value;
        for(var i=0;i<letters.length;i++){
          if(val==letters[i]){
             indx=i;
            } 
        }
          //-----------------------------------------------------
        var img=document.createElement("img");
        img.setAttribute("src",image[indx]);
        imgcontent.appendChild(img);
          
          //-------------------------------------------------------
          
          var date=new Date();
               var fulldate =date.getDate()+"/"+date.getMonth()+ "/" + date.getFullYear()+ "  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
          var obj=new interaction(ev.type,ev.target.value,fulldate);
          console.log(obj.etime)
          var items=[];
          items.push(obj);
          localStorage.setItem('evenletter'+ev.target.value,JSON.stringify(items));
}));
    }
    
});
    
});

/**********************************************************************************************/
    
 
 
//**********************************************//


