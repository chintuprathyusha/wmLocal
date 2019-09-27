<?php
  $data = $_POST;
    session_start();
      $_SESSION['usernamee'] = $data['username'];
      $_SESSION['tool_tips'] = $data['tool_tips'];
      $_SESSION['allprevialges'] = $data['allprevialges'];
      $_SESSION['isnewuser'] = $data['isnewuser'];
      $_SESSION['role'] = $data['role'];
      $_SESSION['useremail'] = $data['useremail'];
      $_SESSION['sessionidd'] = $data['sessionidd'];
      $_SESSION['userid'] = $data['userid'];
?>
