const music = new Audio('audio/1.mp3');
// music.play();
const song =  {
    play: () => {
        document.querySelector('body .audio').play();
    },
    pause: () => {
        document.querySelector('body .audio').pause();
    }
};
const songs = [
    {
        id:1,
        songName:`Naiyo Lagda<br>
        <div class="subtitle">Kisi ka Bhai kisi ki jaan</div>`,
        poster:"img/naiyoo.jpg"
    },
    {
        id:2,
        songName:`Ram Siya Ram<br>
        <div class="subtitle">Adipurush</div>`,
        poster:"img/siya.jpg"
    },
    {
        id:3,
        songName:`Zihaal e Miskin<br>
        <div class="subtitle">Zihaal e Miskin</div>`,
        poster:"img/zahal.jpg"
    },
    {
        id:4,
        songName:`Tum Hi Ho<br>
        <div class="subtitle">Ashiqui-2</div>`,
        poster:"img/tum.jpg"
    },
    {
        id:5,
        songName:`Filhal<br>
        <div class="subtitle">B-Praak</div>`,
        poster:"img/filhal.jpg"
    },
    {
        id:6,
        songName:`Man Bharryaa<br>
        <div class="subtitle">Shershaah</div>`,
        poster:"img/man.jpg"
    },
    {
        id:7,
        songName:`Koi Aaye Nah Rabba<br>
        <div class="subtitle">Daaka</div>`,
        poster:"img/koi.jpg"
    },
    {
        id:8,
        songName:`Calm Down<br>
        <div class="subtitle">Rema</div>`,
        poster:"img/calm.jpg"
    },
    {
        id:9,
        songName:`Adipurush <br>
        <div class="subtitle">Ram Siya Ram</div>`,
        poster:"img/ram.jpg"
    },
    {
        id:10,
        songName:`Agar Tum Sath Ho<br>
        <div class="subtitle">Tamasha</div>`,
        poster:"img/tamasha.jpg"
    },
    {
        id:11,
        songName:`Kabil<br>
        <div class="subtitle">Kabil</div>`,
        poster:"img/kabil.jpg"
    },
    {
        id:12,
        songName:`Calm Down<br>
        <div class="subtitle">Rema</div>`,
        poster:"img/calm.jpg"
    },
    {
        id:13,
        songName:`Humraah<br>
        <div class="subtitle">Malang</div>`,
        poster:"img/humrah.jpg"
    },
    {
        id:14,
        songName:`A dil Hai Mushkil<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/adil.jpg"
    },
    {
        id:15,
        songName:`Ram Chahe Lila Chahe Lila Chahe Ram<br>
        <div class="subtitle">Ramlila</div>`,
        poster:"img/ramlila.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName

});

let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');

masterplay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1')
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause');
    }else{
        music.pause();
        wave.classList.remove('active1')
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-pause');
    }
});

let index = 0;
let posterplay = document.getElementById('posterplay');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
     index = el.target.id;
        // console.log(abc)
        music.src = `audio/${index}.mp3`;
        posterplay.src = `img/${index}.jpg`;
        music.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause');
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        })
    })
})







let trendsongleft = document.getElementById('trendsongleft');
let trendsongright = document.getElementById('trendsongright');
let trendsong = document.getElementsByClassName('trendsong')[0];

trendsongright.addEventListener('click',()=>{
    trendsong.scrollLeft += 500;
});
trendsongleft.addEventListener('click',()=>{
    trendsong.scrollLeft -= 500;

});
let pop_artleft = document.getElementById('pop_artleft');
let pop_artright = document.getElementById('pop_artright');
let Artist= document.getElementsByClassName('Artist')[0];

pop_artright.addEventListener('click',()=>{
    Artist.scrollLeft += 500;
});
pop_artleft.addEventListener('click',()=>{
    Artist.scrollLeft -= 500;

});