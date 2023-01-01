
let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')) {
        hideText_btn.innerHTML = "Read Less";
    }
    else {
        hideText_btn.innerHTML = "Read More";
    }
}