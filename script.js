function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
  var sec = 6;
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      console.log(time);
      // your code here
      var elem = document.getElementById("seconds");
      elem.style.transform = "rotate(" + sec + "deg)";
      sec+=6;

  }, 1000);
  