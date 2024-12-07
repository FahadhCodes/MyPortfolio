//Section-1
//Nav-line-animation
$(document).ready(function () {
  $(".ni-1").hover(function () {
    $(".linerunner").stop().animate({ left: "3.5%" });
  });
  $(".ni-2").hover(function () {
    $(".linerunner").stop().animate({ left: "28.5%" });
  });
  $(".ni-3").hover(function () {
    $(".linerunner").stop().animate({ left: "53.5%" });
  });
  $(".ni-4").hover(function () {
    $(".linerunner").stop().animate({ left: "78.5%" });
  });

  $(".ni-1,.ni-2").mouseleave(function () {
    $(".linerunner").stop().animate({ left: "-18%" });
  });
  $(".ni-3,.ni-4").mouseleave(function () {
    $(".linerunner").stop().animate({ left: "99.99%" });
  });
});
//offcanvas
$(document).ready(function () {
  $(".off-canvas-start").click(function () {
    $(".off-canvas").animate({ left: "0px" });
  });
  $(".off-canvas-end").click(function () {
    $(".off-canvas").animate({ left: "-300px" });
  });
});
//IMG-animation
$(document).ready(function () {
  var YSTmove = getComputedStyle(document.documentElement).getPropertyValue(
    "--YSTmove"
  );
  var YST = getComputedStyle(document.documentElement).getPropertyValue(
    "--YST"
  );
  var WST = getComputedStyle(document.documentElement).getPropertyValue(
    "--WST"
  );
  $(".img").hover(function () {
    $(".white-square").stop().animate({
      top: YSTmove,
      left: YSTmove,
      width: YST,
      height: YST,
    });
    $(".yellow-square").stop().animate({
      top: "0px",
      left: "0px",
      width: WST,
      height: WST,
    });
  });
  $(".img").mouseleave(function () {
    $(".white-square").stop().animate({
      top: "0px",
      left: "0px",
      width: WST,
      height: WST,
    });
    $(".yellow-square").stop().animate({
      top: YSTmove,
      left: YSTmove,
      width: YST,
      height: YST,
    });
  });
});

//Section-2
//Quick access line effect
$(document).ready(function () {
  $(".qal-1").hover(function () {
    $(".qaline-1").stop().animate({ left: "0%" });
  });

  $(".qal-2").hover(function () {
    $(".qaline-2").stop().animate({ left: "0%" });
  });
  $(".qal-3").hover(function () {
    $(".qaline-3").stop().animate({ left: "0%" });
  });
  $(".qal-4").hover(function () {
    $(".qaline-4").stop().animate({ left: "0%" });
  });

  $(".qal-1").mouseleave(function () {
    $(".qaline-1").stop().animate({ left: "-100%" });
  });
  $(".qal-2").mouseleave(function () {
    $(".qaline-2").stop().animate({ left: "-100%" });
  });
  $(".qal-3").mouseleave(function () {
    $(".qaline-3").stop().animate({ left: "-100%" });
  });
  $(".qal-4").mouseleave(function () {
    $(".qaline-4").stop().animate({ left: "-100%" });
  });
});
//Education-slideDowns
$(document).ready(function () {
  $(".edu-1").click(function () {
    $(".content-para").slideToggle();
  });
  $(".edu-2").click(function () {
    $(".content-para").slideToggle();
  });
  $(".edu-3").click(function () {
    $(".content-para").slideToggle();
  });
  $(".edu-4").click(function () {
    $(".content-para").slideToggle();
  });
  $(".edu-5").click(function () {
    $(".content-para").slideToggle();
  });
  $(".education").mouseenter(function () {
    $(".content-para").slideDown();
  });
  $(".qal-3").focusin(function () {
    $(".content-para").slideDown();
  });
});

$(document).ready(function () {
  $(".cer-1").click(function () {
    $(".popup").css({
      transform: "scale(1,1)",
      "background-image": "url('Images/CERTICATE/certificate(1).jpg')",
    });
  });
  $(".cer-2").click(function () {
    $(".popup").css({
      transform: "scale(1,1)",
      "background-image": "url('Images/CERTICATE/certificate(2).jpg')",
    });
  });
  $(".cer-3").click(function () {
    $(".popup").css({
      transform: "scale(1,1)",
      "background-image": "url('Images/CERTICATE/certificate(3).jpg')",
    });
  });
  $(".cer-4").click(function () {
    $(".popup").css({
      transform: "scale(1,1)",
      "background-image": "url('Images/CERTICATE/certificate(1).png')",
    });
  });
  $(".cer-5").click(function () {
    $(".popup").css({
      transform: "scale(1,1)",
      "background-image": "url('Images/CERTICATE/certificate(4).jpg')",
    });
  });
  $(".cer-6").click(function () {
    $(".popup").css({
      transform: "scale(1,1)",
      "background-image": "url('Images/CERTICATE/certificate(5).jpg')",
    });
  });
  $(".btn-close").click(function () {
    $(".popup").css("transform", "scale(0,0)");
  });
});
$(document).ready(function () {
  //Designing Skill
  var DA = 70; //Web Designing
  $(".D-skill-value.A").text(DA + "%");
  $(".D-bar-line.A").css({ width: DA + "%" });

  var DB = 85; //Post Designing
  $(".D-skill-value.B").text(DB + "%");
  $(".D-bar-line.B").css({ width: DB + "%" });

  var DC = 90; //LOGO Designing
  $(".D-skill-value.C").text(DC + "%");
  $(".D-bar-line.C").css({ width: DC + "%" });

  var DD = 80; //Bussiness Card
  $(".D-skill-value.D").text(DD + "%");
  $(".D-bar-line.D").css({ width: DD + "%" });

  var DE = 75; //Banner Designing
  $(".D-skill-value.E").text(DE + "%");
  $(".D-bar-line.E").css({ width: DE + "%" });

  //Coding Skill
  var CF = 80; //HTML & CSS
  $(".D-skill-value.F").text(CF + "%");
  $(".D-bar-line.F").css({ width: CF + "%" });

  var CG = 60; //PHP & MySQL
  $(".D-skill-value.G").text(CG + "%");
  $(".D-bar-line.G").css({ width: CG + "%" });

  var CH = 85; //Bootstrap
  $(".D-skill-value.H").text(CH + "%");
  $(".D-bar-line.H").css({ width: CH + "%" });

  var CI = 50; //jQuery
  $(".D-skill-value.I").text(CI + "%");
  $(".D-bar-line.I").css({ width: CI + "%" });

  //Softs Skill
  var SJ = 95; //Word
  $(".D-skill-value.J").text(SJ + "%");
  $(".D-bar-line.J").css({ width: SJ + "%" });

  var SK = 75; //Excel
  $(".D-skill-value.K").text(SK + "%");
  $(".D-bar-line.K").css({ width: SK + "%" });

  var SL = 80; //Photoshop
  $(".D-skill-value.L").text(SL + "%");
  $(".D-bar-line.L").css({ width: SL + "%" });

  var SM = 70; //Illustrator
  $(".D-skill-value.M").text(SM + "%");
  $(".D-bar-line.M").css({ width: SM + "%" });

  var SN = 68; //After Effect
  $(".D-skill-value.N").text(SN + "%");
  $(".D-bar-line.N").css({ width: SN + "%" });
});
$(document).ready(function () {
  $(".skill-sets").mouseenter(function () {
    $(".D-bar-line").css("transform", "scaleX(1)");
  });
  $(".qal-4").focusin(function () {
    $(".D-bar-line").css("transform", "scaleX(1)");
  });
  $(".qal-4").focusout(function () {
    $(".D-bar-line").css("transform", "scaleX(0)");
  });
});
