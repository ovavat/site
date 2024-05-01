let currentIndex = 0;
const tweets = document.querySelectorAll('.tweet-carousel .tweet-item');
const totalTweets = tweets.length;

function showTweet(index) {
    tweets.forEach(tweet => {
        tweet.classList.remove('active');
    });
    tweets[index].classList.add('active');
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
