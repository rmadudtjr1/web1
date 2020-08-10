$(document).ready(function () {
  /* 메뉴버튼 클릭 이벤트 */
  $(".btn").click(function () {
    var attr = $(this).attr("data-li");

    $(".btn").removeClass("active");
    $(this).addClass("active");

    $(".item").hide();

    if (attr == "bag") {
      $("." + attr).show();
    } else if (attr == "shoes") {
      $("." + attr).show();
    } else if (attr == "jewelry") {
      $("." + attr).show();
    } else if (attr == "all") {
      $(".item").show();
    }
  });
  
  $(function () {
    /* 제품창까지 가는 버튼 이벤트 */
    $(".btnlocation").click(function () {
      $("html, body").animate(
        {
          scrollTop: 2080,
        },
        2000
      );
    });
    /* 메인로고 효과 */
    setTimeout(function () {
      $(".fly-in-text").removeClass("hidden");
    }, 500);
  });
});
