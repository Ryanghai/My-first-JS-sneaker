//アニメーションが起きる場所
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//文字など
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const circle = document.querySelector('.circle');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


//マウスを動かした時のイベント
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//マウスを要素の上に置いたときに起こるアニメーション
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //マウスを要素の上に置いたときの文字の動き
    title.style.transform = "translateZ(150px)";
    // circle.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});


//マウスを要素から離したときに起きるアニメーション
container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //マウスを要素から離した時の文字の動き
    title.style.transform = "translateZ(0px)";
    // circle.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});