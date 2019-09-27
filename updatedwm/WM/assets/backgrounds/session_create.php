<?php
  $data = $_POST['userarray'];

  session_start();

  $_SESSION['IsActive'] = $data[0];
  $_SESSION['UserRole'] = $data[1];
  $_SESSION['WebUsername'] = $data[2];

  if ($_SESSION['UserRole'] ==  "kavya") {
      echo "planner_dashboard.php";
  } elseif ($_SESSION['UserRole'] == "nazz") {
      echo "client_dashboard.php";
  } else {
      echo "admin_master.php";
  }



?>
