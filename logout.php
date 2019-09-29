<?php
 $_SESSION['usernamee'] = "";
  session_start();
  session_destroy();
  header("location:index.php");
?>
