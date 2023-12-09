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
   {
      id: 4,
      title: 'Incognito PC',
      price: 400,
      description: 'Some quick example text to build on the card title and make up the bulk of the card is content.',
   }
];

class GoodsItem {
   constructor({ title = '', id = 0, price = 0, description = '', img = "./css/img/5.jpg" }) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.description = description;
      this.img = img;
   }
   render() {
      return `
      <div class="card" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" style="padding-top: 20px;">
      <div class="card-body">
         <h5 class="card-title">${this.title}</h5>
         <p class="card-text">${this.description}</p>
         <h3 class="product-price">${this.price} $</h3>
         <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
   </div>
   `
   }
}
class GoodsList {
   items = [];
   fetchGoods() {
      this.items = goods;
   }
   render() {
      const goods = this.items.map(item => {
         const goodItem = new GoodsItem(item);
         return goodItem.render()
      }).join('');

      document.querySelector('.card-container').innerHTML = goods;
   }
}

const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();
