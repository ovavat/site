document.getElementById('imageSelector').addEventListener('submit', function(event) {
    event.preventDefault();
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const imageUrl = getImageUrl(year, month);
    displayImage(imageUrl);
});

function getImageUrl(year, month) {
    return `https://raw.githubusercontent.com/ovavat/site/master/images/calendario/${year}.${month}.png` || 'https://cdn.discordapp.com/attachments/269956805721980928/1236508492408295515/caption.gif?ex=663843c5&is=6636f245&hm=7c5c0d040424a6109739bb07ebe5c570e8df0f8bcc08ac87eeb671bd5ea89d8e&';
}

function displayImage(imageUrl) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img class="calendario" src="${imageUrl}" alt="Imagem Selecionada">`;
}
