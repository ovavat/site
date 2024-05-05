let currentIndex = 0;
const virais = document.querySelectorAll('.tweet-carousel .tweet-item');
const totalTweets = virais.length;

function showTweet(index) {
    virais.forEach(tweet => {
        tweet.classList.remove('active');
    });
    virais[index].classList.add('active');
}

function nextTweet() {
    currentIndex = (currentIndex + 1) % totalTweets;
    showTweet(currentIndex);
}

function prevTweet() {
    currentIndex = (currentIndex - 1 + totalTweets) % totalTweets;
    showTweet(currentIndex);
}

// Exibe o primeiro tweet ao carregar a página
showTweet(currentIndex);
