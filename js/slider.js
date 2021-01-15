
$click = 0;
$(".up").css("pointer-events","none");

$(".down").click(function() {
  $click++;
    if($click == 1){
      $(".slider").animate({'margin-top': '-132px'}, '3000');
      $(".item:nth-child(1)").animate({'opacity': '0'}, '3000');
      $(".item:nth-child(6)").fadeIn('3000');
    }
    if($click == 2){
      $(".slider").animate({'margin-top': '-257px'}, '3000');
      $(".item:nth-child(2)").animate({'opacity': '0'}, '3000');
      $(".item:nth-child(7)").fadeIn('3000');
    }
    if($click == 3){
      $(".slider").animate({'margin-top': '-387px'}, '3000');
      $(".item:nth-child(3)").animate({'opacity': '0'}, '3000');
      $(".item:nth-child(8)").fadeIn('3000');
    }
    if($click == 4){
      $(".slider").animate({'margin-top': '-512px'}, '3000');
      $(".item:nth-child(4)").animate({'opacity': '0'}, '3000');
      $(".item:nth-child(9)").fadeIn('3000');
    }
    if($click > 0){
	    $(".up").css("pointer-events","auto");
    }
    if($click == 4){
	    $(".down").css("pointer-events","none");
    }
});

$(".up").click(function() {
$click--;
	  if($click == 0){
      $(".slider").animate({'margin-top': '0'}, '3000');
      $(".item:nth-child(1)").animate({'opacity': '1'}, '3000');
      $(".item:nth-child(6)").fadeOut('3000');
    }
   	if($click == 1){
    	$(".slider").animate({'margin-top': '-132px'}, '3000');
      $(".item:nth-child(2)").animate({'opacity': '1'}, '3000');
      $(".item:nth-child(7)").fadeOut('3000');
    }
    if($click == 2){
    	$(".slider").animate({'margin-top': '-257px'}, '3000');
      $(".item:nth-child(3)").animate({'opacity': '1'}, '3000');
      $(".item:nth-child(8)").fadeOut('3000');
    }
    if($click == 3){
    	$(".slider").animate({'margin-top': '-387px'}, '3000');
      $(".item:nth-child(4)").animate({'opacity': '1'}, '3000');
      $(".item:nth-child(9)").fadeOut('3000');
    }
		if($click == 0){
	    $(".up").css("pointer-events","none");
    }
    if($click < 4){
	    $(".down").css("pointer-events","auto");
    }
});
