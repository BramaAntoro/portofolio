const text = "Muhammad Brama Antoro";
let charIndex = 0;
const typingElement = document.querySelector(".nama");

function type() {
    const currentText = text.slice(0, charIndex);
    typingElement.textContent = currentText;
    charIndex++;
    if (charIndex > text.length) {
        charIndex = 0;
    }
    setTimeout(type, 100);
}

type();