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

const likedFunction=(liked)=>{
  if(liked){
    return `<img src="./img/heart-likes.png" alt="" />`;
  }
  else{
    return `<img src="./img/notliked.png" alt="" />`;
  }
}


const howmanystarsfunctionalaty=(stars)=>{
  stars=Math.floor(stars/20);

  let html='';
  // full stars
  for(let i=0;i<stars;i++){
    html+=`<div class="star full-star"></div>`;
  }
  // empty stars
  for(let i=0;i<5-stars;i++){
    html+=`<div class="star empty-star"></div>`;
  }
  return html;
}


const plantHtml = (plantName, plantImg, plantPrice, plantStars, plantLikes, id, liked) => {
  return `<div class="plant" id=${id}>
<div class="plant-like-icon liked-${liked}">
  ${likedFunction(liked)}
</div>
<div class="plant-img" style="background-image:url(${plantImg})"></div>
<div class="plant-top">
  <div class="plant-name">${plantName}</div>
  <div class="plant-info-btn"></div>
</div>
<div class="plant-stars">
  ${howmanystarsfunctionalaty(plantStars)}
(${plantStars})
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
        stars: 90,
        likes: 100,
        id: 1,
        liked: false
    },
    {
        name: "Avokado tree",
        img: "./img/plant-2.png",
        price: 10,
        stars: 11,
        likes: 100,
        id: 2,
        liked: false
    },
    {
        name: "Avokado tree",
        img: "./img/plant-1.png",
        price: 10,
        stars: 50,
        likes: 100,
        id: 3,
        liked: false
    },
    {
        name: "Avokado tree",
        img: "./img/plant-1.png",
        price: 10,
        stars: 10,
        likes: 100,
        id: 3,
        liked: false
    },
    {
        name: "Avokado tree",
        img: "./img/plant-1.png",
        price: 10,
        stars: 20,
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
        stars: 40,
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
        stars: 100,
        likes: 60,
        id: 3,
        liked: false
    },
]






for (let i=0;i<plabntsList.length;i++){
    const plant = plabntsList[i];
    const newPlant = plantHtml(plant.name, plant.img, plant.price, plant.stars, plant.likes, plant.id, plant.liked);
    allplantscontainer.innerHTML += newPlant;
}








const plantlikeicon=document.querySelectorAll(".plant-like-icon");
plantlikeicon.forEach(icon=>{
  icon.addEventListener("click",()=>{
      icon.classList.toggle("liked");
      icon.classList.toggle("liked-true");
      if (icon.classList.contains("liked-true")){
        icon.innerHTML=likedFunction(true);
      }
      else{
        icon.innerHTML=likedFunction(false);
      }
  })
})
