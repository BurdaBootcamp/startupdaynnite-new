function detectmob() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
function setLaunch(number,elm){
  $(".col-md-4.active").removeClass("active")
  $(".blue-overlay").removeClass("blue-overlay")
  var e= $(elm).find(".col-md-4")[0]
  $(e).addClass("active")
  $("#launch-image").css("background-image","url(images/launch"+number+".jpg)")
}


function scroll(name){

    $('html, body').animate({
        scrollTop: $('[name="' + name + '"]').offset().top
    }, 500);
    return false;

}
  if(!detectmob()){
$( document ).ready(function() {
  var top=Number($("#splash").height())
  var left=Number($( window ).width()/20)
  var deg=20;

  var id = setInterval(function() {
    factor=1;
    deg=deg+0.08;
    top=top-(1-(deg/90));
    if(deg,90){
        left=left+((deg/90));
    }else{
      left=left+(((180-deg)/90));
    }


    if(top>Number($("#splash").height())){
      top=Number($("#splash").height())
      left=Number($( window ).width()/20);

      deg=20;
    }
    $("#rocket").css("top",(top)+"px")
    $("#rocket").css("left",(Number(left))+"px")
    $("#rocket").css("transform","rotate("+(deg-70)+"deg)")
    $("#rocket").css("width",(Number(top)/15+40)+"px")


}, 10)

})

$( document ).ready(function() {
  var top=Number($("#splash").height())
  var left=Number($( window ).width()/20)

  var id = setInterval(function() {
    top=top-1;
    left=left+1;
    if(top<-10){
      top=Number($("#splash").height())
      left=Number($( window ).width()/20);

    }
    $("#komet").css("top",(top)+"px")
    $("#komet").css("right",(Number(left))+"px")
    $("#komet").css("width",(Number(top)/15+50)+"px")


}, 10)

})
}

$( document ).ready(function() {
  var top=30;
  var left=0;
if(!detectmob()){
  var id = setInterval(function() {
    top=top+0.3;
    left=left+1;
    if(top>Number($("#splash").height())||left>$( window ).width()){
      top=0
      left=30

    }
    $("#komet2").css("top",(top)+"px")
    $("#komet2").css("right",(Number(left))+"px")
    $("#komet2").css("top",(top)+"px")
    $("#komet2").css("width",(70-Number(top)/15)+"px")

}, 10)
}

if ($(document).scrollTop() < Number($("#splash").height())) {
    $(".down").hide();
    $(".up").show();
} else {
  $(".down").show();
  $(".up").hide();
   $(".menu").addClass("white-menu")
}



$(".imprint").hide()
var wrap = $(window);

   wrap.on("scroll", function(e) {
      $(".white-menu").removeClass("white-menu")
       if ($(document).scrollTop() < Number($("#splash").height())) {
           $(".down").hide();
           $(".up").show();
       } else {
         $(".down").show();
         $(".up").hide();
           $(".menu").addClass("white-menu")
       }

   });
})
