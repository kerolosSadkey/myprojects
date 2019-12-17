<?php 

$name_server="localhost";
$uname="root";
$pssword="";
$namedb="storage_event";
 $con= mysqli_connect($name_server,$uname,$pssword,$namedb);
if(isset($_GET['seldata'])){
    $query="SELECT * FROM events";
    $slect=$con->query($query);
    if($slect){
        
        $arr=array();
        if($slect->num_rows > 0){
            
            while($row= $slect->fetch_assoc()){
                
                array_push($arr,$row);
            }
        } 
        
        echo json_encode($arr);
    }
    else{
        echo "no data retrive from database";
    }
}




?>