window.onload = () => {
    let imgs = [
        "../assets/imgs/main.webp",
        "../assets/imgs/canelaTea.webp",
        "../assets/imgs/mesaDeTe.webp",
        "../assets/imgs/redTea.webp",
        "../assets/imgs/teNaranja.webp"
    ]
    let index = 0
    let frontImage = document.querySelectorAll("#frontImage img")[0]
    let int = setInterval(() => {
        frontImage.style.opacity = 0;
        setTimeout(() => {
            frontImage.src = imgs[index];
            frontImage.style.opacity = 1;
            index += 1;
            if (index >= 5) index = 0;
        }, 500);
    }, 5000);
}