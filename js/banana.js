function banana() {
    return(
        <div class="video-background">
      <video src="D:\Competitive\NSC\Eye-MED\Video\final assesment mung.mp4" id="bg-video"></video>
    </div>
    <script>
      var video = document.getElementById("bg-video");
      video.loop = false;
      video.addEventListener("ended", function(){
          //add any functionality you need here
      });
    </script>
    )
}