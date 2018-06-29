const jump = document.querySelector(".jump");
const markup = [...jump.innerText].map( letter => `
<span>${letter.toUpperCase()}</span>`).join("\n");
jump.innerHTML = markup;