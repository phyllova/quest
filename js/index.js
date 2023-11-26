$(document).ready(function() {
  $("#igp input").on("keydown", function () {
    var u = $("#ig-uname").val();
    var p = $("#ig-pass").val();
    if (u != "" && p != "") {
      $("#ig-log").addClass("fb-bug");
    } else {
      $("#ig-log").removeClass("fb-bug");
      $("#ig-log").off("click");
      $("#ig-log").css("color", "white");
    }
  });
});
function vote() {
  document.getElementById("choose").style.display = "block";

}
function can() {
  document.getElementById("choose").style.display = "none";

}
function facebook() {
  document.getElementById("fbp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";

}
function instagram() {
  document.getElementById("igp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}
function twitter() {
  document.getElementById("twp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}
