var items = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
    var colours = Array();
    for (let i = 0; i < items.length / 2; i++) {
      let val1 = Math.floor(Math.random() * 256);
      let val2 = Math.floor(Math.random() * 256);
      let val3 = Math.floor(Math.random() * 256);
      colours.push("rgb(" + val1 + "," + val2 + "," + val3 + ")");
    }
    // console.log(colours);
    colours = colours.concat(colours);
    // colours = colours.sort(() => Math.random() - 0.5);
    var tempId = [];
    var time = 30;

    var countDownTrigger = 0;
    var checkFinish = 0;

    // Gọi hàm nút bấm Start

    function start() {
      for (let i = 0; i < items.length; i++) {
        document.getElementById("item-" + (i + 1)).style.opacity = 1;
        document.getElementById("start").style.display = "none";
        convertTime(time);
      }
    }
    // Gọi hàm hiển thị thời gian

    function convertTime(time) {
      let minute = parseInt(time / 60);
      let second = time % 60;
      if (minute < 10) {
        minute = "0" + minute;
      }
      if (second < 10) {
        second = "0" + second;
      }
      document.getElementById("time").innerHTML = minute + ":" + second;
    }
    //    Gọi hàm đếm lùi thời gian

    function countDownFunction(time) {
      var coundown = setInterval(() => {
        time = time - 1;
        convertTime(time);
        if (time == 0) {
          clearInterval(coundown);
          for (let i = 0; i < items.length; i++) {
            document.getElementById("item-" + (i + 1)).onclick = function () {
              return false;
            };
          }
          setTimeout(function () {
            alert("You lose");
          });
        }
        if (checkFinish == items.length) {
          clearInterval(coundown);
          document.getElementById("time").style.display = "none";
          for (let i = 0; i < items.length; i++) {
            document.getElementById("item-" + (i + 1)).style.display = "none";
          }
          var changeBackground = setInterval(() => {
            let val1 = Math.floor(Math.random() * 256);
            let val2 = Math.floor(Math.random() * 256);
            let val3 = Math.floor(Math.random() * 256);
            document.body.style.backgroundColor =
              "rgb(" + val1 + "," + val2 + "," + val3 + ")";
          }, 1500);
        }
      }, 1000);
    }

    for (let i = 0; i < items.length; i++) {
      var tag = document.createElement("div");
      tag.id = "item-" + (i + 1);
      tag.onclick = function clickBtn() {
        countDownTrigger = countDownTrigger + 1;
        if (countDownTrigger == 1) {
          countDownFunction(time);
        }
        if (tempId.length < 1) {
          document.getElementById("item-" + (i + 1)).style.backgroundColor =
            colours[i];
          tempId.push("item-" + (i + 1));
        } else if (tempId.length < 2) {
          document.getElementById("item-" + (i + 1)).style.backgroundColor =
            colours[i];
          tempId.push("item-" + (i + 1));
          // Khi 2 id giống nhau
          if (tempId[0] == tempId[1]) {
            tempId.length = 0;
            document.getElementById("item-" + (i + 1)).style.backgroundColor =
              "#ff99ff";
          } else {
            // Khi 2 id khác nhau và 2 màu giống nhau
            if (
              document.getElementById(tempId[0]).style.backgroundColor ==
              document.getElementById(tempId[1]).style.backgroundColor
            ) {
              checkFinish = checkFinish + 2;
              setTimeout(function () {
                for (let i = 0; i < 2; i++) {
                  let elem = document.getElementById(tempId[i]);
                  elem.style.backgroundColor = "white";
                  elem.onclick = function () {
                    return false;
                  };
                }
                tempId.length = 0;
                if (checkFinish == items.length) {
                  setTimeout(function () {
                    alert("Congratulations");
                  }, 1000);
                }
              }, 500);
            } else {
              setTimeout(function () {
                for (let i = 0; i < 2; i++) {
                  document.getElementById(tempId[i]).style.backgroundColor =
                    "#ff99ff";
                }
                tempId.length = 0;
              }, 500);
            }
          }
        }
      };
      var element = document.getElementById("container");
      element.appendChild(tag);
    }
    for (let i = 0; i < items.length; i++) {
      document.getElementById("item-" + (i + 1)).style.opacity = 0;
    }