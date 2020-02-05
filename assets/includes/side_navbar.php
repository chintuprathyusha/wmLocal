<!-- Main sidebar -->
<style>
    .sidebar-dark .nav-sidebar .nav-link{
        color: #fff !important;
    }
    .nav .nav-sidebar li  a{
        color: #fff !important;
    }
</style>

<!-- <div class="hidden">
    <input type="text" name="" value=">" hidden>
</div> -->

<div class="sidebar  sidebar-main sidebar-expand-md" style="background-color:#1F2022;">

  <!-- Sidebar mobile toggler -->
  <div class="sidebar-mobile-toggler text-center">
    <a href="#" class="sidebar-mobile-main-toggle">
      <i class="icon-arrow-left8"></i>
    </a>
    Navigation
    <a href="#" class="sidebar-mobile-expand">
      <i class="icon-screen-full"></i>
      <i class="icon-screen-normal"></i>
    </a>
  </div>
  <!-- /sidebar mobile toggler -->


  <!-- Sidebar content -->
  <div class="sidebar-content">

    <!-- Main navigation -->
    <div class="card card-sidebar-mobile">
      <ul class="nav nav-sidebar" data-nav-type="accordion">

        <!-- Main -->
        <!-- <li class="nav-item-header"><div class="text-uppercase font-size-xs line-height-xs">Main</div> <i class="icon-menu" title="Main"></i></li> -->
        <li id="userprofileid" class="nav-item nav-item-submenu hidden">
          <a href="userprofile.php" class="nav-link" style="color: #fff !important;" style="color: #fff !important;">
            <!-- <i class="icon-home4"></i> -->
            <img style="width:22px;height:22px;color:white;" src="assets/images/user.svg"/>
            <span style="width:20px;"></span>
            <span>
              User Profile
          </span>
          </a>
        </li>
        <li  id="createplan"  class="nav-item nav-item-submenu hidden">
          <a href="planner_createnewplan.php?type=new" class="nav-link" style="color: #fff !important;">
            <img style="width:22px;height:22px;color:white;" src="assets/images/WhiteIcons/CreateNewPlan.png"/>
              <span style="width:20px;"></span>
             <span>Create New Plan</span></a>
        </li>
        <!-- <li class="nav-item nav-item-submenu">
          <a href="planner_ongoing_dashboard.php" class="nav-link" style="color: #fff !important;"><i class="icon-color-sampler"></i> <span>On Going Plans Dashboard</span></a>
        </li> -->
        <li  id="myplans"  class="nav-item nav-item-submenu hidden">
          <a href="planner_ongoing_dashboard.php" class="nav-link" style="color: #fff !important;">
            <img style="width:22px;height:22px;color:white;" src="assets/images/WhiteIcons/MyPlans.png"/>
              <span style="width:20px;"></span>
             <span>My Plans</span></a>
        </li>

        <li  id="ongoingdashboard"  class="nav-item nav-item-submenu hidden">
          <a href="planner_dashboard.php" class="nav-link" style="color: #fff !important;">
          <img style="width:22px;height:22px;color:white;" src="assets/images/WhiteIcons/OnGoing Plans.png"/>
            <span style="width:20px;"></span>
            <span>OnGoing Team Plans</span></a>
        </li>

        <li  id="add_deleteid"  class="nav-item nav-item-submenu hidden">
          <a href="add_delete.php" class="nav-link" style="color: #fff !important;">
            <img style="width:22px;height:22px;color:white;" src="assets/images/WhiteIcons/assign.png"/>
              <span style="width:20px;"></span>

             <span>Assign Planner</span></a>
        </li>

        <li  id="comple"  class="nav-item nav-item-submenu hidden">
          <a href="planner_completedplans.php" class="nav-link" style="color: #fff !important;">
            <img style="width:22px;height:22px;color:white;" src="assets/images/WhiteIcons/completed Plans.png"/>
            <span style="width:20px;"></span>
            <span>Completed Team Plans</span>
            <!-- fghjkl;'' -->
            <!-- <span class="badge bg-blue-400 align-self-center ml-auto">2.2</span> -->
          </a>
        </li>
        <li  id="admin" class="nav-item  nav-item-submenu hidden">
          <a href="adminindex.php" class="nav-link" style="color: #fff !important;">
            <i class="icon-user"></i>
            <span>Master Settings</span>
            <!-- <span class="badge bg-blue-400 align-self-center ml-auto">2.2</span> -->
          </a>
        </li>
        <li  id="help" class="nav-item  nav-item-submenu ">
              <a href="help.php" class="nav-link" style="color: #fff !important;">

            <img style="width:22px;height:22px;color:white;" src="assets/images/WhiteIcons/information.png"/>
               <span style="width:20px;"></span>
                <span>Help</span>
                <!-- <span class="badge bg-blue-400 align-self-center ml-auto">2.2</span> -->
              </a>
            </li>
        <!-- /main -->


      </ul>
    </div>
    <!-- /main navigation -->

  </div>
  <!-- /sidebar content -->

</div>

<!-- /main sidebar -->
