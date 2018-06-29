const jump = document.querySelector(".jump");
const markup = [...jump.innerText].map( letter => `
<span>${letter}</span>`).join("\n");
jump.innerHTML = markup;