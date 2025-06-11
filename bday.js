const canvas = document.querySelector('.confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];

    for (let i = 0; i < 150; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 100 + 10,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        tilt: Math.random() * 10 - 10
      });
    }

    function drawConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach(c => {
        ctx.beginPath();
        ctx.lineWidth = c.r / 2;
        ctx.strokeStyle = c.color;
        ctx.moveTo(c.x + c.tilt + c.r / 4, c.y);
        ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 4);
        ctx.stroke();
      });
      updateConfetti();
    }

    function updateConfetti() {
      confetti.forEach(c => {
        c.y += Math.cos(c.d) + 1 + c.r / 2;
        c.x += Math.sin(c.d);

        if (c.y > canvas.height) {
          c.x = Math.random() * canvas.width;
          c.y = -10;
        }
      });
    }

    setInterval(drawConfetti, 20);