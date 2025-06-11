function handleClick() {
      localStorage.setItem("showWish", "true");
      location.reload();
    }

    window.onload = function () {
      if (localStorage.getItem("showWish") === "true") {
        document.getElementById("wishMessage").style.display = "block";
        const audio = document.getElementById("bdayAudio");
        audio.play();
        localStorage.removeItem("showWish");
      }
    };
       
