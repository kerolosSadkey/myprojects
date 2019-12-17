<?php
$name_server="localhost";
$uname="root";
$pssword="";
$namedb="storage_event";
    
 $con= mysqli_connect($name_server,$uname,$pssword,$namedb);
//header('Content-type: application/json');
 echo $_POST['data'];

if(isset($_POST['data'])){
    
   $event = json_decode($_POST['data'],true); 
    

        $arretype = explode(',', $event['e_type']);
         $arretraget = explode(',', $event['e_target']);
         $arredate = explode(',', $event['e_date']);
 
        for($i=0;$i< count($arretype)-1;$i++){
         $query="INSERT INTO events (ev_type,ev_traget,ev_date) VALUES ('$arretype[$i]','$arretraget[$i]','$arredate[$i]')";
           $insertcorrect = $con->query($query);
        }
         if($insertcorrect){
             echo "values inserted successfully";
         }else
         {
             echo "some problem in insertion";
         }
   
}





?>