let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://www.smashbros.com/assets_v2/img/fighter/daisy/ss_5.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/chrom/ss_4.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/dark_samus/ss_1.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/ken/ss_6.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/inkling/ss_5.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/ridley/ss_1.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/simon/ss_2.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/richter/ss_2.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/ss_1.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/shizue/ss_2.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/gaogaen/ss_6.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/packun_flower/ss_4.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/joker/ss_3.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/dq_hero/ss_5.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/banjo_and_kazooie/ss_1.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/terry/ss_1.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/byleth/ss_1.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/minmin/ss_1.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/steve/ss_1.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/sephiroth/ss_1.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/homura/ss_1.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/kazuya/ss_1.jpg",
"https://www.smashbros.com/assets_v2/img/fighter/sora/ss_3.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src',url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src',url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 1000);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}