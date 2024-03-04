$(function () {
  // 슬라이드
  let now = 0;

  let slideCount = $(".slide ul li").length;

  setInterval(function () {
    now = (now + 1) % slideCount;
    $(".slide ul").css("left", 100 * -now + "%");
  }, 3000);

  //  모달창
  let bbsHd = $(".list-bbs .hd1");
  bbsHd.on("click", function () {
    $(".modal-wrap").css("display", "block");
  });

  $(".md-button").on("click", function () {
    $(".modal-wrap").css("display", "none");
  });
});
