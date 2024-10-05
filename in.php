<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mental_health";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mood = $_POST['mood'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO mood_tracking (mood, timestamp) VALUES (?, NOW())");
    $stmt->bind_param("s", $mood);

    if ($stmt->execute()) {
        echo "Mood saved successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
