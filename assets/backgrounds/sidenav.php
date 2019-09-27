<?php
	$accessString = $_SESSION['access'];
	$access = explode(',', $accessString);
	$url = $_SERVER['REQUEST_URI'];
	$urlName = pathinfo($url, PATHINFO_FILENAME);
?>
<div class="bg-left">
	<div class="dv-h-w">
		<!-- Sidebar scroll-->
		<div class="scroll-sidebar ps-container">
			<nav class="sidebar-nav">
				<ul id="sidebarnav" class="in">
					<li class="sidebar-item headeringgg">
						<a class="sidebar-link has-arrow waves-effect waves-dark active" aria-expanded="false">
							<img src="assets/images/logo_min.png" class="lg-min">
							<span class="hide-menu">  <img src="assets/images/logo_rem_white.png" class="lg-rem"></span>
							<!-- <img src="assets/images/wns_min.png" class="lg-min">
							<span class="hide-menu">  <img src="assets/images/wns.png" class="lg-rem"></span> -->
						</a>
					</li>
					<li class="sidebar-item back-to-min">
						<a class="sidebar-link has-arrow waves-effect waves-dark collapse-min" aria-expanded="false">
							<i class="fa fa-chevron-circle-left collapse-min-i" aria-hidden="true"></i>
						</a>
					</li>
				</ul>
			</nav>
			<!-- Sidebar navigation-->
			<nav class="sidebar-nav sidebarmain-menu">
				<ul>
					<li class="sidebar-item <?php if ($urlName == 'stats'): ?>
			      selected
			    <?php endif; ?> ">
						<a href="stats.php" class="sidebar-link has-arrow waves-effect waves-dark active tooltip-arrow" aria-expanded="false" data-toggle="tooltip" data-placement="right" title="Stats">
							<img src="assets/images/md-trending-up.svg" width="20px">
							<span class="hide-menu">Stats</span>
						</a>
					</li>
					<li class="sidebar-item <?php if ($urlName == 'lead_index'): ?>
			      selected
			    <?php endif; ?> ">
						<a href="lead_index.php" class="sidebar-link has-arrow waves-effect waves-dark active tooltip-arrow" aria-expanded="false" data-toggle="tooltip" data-placement="right" title="Input Configuration">
							<img src="assets/images/md-log-out.svg" width="20px">
							<span class="hide-menu">Input Configuration</span>
						</a>
					</li>

					<li class="sidebar-item <?php if ($urlName == 'lead_output'): ?>
			      selected
			    <?php endif; ?> ">
						<a href="lead_output.php" class="sidebar-link has-arrow waves-effect waves-dark active tooltip-arrow" aria-expanded="false" data-toggle="tooltip" data-placement="right" title="Output Config">
							<img src="assets/images/md-log-in.svg" width="20px">
							<span class="hide-menu">Output Config</span>
						</a>
					</li>

					<li class="sidebar-item <?php if ($urlName == 'lead_fields_validations'): ?>
			      selected
			    <?php endif; ?> ">
						<a href="lead_fields_validations.php" class="sidebar-link has-arrow waves-effect waves-dark active tooltip-arrow" aria-expanded="false" data-toggle="tooltip" data-placement="right" title="Field Validations">
						 	<img src="assets/images/md-finger-print.svg" width="20px">
							<span class="hide-menu">Field Validations</span>
						</a>
					</li>

					<li class="sidebar-item <?php if ($urlName == 'lead_biz_rules1'): ?>
			      selected
			    <?php endif; ?> ">
						<a href="lead_biz_rules1.php" class="sidebar-link has-arrow waves-effect waves-dark active tooltip-arrow" aria-expanded="false" data-toggle="tooltip" data-placement="right" title="Business Rules">
							<img src="assets/images/md-build.svg" width="20px">
							<span class="hide-menu">Business Rules</span>
						</a>
					</li>
<!--
					<li class="sidebar-item <?php if ($urlName == 'lead_recom_engine'): ?>
			      selected
			    <?php endif; ?> ">
						<a class="sidebar-link has-arrow waves-effect waves-dark active tooltip-arrow" aria-expanded="false" data-toggle="tooltip" data-placement="right" title="Recommendation Engine">
							<img src="assets/images/md-cog.svg" width="20px">
							<span class="hide-menu">Recommendation Engine</span>
						</a>
					</li> -->

					<li class="sidebar-item <?php if ($urlName == 'lead_useraccess'): ?>
			      selected
			    <?php endif; ?> ">
						<a href="lead_useraccess.php" class="sidebar-link has-arrow waves-effect waves-dark active tooltip-arrow" aria-expanded="false" data-toggle="tooltip" data-placement="right" title="User Access">
							<img src="assets/images/md-key.svg" width="20px">
							<span class="hide-menu">User Access</span>
						</a>
					</li>



				</ul>
			</nav>
		</div>
	</div>
</div>
