<?php
// File: connect.php
//setting up location variable to make chaning location simple

 //$strLocation = "Home";
 $strLocation = "University";

if ($strLocation == "Home") {
    $dbConn = mysql_connect("localhost", "root", "")
	   or die("Could not connect: " . mysql_error());
	
	mysql_select_db("bet", $dbConn)
	or die("Could not find database: " . mysql_error());
}
else {
	
$dbConn = mysql_connect("drawcam.co.uk", "kevin", "fatfish")
	or die("Could not connect: " + mysql_error());

mysql_select_db("client105678_maindb", $dbConn)
	or die("Could not find database: " + mysql_error());

}




$query="SELECT * from soliddave_facts";
$show = mysql_query($query);
while ($row = mysql_fetch_array($show))
{	
	echo $row["fact"];
	echo "<br/>";
}

			  
?>

