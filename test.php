<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>. . : : Graphically Insane : : . .</title>
<link href="css/styles.css" rel="stylesheet" type="text/css" />
<link href="css/fonts.css" rel="stylesheet" type="text/css" />
<script src="js/jquery.js"></script>
</head>

<body>
<div id="header">
  <div class="follow">Follow me on blah blah</div>
  <div class="version">Version 2.0</div>
  <div id="banner"><img src="images/logo.png" alt="Graphically Insane" width="425" height="41" /></div>
  <div id="mainNavigation">
    <div class="navigationSlider">
      <div class="navItem"><a href="#">
        <div class="TLcorner"></div>
        <div class="TRcorner"></div>
        <div class="navText">Home</div>
        <div class="BLcorner"></div>
        <div class="BRcorner"></div>
        </a> </div>
      <div class="navItem"><a href="#">
        <div class="TLcorner"></div>
        <div class="TRcorner"></div>
        <div class="navText">Portfolio</div>
        <div class="BLcorner"></div>
        <div class="BRcorner"></div>
        </a> </div>
      <div class="navItem"><a href="#">
        <div class="TLcorner"></div>
        <div class="TRcorner"></div>
        <div class="navText">Skills</div>
        <div class="BLcorner"></div>
        <div class="BRcorner"></div>
        </a> </div>
      <div class="navItem"><a href="#">
        <div class="TLcorner"></div>
        <div class="TRcorner"></div>
        <div class="navText">Bio</div>
        <div class="BLcorner"></div>
        <div class="BRcorner"></div>
        </a> </div>
      <div class="navItem"><a href="#">
        <div class="TLcorner"></div>
        <div class="TRcorner"></div>
        <div class="navText">Contact</div>
        <div class="BLcorner"></div>
        <div class="BRcorner"></div>
        </a> </div>
      <div class="navBg"></div>
    </div>
  </div>
</div>
</div>
<div id="main">
  <p>Content for  class "header" id "headerID" Goes Here</p>
</div>
<p>&nbsp; </p>
<p>&nbsp; </p>
<script>
 $(".navItem").click(function(){
	 var xVar = this.offsetLeft + 3;  
  	$(".navBg").animate({"left": xVar+"px"}, "slow");
	currClick = this
});
$(window).resize(function() {
	var xVar2 = currClick.offsetLeft + 3;
  $(".navBg").animate({"left": xVar2+"px"},0);
});

  </script>
</body>
</html>
