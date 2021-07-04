// function to toggle nav menu in mobile
function toggleNav() {
    const navbar = document.getElementById("navbar");

    if (navbar.className === "top-nav") {
        navbar.className += " responsive";
    } else {
        navbar.className = "top-nav";
    }
}

// Get the body
const body = document.getElementsByTagName("body");
// Get the modal
const modalForm = document.getElementById("modalForm");
// Get close button of the modal
const modalCloseButton = document.getElementsByClassName("close")[0];

// function to open modal
function openModal() {
    modalForm.style.display = "block";
    body[0].style.overflow = "hidden";
}

// function to close modal
function closeModal(event) {
    if(event){
        event.preventDefault();
    }
    
    modalForm.style.display = "none";
    body[0].style.overflow = "auto";
}

// When the user clicks close button, close the modal
modalCloseButton.onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalForm) {
        closeModal();
    }
}