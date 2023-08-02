const button = document.querySelector('button');

button.addEventListener('click', function() {
    button.innerHTML = "Oops Wrong Button!"
    button.style.backgroundColor = "red"
})
