let currentIndex = 0;
const virais = document.querySelectorAll('.countdown-container .viral-item');
const totalVirais = virais.length;

function showViral(index) {
    virais.forEach(viral => {
        viral.classList.remove('active');
    });
    virais[index].classList.add('active');
}

function nextViral() {
    currentIndex = (currentIndex + 1) % totalVirais;
    showViral(currentIndex);
}

function prevViral() {
    currentIndex = (currentIndex - 1 + totalVirais) % totalVirais;
    showViral(currentIndex);
}

// Exibe o primeiro tweet ao carregar a página
showViral(currentIndex);
