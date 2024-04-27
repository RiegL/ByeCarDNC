const motorcycle = [
  {
    img: "./assets/img-card-1.png",
    title: "Scooter Elétrica Voltz EV1",
    paragraph:
      "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
    
  },
  {
    img: "./assets/img-card-2.png",
    title: "Honda CB 500X",
    paragraph:
      "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
  },
];

// onclick="show(-1)"

let carrousel = document.querySelectorAll(".carousel-cards li");

let modal = document.querySelector("#modal");

let index = 0;

function show(increase) {
  index = index + increase;
  index = Math.min(Math.max(index, 0), carrousel.length - 1);
  carrousel[index].scrollIntoView({ behavior: "smooth" });
}

setInterval(() => {
  if (index === carrousel.length - 1) {
    show(index - 2);
  } else {
    show(index + 1);
  }
}, 4000);

function modalShow() {
  modal.innerHTML = "";
  modal.innerHTML = `
    <div class="modal-card">
        <button onClick ="closeModal()">
        <img src="./assets/close-btn.png" alt="close-button" />
        </button>
        <span>
        ${motorcycle[index].title}
        </span>
        <p>
        ${motorcycle[index].paragraph}
        </p>
        <img src="${motorcycle[index].img}" alt="" />
        
        <button onClick="closeModal()"<>Quero Assinar!</button>
    </div>
    `;

  modal.style.visibility = "visible";
}

function closeModal() {
  modal.style.visibility = "hidden";
}
