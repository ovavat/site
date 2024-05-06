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
            return 'https://cdn.discordapp.com/attachments/269956805721980928/1236508492408295515/caption.gif?ex=663843c5&is=6636f245&hm=7c5c0d040424a6109739bb07ebe5c570e8df0f8bcc08ac87eeb671bd5ea89d8e&';
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

    if (imageUrl.includes('caption.gif')) {
        imageContainer.innerHTML = `<img src="${imageUrl}" alt="Fallback Image">`;
    } else {
        imageContainer.innerHTML = `<img class="calendario" src="${imageUrl}" alt="Imagem Selecionada">`;
    }
}