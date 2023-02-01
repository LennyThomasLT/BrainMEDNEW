$(".Calibration").mousedown(function () {
  var id = $(this).attr("id");

  if (!CalibrationPoints[id]) {
    CalibrationPoints[id] = 0;
  }

  CalibrationPoints[id]++;

  var timeoutId = setTimeout(function () {
    if (CalibrationPoints[id] >= 5000) {
      $(this).css("background-color", "Green");
      $(this).prop("disabled", true);
      PointCalibrate++;
    }
  }, 5000);
});

$(".Calibration").mouseup(function () {
  clearTimeout(timeoutId);
});
