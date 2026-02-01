const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

let scale = 1;

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 60 - 30;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  scale += 0.15;
  yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:#f6c1cc;
      font-family:Arial;
      text-align:center;">
      <h1>hehe I knew it 💖</h1>
    </div>
  `;
});

