<?php
$accessString = $_SESSION['UserRole'];
$access = explode(',', $accessString);
$url = $_SERVER['REQUEST_URI'];
$urlName = pathinfo($url, PATHINFO_FILENAME);
?>
<div class="sidebar sidebar-dark sidebar-main sidebar-expand-md">

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

    <!-- User menu -->
    <div class="sidebar-user">


    </div>
    <!-- /user menu -->


    <!-- Main navigation -->
    <div class="card card-sidebar-mobile">
      <ul class="nav nav-sidebar" data-nav-type="accordion">

        <!-- Main -->
        <!-- <li class="nav-item-header"><div class="text-uppercase font-size-xs line-height-xs">Main</div> <i class="icon-menu" title="Main"></i></li> -->
<?php if ($accessString == 'planner'): ?>
        <li class="nav-item"  <?php if ($urlName == 'planner_dashboard'): ?>>

<?php endif; ?>
          <a href="planner_dashboard.php" class="nav-link active">
            <i class="icon-home4"></i>
            <span>
            Dashboard
            </span>
          </a>
        </li>
<?php endif; ?>

<?php if ($accessString == 'planner'): ?>
<li class="nav-item"  <?php if ($urlName == 'planner_createnewplan'): ?>>

<?php endif; ?>
<a href="planner_createnewplan.php" class="nav-link active">
<i class="icon-home4"></i>
<span>
Create New Plan
</span>
</a>
</li>
<?php endif; ?>

<?php if ($accessString == 'planner'): ?>
<li class="nav-item"  <?php if ($urlName == 'planner_ongoing'): ?>>

<?php endif; ?>
<a href="planner_ongoing.php" class="nav-link active">
<i class="icon-home4"></i>
<span>
On-Going plan
</span>
</a>
</li>
<?php endif; ?>

<?php if ($accessString == 'planner'): ?>
<li class="nav-item"  <?php if ($urlName == 'planner_completedplans'): ?>>

<?php endif; ?>
<a href="planner_completedplans.php" class="nav-link active">
<i class="icon-home4"></i>
<span>
Completed plans
</span>
</a>
</li>
<?php endif; ?>


<?php if ($accessString == 'client'): ?>
<li class="nav-item"  <?php if ($urlName == 'planner_dashboard'): ?>>

<?php endif; ?>
<a href="planner_dashboard.php" class="nav-link active">
<i class="icon-home4"></i>
<span>
Dashboard
</span>
</a>
</li>
<?php endif; ?>

<?php if ($accessString == 'client'): ?>
<li class="nav-item"  <?php if ($urlName == 'planner_createnewplan'): ?>>

<?php endif; ?>
<a href="planner_createnewplan.php" class="nav-link active">
<i class="icon-home4"></i>
<span>
Create New Plan
</span>
</a>
</li>
<?php endif; ?>


<?php if ($accessString == 'client'): ?>
<li class="nav-item"  <?php if ($urlName == 'client_ongoingplans'): ?>>

<?php endif; ?>
<a href="client_ongoingplans.php" class="nav-link active">
<i class="icon-home4"></i>
<span>
On-Going plan
</span>
</a>
</li>
<?php endif; ?>

<?php if ($accessString == 'client'): ?>
<li class="nav-item"  <?php if ($urlName == 'client_clpage'): ?>>

<?php endif; ?>
<a href="client_clpage.php" class="nav-link active">
<i class="icon-home4"></i>
<span>
CL Page
</span>
</a>
</li>
<?php endif; ?>

        <li class="nav-item nav-item-submenu">
          <a href="user_createnewplan.php" class="nav-link"><i class="icon-copy"></i> <span>Create New Plan</span></a>
        </li>
        <li class="nav-item nav-item-submenu">
          <a href="#" class="nav-link"><i class="icon-color-sampler"></i> <span>On Going Plans</span></a>
        </li>
        <li class="nav-item nav-item-submenu">
          <a href="user_completedplans.php" class="nav-link"><i class="icon-stack"></i> <span>Completed Plans</span></a>
        </li>
        <li class="nav-item">
          <a href="changelog.html" class="nav-link">
            <i class="icon-list-unordered"></i>
            <span>Admin Page</span>
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
