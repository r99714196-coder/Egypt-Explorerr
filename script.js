function goSite() {
    window.location.href = "main.html";
}

function openPage(page) {
    window.location.href = page + ".html";
}

function searchCards() {

    const input = document.querySelector(".search").value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

}

let images = [];
let currentIndex = 0;

function setImages(imageArray) {

    images = imageArray;
    currentIndex = 0;

    if (document.getElementById("mainImg")) {
        document.getElementById("mainImg").src = images[currentIndex];
    }

}

function nextImg() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("mainImg").src = images[currentIndex];

}

function prevImg() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    document.getElementById("mainImg").src = images[currentIndex];

}

function goMain(){
  window.location.href = "main.html";
}