<?php
// MySQL server ka hostname
$servername = "localhost";
// MySQL username
$username = "root";
// MySQL password
$password = "";
// Database ka naam
$dbname = "ExpenseTracker";

// Connection create karein
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>
