//contact us Modal
let button = document.getElementById('contact-us-button')
var dialogContactUs = document.querySelector('#contact-us-dialog')

button.addEventListener('click', function () {
    dialogContactUs.showModal()
})

// POP up

let popup = document.getElementById("popup");


function openPopup() {
    popup.classList.add("open-popup");
}


function closePopup() {
    popup.classList.remove("open-popup");
    console.log("close-popup")
}