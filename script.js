const textArea = document.querySelector("textarea");
const button = document.querySelector("button");
const div = document.querySelector(".displayNote");

button.addEventListener("click", createNote)

function createNote () {
    if(textArea.value === "") return;
    
    const newDiv = document.createElement('div');
    newDiv.classList.add("card");
    const header = document.createElement('h3');
    header.innerHTML = 'Note';
    const p = document.createElement('p');
    p.innerHTML = textArea.value;

    newDiv.appendChild(header);
    newDiv.appendChild(p);

    div.appendChild(newDiv);
    textArea.value = '';
}

