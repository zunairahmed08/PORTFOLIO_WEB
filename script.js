
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".hero-text h1");
  if (text) {
    const fullText = text.innerHTML;
    text.innerHTML = "";
    let i = 0;
    function typeWriter() {
      if (i < fullText.length) {
        text.innerHTML += fullText.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
      }
    }
    typeWriter();
  }
});

// SCROLL + PAGE LOAD ANIMATION
function animateElements() {
  const elements = document.querySelectorAll(".fade-in, .slide-up, .pop");
  const height = window.innerHeight;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < height - 100) el.classList.add("active-animation");
  });
}

window.addEventListener("scroll", animateElements);
window.addEventListener("DOMContentLoaded", animateElements);
window.addEventListener("load", animateElements);

// CONTACT FORM
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks! Your message has been received.");
    form.reset();
  });
}