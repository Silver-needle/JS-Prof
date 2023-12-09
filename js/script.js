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

const GET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
const GET_BASKET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';

function service(url, callback) {
   xhr = new XMLHttpRequest();
   xhr.open('GET', url);
   xhr.send();
   xhr.onload = () => {
     callback(JSON.parse(xhr.response))
   }
 }

class GoodsItem {
   constructor({ product_name = '', price = 0 }) {
    this.product_name = product_name;
    this.price = price;
   }
   render() {
      return `
      <div class="card" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" style="padding-top: 20px;">
      <div class="card-body">
         <h5 class="card-title">${this.product_name}</h5>
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
   fetchGoods(callback) {
      service(GET_GOODS_ITEMS, (data) => {
         this.items = data;
         callback()
      });
   }
   calculatePrice() {
      return this.items.reduce((prev, { price }) => {
         return prev + price;
      }, 0)
   }
   render() {
      const goods = this.items.map(item => {
         const goodItem = new GoodsItem(item);
         return goodItem.render()
      }).join('');

      document.querySelector('.goods-list').innerHTML = goods;
   }
}

const goodsList = new GoodsList();
goodsList.fetchGoods(() => {
   goodsList.render();
});
