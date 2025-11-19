const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

const text = document.getElementById("circle-text").innerText;
const container = document.querySelector(".circular");
container.innerHTML = "";

[...text].forEach((char, i) => {
  const span = document.createElement("span");
  span.innerText = char;
  span.style.transform = `rotate(${i * 8}deg)`; // Кут між символами
  container.appendChild(span);
});
