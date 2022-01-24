const menubtn = document.querySelector(".menu-btn");
const rightnav = document.querySelector(".right-nav-pages");
const main = document.querySelector(".main");
const allplantscontainer = document.querySelector(".all-plants-container");

menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("open");
  document.querySelector(".line1").classList.toggle("open");
  document.querySelector(".line2").classList.toggle("open");
  document.querySelector(".line3").classList.toggle("open");
  rightnav.classList.toggle("open");
});

const filtersbtn = document.querySelector(".filters-btn");
filtersbtn.addEventListener("click", () => {
  main.classList.toggle("filter-open");
});

// plantHtml

/* <div class="plant">
<div class="plant-like-icon">
  <img src="./img/heart-likes.png" alt="" />
</div>
<div class="plant-img"></div>
<div class="plant-top">
  <div class="plant-name">Avokado tree</div>
  <div class="plant-info-btn"></div>
</div>
<div class="plant-stars">
  <div class="star fullstar"></div>
  <div class="star fullstar"></div>
  <div class="star fullstar"></div>
  <div class="star emptystar"></div>
  <div class="star emptystar"></div>
  (85)
</div>
<div class="plant-bottom">
  <div class="plant-price">$10</div>
  <div class="plant-add-to-cart">add to cart</div>
</div>
</div> */

const plantHtml = (plantName, plantImg, plantPrice, plantStars, plantLikes, id, liked) => {
  return `<div class="plant" id=${id}>
<div class="plant-like-icon">
  <img src="./img/heart-likes.png" alt="" />
</div>
<div class="plant-img" style="background-image:url(${plantImg})"></div>
<div class="plant-top">
  <div class="plant-name">${plantName}</div>
  <div class="plant-info-btn"></div>
</div>
<div class="plant-stars">
<div class="star fullstar"></div>
<div class="star fullstar"></div>
<div class="star fullstar"></div>
<div class="star emptystar"></div>
<div class="star emptystar"></div>
(85)
</div>
<div class="plant-bottom">
  <div class="plant-price">$${plantPrice}</div>
  <div class="plant-add-to-cart">add to cart</div>
</div>
</div>`;
};





const plabntsList=[
    {
        name: "Avokado tree",
        img: "./img/plant-1.png",
        price: 10,
        stars: 85,
        likes: 100,
        id: 1,
        liked: false
    },
    {
        name: "Avokado tree",
        img: "./img/plant-2.png",
        price: 10,
        stars: 85,
        likes: 100,
        id: 2,
        liked: true
    },
    {
        name: "Avokado tree",
        img: "./img/plant-1.png",
        price: 10,
        stars: 85,
        likes: 100,
        id: 3,
        liked: false
    },
    {
        name: "Avokado tree",
        img: "./img/plant-1.png",
        price: 10,
        stars: 85,
        likes: 100,
        id: 3,
        liked: false
    },
    {
        name: "Avokado tree",
        img: "./img/plant-1.png",
        price: 10,
        stars: 85,
        likes: 100,
        id: 3,
        liked: false
    },
    {
        name: "Avokado tree",
        img: "./img/plant-1.png",
        price: 10,
        stars: 85,
        likes: 100,
        id: 3,
        liked: false
    },
    {
        name: "Avokado tree",
        img: "./img/plant-1.png",
        price: 10,
        stars: 85,
        likes: 100,
        id: 3,
        liked: false
    },
    {
        name: "Avokado tree",
        img: "./img/plant-2.png",
        price: 10,
        stars: 85,
        likes: 100,
        id: 3,
        liked: false
    },
    {
        name: "Avokado tree",
        img: "./img/plant-2.png",
        price: 10,
        stars: 85,
        likes: 100,
        id: 3,
        liked: false
    },
]






for (let i=0;i<plabntsList.length;i++){
    const plant = plabntsList[i];
    const newPlant = plantHtml(plant.name, plant.img, plant.price, plant.stars, plant.likes, plant.id, plant.liked);
    allplantscontainer.innerHTML += newPlant;
}
