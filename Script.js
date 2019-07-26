<script>
function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "pic_off.gif"
  } else {
    pic = "pic.gif"
  }
  document.getElementById('img').src = pic;
}
</script>