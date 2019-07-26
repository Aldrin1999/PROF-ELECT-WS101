<script>
function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "img/pic_off.gif"
  } else {
    pic = "img/pic.gif"
  }
  document.getElementById('img').src = pic;
}
</script>