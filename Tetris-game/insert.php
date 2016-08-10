<?php
$connect = mysqli_connect("localhost", "root", "", "tetris");
$sql = "INSERT INTO highscore(name, score) VALUES('".$_POST["name"]."', '".$_POST["score"]."')";
if(mysqli_query($connect, $sql))
{
    echo 'Data Inserted';
}
?>