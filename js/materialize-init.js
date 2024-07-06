$(document).ready(function() {
    $('.slider').slider();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.modal').modal({
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
    });
    $('.collapsible').collapsible();
});

// Custom modal to fix .materialboxed problems
var modal = document.getElementsByClassName('mamacarlota-modal')[0];
var modalImg = document.getElementsByClassName('mamacarlota-modal-content')[0];
var captionText = document.getElementsByClassName('mamacarlota-modal-caption')[0];

function openModal(img) {
    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    modal.style.display = 'none';
}