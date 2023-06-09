<!DOCTYPE html>
<html>
<head>
  <title>Current Date & Time</title>
  <script>
    function displayDateTime() {
      var dateTime = new Date();
      document.getElementById("datetime").innerHTML = dateTime;
    }
  </script>
</head>
<body>
  <h2>Current Date & Time</h2>
  <button type="button" onclick="displayDateTime()">Show Date & Time</button>
  <p id="datetime"></p>
</body>
</html>
