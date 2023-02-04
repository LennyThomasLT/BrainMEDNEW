const inputs = [
  "Fixation",
  "prosaccade",
  "antisaccade",
  "smoothpersuit",
  "vpctask",
];

currentIndex = 0;

var video = document.getElementById("video-source");
video.loop = false;
video.addEventListener("ended", function () {
  var btn = document.createElement("button");
  btn.innerHTML = "หน้าถัดไป";
  btn.setAttribute("class", "btn btn-info next-test-btn");
  btn.style.fontSize = "40px";
  btn.style.borderRadius = "45px";
  btn.style.fontFamily = "Anuphan";
  btn.addEventListener("click", function () {
    currentIndex++;
    const currentInput = inputs[currentIndex];
    const videoContent = document.getElementById("video-source");
    const audioContent = document.getElementById("audio-source");
    const sources = [
      { folderName: "Video", fileType: "mp4" },
      {
        folderName: "Audio",
        fileTyle: "mp3",
      },
    ].map(
      ({ folderName, fileType }) =>
        `../${folderName}/${currentInput}.${fileType}`
    );
    videoContent.setAttribute("src", sources[0]);
    audioContent.setAttribute("src", sources[0]);
    if (inputs.length === currentIndex - 1) {
      // add show button function
    }
  });
  var parentDiv = document.getElementsByClassName("video-background")[0];
  parentDiv.appendChild(btn);
});
