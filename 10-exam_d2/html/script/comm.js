$(function () {
  // 현재 보이는 슬라이드의 인덱스
  let now = 0;

  //슬라이드개수
  const slideCount = $(".bnr-slide ul li").length;

  //슬라이드 부모
  const slildeList = $(".bnr-slide ul");

  //슬라이드 이동 함수
  //   function moveSlide() {
  //     slildeList.css("left", 100 * -now + "%");
  //   }

  // setInterval 함수를 사용하여 3초마다 슬라이드 이동
  setInterval(function () {
    // now 값을 1씩 증가시키고
    // slideCount(3)로 나눈 나머지값을 now에 대입
    // (0+1) % 3 = 1 (나머지)

    now = (now + 1) % slideCount;
    slildeList.css("left", 100 * -now + "%");
  }, 3000);

  // tab 구현
  $(".tab-tit").on("click", function (event) {
    event.preventDefault();
    $(".tab").removeClass("active");
    $(this).parents(".tab").addClass("active");
  });

  //모달창 구현
  $(".notice li:first-child").on("click", function () {
    $(".modal-bg").css("display", "flex");
  });

  $("#modalClose").on("click", function () {
    $(".modal-bg").hide();
  });
});
