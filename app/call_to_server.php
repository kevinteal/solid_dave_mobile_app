<?php
//connect to the uni server and retrive the data, echo it here 
require_once("http://nestor.sunderland.ac.uk/~bf90ve/bettingapp/home/dbConnect.php");

$query="SELECT showname from myshowkev where mydayname='sunday' ORDER BY showname desc limit 5";
$show = mysql_query($query);
while ($row = mysql_fetch_array($show))
{	
	echo $row["showname"];
	echo "<br/>";
}



?>