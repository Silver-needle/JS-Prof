"use strict";

const goods = [
   {
      id: 1,
      title: 'Personal computer v 4', 
      price: 1600,
      description: 'Some quick example text to build on the card title and make up the bulk of the card is content.',
      img: "./css/img/2.jpg",
   },
   {
      id: 2,
      title: 'Personal computer v 3', 
      price: 800,
      description: 'Some quick example text to build on the card title and make up the bulk of the card is content.',
      img: "./css/img/3.jpg",
   },
   {
      id: 3,
      title: 'Macintosh 128k', 
      price: 1400,
      description: 'Some quick example text to build on the card title and make up the bulk of the card is content.',
      img: "./css/img/4.jpg",
   },
];

const renderGoodsItem = ({ title = '', price = 0, description = '', img = "./css/img/5.jpg" }) =>
`<div class="card" style="width: 18rem;">
         <img src="${img}" class="card-img-top" style="padding-top: 20px;">
         <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <h3 class="product-price">${price} $</h3>
            <a href="#" class="btn btn-primary">Add to Cart</a>
         </div>
      </div>`
;

const renderGoodsList = (list = []) => {
   let goodsList = list.map(item => renderGoodsItem(item));
   document.querySelector('.card-container').innerHTML = goodsList.join('');
}

renderGoodsList(goods); 