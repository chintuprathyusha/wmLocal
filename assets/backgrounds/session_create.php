<?php
  $data = $_POST;
  session_start();
  $_SESSION['allprevialges'] = $data['allprevialges'];
  $_SESSION['isnewuser'] = $data['isnewuser'];
  $_SESSION['role'] = $data['role'];
  $_SESSION['useremail'] = $data['useremail'];
  $_SESSION['userid'] = $data['userid'];
  $_SESSION['sessionidd'] = $data['sessionidd'];
  $_SESSION['usernamee'] = $data['username'];
  $_SESSION['isprofile'] = $data['isprofile_created'];
  $_SESSION['tool_tips'] = $data['tool_tips'];
  $_SESSION['login_type'] = $data['login_type'];
?>
