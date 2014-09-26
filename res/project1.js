// Creating an empty Div

function createDiv() {
    document.body.insertAdjacentHTML("beforeend", '<div class="test" style="background-color: #'+Math.floor(Math.random()*16777215).toString(16)+'"></div>');
}