function toggle() {
    let button = document.querySelector(".button");
    let text = document.querySelector("#extra");

    if(text.style.display === "none" && button.textContent === 'More'){
        text.style.display = "block"
        button.textContent = "Less"
    }
    else{
        text.style.display = "none"
        button.textContent = "More"
    }
}