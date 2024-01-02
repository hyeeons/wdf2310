// 슬라이드

// html 페이지를 로드한 후 실행
// $(document).ready(function () {});
$(function () {
  $("#gnb .depth1 > li").on("mouseenter", function () {
    $(this).find(".depth2").stop().slideDown(300);
    // key값이 2개 이상일 때는 {}로 묶어서 처리
    // {key:1 value1, key2:value2}
    // $(this).childeren("a").css({ "background-color": "#333", color: "#fff" });

    // key 값이 1개 일때는 {} 생략 가능
    // key, value
    $(this).children("a").css("bacground-color", "#333");

    // key값이 2개 이상일 때는 {}로 묶어서 처리
    // {key:1 value1, key2:value2}
  });

  // 변수선언! 반복되는 애들을 변수로 빼 준다.
  //  const $gnb = $('#gnb');
  // const $gnbDepth1 = $gnb.find('.depth1 > li');

  $("#gnb .depth1 > li").on("mouseleave", function () {
    $(this).find(".depth2").slideUp(500);
    $(this).children("a").css({ backgroundColor: "#fff", color: "#fff" });
  });

  // 모달창 열기
  //   .list-bbs li:first-child를 클릭했을 때
  //   on : 바닐라자바스크립트에서의 addEvent

  const $modal = $(".dimmed");

  $(".list-bbs li:first-child").on("click", function () {
    $modal.show();
  });

  //     $(".dimmed .btn-close")
  $modal.find(".btn-close").on("click", function () {
    $modal.hide();
  });

  //   $(".sec-bbs .sec-tit").on("click", function () {
  //     $(".tab-cont .list-bbs").show();
  //   });

  // tabs
  // 기본세팅
  //   #tabs .sec-g에 있는 .active를 찾아서 삭제해라!

  // 변수선언
  const $tabs = $("#tabs");

  $tabs.find(".sec-g").removeClass("active");

  //   다시 active 추가!
  $("#tabs .sec-g:first-child").addClass("active");

  //   sec-tit 클릭했을 때
  $("#tabs .sec-tit").on("click", function () {
    // 기존 active 삭제해야
    $("#tabs .sec-g").removeClass("active");
    //this(방금 선택한 그 아이)의 부모에게 .active 추가
    $(this).parent().addClass("active");
  });

  // slide

  //   변수선언
  // let now = 0;
  // 3초마다 슬라이드가 이동

  //   now가 1씩 증가하는 연산
  //   now 재할당
  //   => now(변수) = now + 1;
  //   재할당은 let을 사용하지 않음

  //   now(1)	= now(0)+1;
  //   now = (now + 1) % 3;
  //   now(2)	= now(1)+1;

  //   now(0)	= now(2)+1;
  //  -> 3으로 가면 안되고 0으로 돌아와야 함 => 나머지 연산자를 사용
  //   => 1+1은 2, 2를 3으로 나누면 나머지가 있으니 본래값 2로 할당
  //   => 2+1은 3, 3을 3으로 나누면 나머지가 0 -> 0으로 할당!
  //   => 여기서 3을 사용하는 이유는 슬라이드 개수가 3이라서 3개 후 돌아와야 하니까

  // .slide .list-slide의 left값이 이동
  //   setInterval(함수, 시간);
  //   left값이 0, -100%, -200%, 0 반복
  // now값에 0, 1, 2, 0이 들어가야 함
  let now = 0;
  const $slide = $(".list-slide");
  const slideCount = $(".list-slide li").length;

  setInterval(function () {
    now = (now + 1) % slideCount;
    updateSlidePosition();
  }, 3000);

  function updateSlidePosition() {
    $slide.css({ left: 100 * now * -1 + "%" });
  }
});
