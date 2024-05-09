document.getElementById('imageSelector').addEventListener('submit', async function(event) {
    event.preventDefault();
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    try {
        const imageUrl = await getImageUrl(year, month);
        displayImage(imageUrl);
    } catch (error) {
        console.error(error);
        // Aqui você pode tratar o erro, como exibir uma mensagem para o usuário
    }
});

async function getImageUrl(year, month) {
    const imageUrlPNG = `https://raw.githubusercontent.com/ovavat/site/master/images/calendario/${year}.${month}.png`;
    const imageUrlGIF = `https://raw.githubusercontent.com/ovavat/site/master/images/calendario/${year}.${month}.gif`;

    try {
        await checkImageUrl(imageUrlPNG);
        return imageUrlPNG;
    } catch {
        try {
            await checkImageUrl(imageUrlGIF);
            return imageUrlGIF;
        } catch {
            // Fallback image if neither PNG nor GIF exists
            return 'https://raw.githubusercontent.com/ovavat/site/89f206c5b836b2bb4bb7e94fc2c59f7ff1cfe262/images/calendario/alvinesquilo.gif';
        }
    }
}

function checkImageUrl(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve();
                } else {
                    reject();
                }
            }
        };
        xhr.open('HEAD', url);
        xhr.send();
    });
}

function displayImage(imageUrl) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    if (imageUrl.includes('alvinesquilo.gif')) {
        imageContainer.innerHTML = `<img src="${imageUrl}" alt="Fallback Image">`;
    } else {
        imageContainer.innerHTML = `<img class="calendario" src="${imageUrl}" alt="Imagem Selecionada">`;
    }
}