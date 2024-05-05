var playlists = [
    { id: 'PL40AfEwi8Ke_F7l9OCQX3mypcpcyKKTQM', title: 'VP: O Vigilante | Season 1' },
    { id: 'PL40AfEwi8Ke8md_RltMLJODIaCR6u7Vaz', title: 'VP: O Vigilante | Especiais Season 1' },
    { id: 'PL40AfEwi8Ke--525cD4JC7qC0PyqsT-bH', title: 'VP: O Vigilante | Season 2' },
    { id: 'PL40AfEwi8Ke_c307qxLjrMPBHix0zVlam', title: 'VP: O Vigilante | Final Season' },
    { id: 'PL40AfEwi8Ke_36A6p1pom0Z_sKArWlemp', title: 'Supunhetamos | Season 1' },
    { id: 'PL40AfEwi8Ke-nESxq2cOWCTAWm55rkWpq', title: 'Farmacêutico: Origens' }
];
var currentSlide = 0;
var player;

// Função para carregar a playlist do YouTube
function loadYouTubePlaylist(index) {
    var playlistId = playlists[index].id;
    var playerOptions = {
        height: '720',
        width: '1280',
        playerVars: {
            listType: 'playlist',
            list: playlistId
        }
    };
    player = new YT.Player('youtube-playlist-' + (index + 1), playerOptions);

    // Esconder todos os títulos
    var titles = document.getElementsByClassName('playlist-title');
    for (var i = 0; i < titles.length; i++) {
        titles[i].style.display = 'none';
    }
    // Mostrar o título da playlist atual
    titles[index].style.display = 'block';
}

// Função para avançar para o próximo slide
function nextSlide() {
    if (currentSlide < playlists.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    player.destroy(); // Destruir o player atual antes de carregar o próximo
    loadYouTubePlaylist(currentSlide);
}

// Função para voltar para o slide anterior
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = playlists.length - 1;
    }
    player.destroy(); // Destruir o player atual antes de carregar o anterior
    loadYouTubePlaylist(currentSlide);
}

// Callback após o carregamento do script do YouTube
function onYouTubeIframeAPIReady() {
    document.getElementById('slide-1').getElementsByTagName('h2')[0].innerText = playlists[0].title;
    document.getElementById('slide-2').getElementsByTagName('h2')[0].innerText = playlists[1].title;
    document.getElementById('slide-3').getElementsByTagName('h2')[0].innerText = playlists[2].title;
    document.getElementById('slide-4').getElementsByTagName('h2')[0].innerText = playlists[3].title;
    document.getElementById('slide-5').getElementsByTagName('h2')[0].innerText = playlists[4].title;
    document.getElementById('slide-6').getElementsByTagName('h2')[0].innerText = playlists[5].title;

    loadYouTubePlaylist(currentSlide);
}