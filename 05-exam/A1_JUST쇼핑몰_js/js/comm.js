// 슬라이드

// html 페이지를 로드한 후 실행
// $(document).ready(function () {});
$(function () {
  $("#gnb .depth1 > li").on("mouseenter", function () {
    $(this).find(".depth2").stop().slideDown(300);
  });
  // 모달창 열기
  //   .list-bbs li:first-child를 클릭했을 때
  //   on : 바닐라자바스크립트에서의 addEvent
  $(".list-bbs li:first-child").on("click", function () {
    $(".dimmed").show();
  });

  $(".btn-close, .dimmed").on("click", function () {
    $(".dimmed").hide();
  });

  //   $(".sec-bbs .sec-tit").on("click", function () {
  //     $(".tab-cont .list-bbs").show();
  //   });

  // tabs
  // 기본세팅
  //   #tabs .sec-g에 있는 .active를 찾아서 삭제해라!
  $("#tabs .sec-g").removeClass("active");

  //   다시 active 추가!
  $("#tabs .sec-g:first-child").addClass("active");

  //   sec-tit 클릭했을 때
  $("#tabs .sec-tit").on("click", function () {
    // 기존 active 삭제해야
    $("#tabs .sec-g").removeClass("active");
    //this(방금 선택한 그 아이)의 부모에게 .active 추가
    $(this).parent().addClass("active");
  });
});
