
<script>
$(document).ready(function () {
    var username = sessionStorage.getItem("usernamee");

})

// $('#displayusername').append('<p value='+username+'>Hello &nbsp;&nbsp<img src="assets/images/WhiteIcons/user profile.png" alt="" style="height: 29px;color:white;">&nbsp'+username+'</p>')
// })
</script>
<style media="screen">
.navbar-expand-md .navbar-brand {
    min-width: 13.625rem;
}
.navbar-nav-link{
    margin: 0px !important;
}
#displayusername{
    color: #fff;
    font-size: 16px;
}
.dropdown-toggle::after {
    font-family: icomoon;
    display: inline-block;
    border: 0;
    vertical-align: middle;
    font-size: .6875rem;
    margin-left: .46875rem;
    line-height: 1;
    position: relative;
    content: "";
    font-size: 16px;
    color: #fff;
}
</style>
<div class="navbar navbar-expand-md" style="background-color:#1F2022">
    <div class="navbar-brand">
        <!-- <a href="" class="d-inline-block" style=""> -->
        <img src="assets/images/2nd Folder/whitelogo2.png" alt="" class="logoCLick" style="height: 35px;margin-top: 9px;">
        <!-- </a> -->
    </div>
    <div class="d-md-none">
        <button class="" type="button">
            <i class="icon-tree5"></i>
        </button>
        <button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
            <i class="icon-paragraph-justify3"></i>
        </button>
    </div>

    <div class="collapse navbar-collapse" id="navbar-mobile">
        <!-- <ul class="navbar-nav" style="margin-bottom: 0px;">
            <li class="nav-item">
                <a href="#" class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block" style="color:white">
                    <i class="icon-paragraph-justify3"></i>
                </a>
            </li>
        </ul> -->


        <ul style="float: right;width: 100%;">

            <li class="nav-item dropdown dropdown-user" style="float: right;list-style-type: none;">
                <!-- <p>help</p> -->
                <a href="#" class="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

                    <!-- <span id="displayusername"></span> -->
                    <span>
                        <p id="displayusername">Hello &nbsp;&nbsp<img src="assets/images/WhiteIcons/user profile.png" alt="" style="height: 29px;color:white;">&nbsp<?php echo $_SESSION['usernamee']?></p>

                    </span>
                </a>

                <div class="dropdown-menu dropdown-menu-right" style="background-color:#324148;">

                    <?php if ($_SESSION['login_type'] == 'ad'): ?>
                        <button class="dropdown-item logutAD" ><i class="icon-switch2"></i> Log out AD</button>
                    <?php endif; ?>
                    <?php if ($_SESSION['login_type'] == 'login'): ?>
                        <button id="logoutbtnid" class="dropdown-item logoutbtn"><i class="icon-switch2"></i> Logout</button>
                    <?php endif; ?>

                </div>
            </li>
        </ul>

    </div>
</div>
<script src="assets/js/common.js"></script>
<script src="assets/js/headerjs.js"></script>
