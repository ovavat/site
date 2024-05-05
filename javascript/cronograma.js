document.getElementById('imageSelector').addEventListener('submit', function(event) {
    event.preventDefault();
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const imageUrl = getImageUrl(year, month);
    displayImage(imageUrl);
});

function getImageUrl(year, month) {
    // Aqui você pode implementar a lógica para buscar a imagem correspondente ao ano e mês selecionados
    // Por exemplo, você pode ter um objeto com os URLs das imagens para cada data
    const imageUrls = {
        '2020-12': 'https://media.discordapp.net/attachments/783454190079967273/792926450638258176/2020.12.png?ex=6637890d&is=6636378d&hm=66f984ba157495ca5a679bf0b48435458fbcd10f3cb468902ca0a629682525f3&=&format=webp&quality=lossless&width=978&height=671',
        '2021-01': 'https://media.discordapp.net/attachments/783454190079967273/805179872628310086/2021.1.png?ex=663749f1&is=6635f871&hm=5a5ab765abfb29ccd885633a312eb014ea3b091df650cbf3ea6c957a0436e057&=&format=webp&quality=lossless&width=509&height=350',
        '2021-02': 'https://media.discordapp.net/attachments/783454190079967273/814323552077086750/2021.2.png?ex=66379828&is=663646a8&hm=3dbfcc900ad6703a2f9d27b7e9c3d3b34f570524609bd42ac807c3f0ec16fc85&=&format=webp&quality=lossless&width=978&height=671',
        '2021-03': 'https://media.discordapp.net/attachments/783454190079967273/825209636977770516/2021.3.png?ex=6637a59d&is=6636541d&hm=f68a7ce644251231a4bc25e5175a4fad7d361f0455bd7350bea2e96c14a3fa1f&=&format=webp&quality=lossless&width=978&height=671',
        '2021-04': 'https://media.discordapp.net/attachments/783454190079967273/836069784796921866/2021.4.png?ex=66379aea&is=6636496a&hm=ef09a33b427a35dc39f43f0f6ec74745508511786df41372f01a8aeffb3db75a&=&format=webp&quality=lossless&width=978&height=671',
        '2021-05': 'https://media.discordapp.net/attachments/783454190079967273/849003736093163560/2021.5.png?ex=66373298&is=6635e118&hm=3988f8e6fec99811bf90ecfb79d3569e8fa29c9f0b9c270d9026c17e8499d8f5&=&format=webp&quality=lossless&width=509&height=350',
        '2021-06': 'https://media.discordapp.net/attachments/783454190079967273/857075516057976832/2021.6.png?ex=66378f06&is=66363d86&hm=e63acfc96788d01dc2390147828af7af4ce2faacdeccd21e4592959c471c3274&=&format=webp&quality=lossless&width=978&height=671',
        '2021-07': 'https://media.discordapp.net/attachments/783454190079967273/871206277576015903/2021.7.png?ex=66378cd2&is=66363b52&hm=d87631491c1819308fa14e8a3989ef02e468fb076404673bdddba6dc4ed9d3ba&=&format=webp&quality=lossless&width=978&height=671',
        '2021-08': 'https://media.discordapp.net/attachments/783454190079967273/880508194521239582/2021.8.png?ex=6637c5a8&is=66367428&hm=eafd71edf1f6699110edaf2aa73e27e42c18f3a5795516ab596dfd4571565c27&=&format=webp&quality=lossless&width=509&height=350',
        '2021-09': 'https://media.discordapp.net/attachments/783454190079967273/893159726416810015/2021.9.png?ex=6637a7d0&is=66365650&hm=60aac549ef664ae631fb92eea58830edc671ee9d0ac7e22807d73f46543eb5d0&=&format=webp&quality=lossless&width=978&height=671',
        '2021-10': 'https://media.discordapp.net/attachments/783454190079967273/903775446464856074/2021.10.png?ex=66376239&is=663610b9&hm=a661f986f79d78855369573ed240ebe2c25a96b9d4e469c91d5a882a693b75a7&=&format=webp&quality=lossless&width=509&height=350',
        '2021-11': 'https://media.discordapp.net/attachments/783454190079967273/915415915342991420/2021.11.png?ex=66378b41&is=663639c1&hm=03d189239e43340177cb4d7310a0236a873d1727a09b7946f5999d75b95a831b&=&format=webp&quality=lossless&width=509&height=350',
        '2021-12': 'https://media.discordapp.net/attachments/783454190079967273/925178100613021756/2021.12.png?ex=66377680&is=66362500&hm=667963bd932a56ccd73d060742460a3393d0a82d35d78cabc02fc7efc636b324&=&format=webp&quality=lossless&width=509&height=350',
        '2022-01': 'https://media.discordapp.net/attachments/783454190079967273/937465734819373126/2022.1.png?ex=66375740&is=663605c0&hm=5b03fa5055f3cd59449c9d19bd497dbd040644f01621e7f1d70e3e7ac0899ec0&=&format=webp&quality=lossless&width=978&height=671',
        '2022-02': 'https://media.discordapp.net/attachments/783454190079967273/946486113403559937/2022.2.png?ex=663732a2&is=6635e122&hm=70c541badc77eeec0a3f2d74de14b3d57bde21fd73c59e5caac9f81c7b8adccd&=&format=webp&quality=lossless&width=978&height=671',
        '2022-03': 'https://media.discordapp.net/attachments/783454190079967273/958398731319910410/2022.3.png?ex=6637b05f&is=66365edf&hm=f0abd72bbd48022f3996a7757c67086fe3f8e2d211ce1bebb2a572f57b4b97e0&=&format=webp&quality=lossless&width=978&height=671',
        '2022-04': 'https://media.discordapp.net/attachments/783454190079967273/968545211871551488/2022.4.png?ex=6637b005&is=66365e85&hm=5d6d7b7070a736b11b6f5986265392b827a6141282378bde75869153462c2a72&=&format=webp&quality=lossless&width=978&height=671',
        '2022-05': 'https://media.discordapp.net/attachments/783454190079967273/977414083236225094/2022.5.png?ex=6637a70c&is=6636558c&hm=1315f10bf6c779a99a2e860496e27b64459942b391cfe7b10251ea712e08c4a2&=&format=webp&quality=lossless&width=978&height=671',
        '2022-06': 'https://media.discordapp.net/attachments/783454190079967273/992116767285592104/2022.6.png?ex=6637bf3d&is=66366dbd&hm=39170e8f0f5530bde406722ef6bb5f40e639dbe3783d299b793d06f7afe34e2d&=&format=webp&quality=lossless&width=509&height=350',
        '2022-07': 'https://media.discordapp.net/attachments/783454190079967273/1003420181143486537/2022.7.png?ex=6637571d&is=6636059d&hm=0e388f61398b3cb87feb29e6f26da0c0bc420ad604d341adbbd554ada1047edf&=&format=webp&quality=lossless&width=978&height=671',
        '2022-08': 'https://media.discordapp.net/attachments/783454190079967273/1013121223921766492/2022.8.png?ex=6637b22a&is=663660aa&hm=b1b1f0a80ec9c035a7ebeb7fe68b4ed0d1df67d9455780f6018c20074681d615&=&format=webp&quality=lossless&width=978&height=671',
        '2022-09': 'https://media.discordapp.net/attachments/783454190079967273/1027794815959715840/2022.9_extendida.png?ex=6637af43&is=66365dc3&hm=da97b7f668ede0cfb93a413ed4186ccb64255771b223198df19cd82df3e2dd0a&=&format=webp&quality=lossless&width=438&height=350',
        '2022-10': 'https://media.discordapp.net/attachments/783454190079967273/1036076236205740134/2022.10.png?ex=66377d70&is=66362bf0&hm=343928b924d9e3ef32c0aed057b637e63f1224262a798b4d16ed5d0a77289ad2&=&format=webp&quality=lossless&width=509&height=350',
        '2022-11': 'https://media.discordapp.net/attachments/783454190079967273/1045706565455450153/2022.11.png?ex=663796a1&is=66364521&hm=dba9c02ba009bc3289b33f29e741bc667ce988d19320a9be6dbbc64f7f538a02&=&format=webp&quality=lossless&width=978&height=671',
        '2022-12': 'https://media.discordapp.net/attachments/783454190079967273/1058101409607843922/2022.12.png?ex=6637327a&is=6635e0fa&hm=ae9e09a74642b7f467e33a21b3264f740343b309fa3b16a7fbc7589cdaded1b2&=&format=webp&quality=lossless&width=978&height=671',
        '2023-01': 'https://media.discordapp.net/attachments/783454190079967273/1067928559345209455/2023.1.png?ex=66375a39&is=663608b9&hm=e65ab470dc08a12f8efb721ef5f1ef00f66de815bdb17a2078c9e40abf09dd72&=&format=webp&quality=lossless&width=509&height=350',
        '2023-02': 'https://media.discordapp.net/attachments/783454190079967273/1080299737787404368/2023.2.png?ex=663788c8&is=66363748&hm=c4296d9432354deb58a09e8e59fe1ee5b31375b539a79a9009d44ed8128502ff&=&format=webp&quality=lossless&width=978&height=671',
        '2023-03': 'https://media.discordapp.net/attachments/783454190079967273/1090463377987477575/2023.3.png?ex=66379869&is=663646e9&hm=bd96b2159b83a8512466429834dd58044e36fd0ceb416fb65c2ce3bbd046dc6b&=&format=webp&quality=lossless&width=978&height=671',
        '2023-04': 'https://media.discordapp.net/attachments/783454190079967273/1102291053761015938/2023.4.png?ex=6637c70a&is=6636758a&hm=ee68da3321047f5943a0f14dc20f63a41b38af3e75e35139afb1e5a15e5acaa1&=&format=webp&quality=lossless&width=978&height=671',
        '2023-05': 'https://media.discordapp.net/attachments/783454190079967273/1113601160293662831/2023.5.png?ex=66376526&is=663613a6&hm=903a3badc7cee154ced12c81c47525db5ff9c8db60b3ad046d980aaa60bcf039&=&format=webp&quality=lossless&width=978&height=671',
        '2023-06': 'https://media.discordapp.net/attachments/783454190079967273/1124061179095027892/2023.6.png?ex=6637374d&is=6635e5cd&hm=ac904f0f9e4915ed91144e1ebeb5bc3d1136c5ab31e254e1f873d1a060d6f3f7&=&format=webp&quality=lossless&width=509&height=350',
        '2023-07': 'https://media.discordapp.net/attachments/783454190079967273/1132027998917365920/2023.7.png?ex=663731fb&is=6635e07b&hm=49e0c975a6097b92c12574349565b72101f7b835bbccd3bf18aa2247da695cb8&=&format=webp&quality=lossless&width=438&height=350',
        '2023-08': 'https://media.discordapp.net/attachments/783454190079967273/1146160784318140577/2023.8.png?ex=663731a9&is=6635e029&hm=39f1b4cdf888e63c411d5f0be03563cb7a598d4413f93e65a164bc671e8e8f7f&=&format=webp&quality=lossless&width=978&height=671',
        '2023-09': 'https://media.discordapp.net/attachments/783454190079967273/1157850834659442839/2023.9.png?ex=663788de&is=6636375e&hm=b4cad898a27c5c0f4a64741bdd8e00400bc5d4646cef9209daa9da698406e54f&=&format=webp&quality=lossless&width=509&height=350',
        '2023-10': 'https://media.discordapp.net/attachments/783454190079967273/1167560115356975174/2023.gif?ex=663742d7&is=6635f157&hm=ffaa985edeba301d68c3c3bc0e5b5d9a3ff61cf496512a21dc4faafdc7175dfb&=&width=978&height=671',
        '2023-11': 'https://media.discordapp.net/attachments/783454190079967273/1179135186630365305/2023.gif?ex=66372ef7&is=6635dd77&hm=35a49b7e88c3d7e80c9fe12f43c2e5f3d23384531382d96cdac879b09be9fdd7&=&width=978&height=671',
        '2023-12': 'https://media.discordapp.net/attachments/783454190079967273/1186351932546232450/2023.gif?ex=6637bad6&is=66366956&hm=ce4a7b1fc0a727b9cdc9aae1b317f19f6d97a35fddca35f3a2e8cb964c45ee42&=&width=841&height=671',
        '2024-01': 'https://media.discordapp.net/attachments/783454190079967273/1201925143132373002/2024.gif?ex=6637b204&is=66366084&hm=38f313ab4b066e1626591dc70a942f499af617aea8df97ed37aa4d733c0213a6&=&width=978&height=671',
        '2024-02': 'https://media.discordapp.net/attachments/783454190079967273/1209597847176220743/2024.gif?ex=66374388&is=6635f208&hm=2ea9f223cc33a3bb715d66b906615930e4cdd66d3a9d7ebb5a435b7bfc2f7a4d&=&width=978&height=671',
        '2024-03': 'https://media.discordapp.net/attachments/783454190079967273/1224501289195667476/2024.gif?ex=66376df1&is=66361c71&hm=f809aa27398cbe8d33556cd5f04f4b56f01f823f9b9e1b1e10ca3836063e8cc2&=&width=841&height=671',
        '2024-04': 'https://media.discordapp.net/attachments/783454190079967273/1234340618319433863/2024.gif?ex=6637a108&is=66364f88&hm=8fb48efe7321ec7e275057a61354af2287d35537c92e0d1fed12d518fe923c4b&=&width=978&height=671',
        '2024-05': 'https://media.discordapp.net/attachments/783454190079967273/1236343993369886762/2024.gif?ex=6637aa92&is=66365912&hm=fd5e0d8b75d3bf44cbc4906e957c74de24b98e7366df01ca24ced067f5ea7e73&=&width=978&height=671'
    }

    const key = `${year}-${month}`;
    return imageUrls[key] || 'https://media1.tenor.com/m/DX862Ukr_5oAAAAC/alvin-and-the-chipmunks-alvin.gif'; // Caso a data não tenha uma imagem específica, retorna uma imagem padrão
}

function displayImage(imageUrl) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Imagem Selecionada">`;
}
