"use strict";
/*
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
*/
const BASE_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const GET_GOODS_ITEMS = `${BASE_URL}catalogData.json`
const GET_BASKET_GOODS_ITEMS = `${BASE_URL}getBasket.json`

function service(url) {
   return fetch(url)
      .then((res) => res.json())
}

function init() {
      Vue.component('basket', {
      template: `
        <div class="fixed-area">
           <div class="basket-card">
              <div class="basket-card__header">
                 <h1 class="basket-card__header__title">basket card</h1>
                 <div class="basket-card__header__delete-icon"
                    @click="$emit('close')"
                 ></div>
              </div>
              <div class="basket-card__content">
                 content
              </div>
           </div>
        </div>
      `
    });
   Vue.component('custom_btn', {
      template: `
      <button class="btn btn-outline-secondary" type="button" v-on:click="$emit('click')">
      <slot></slot>
      </button>
    `
   });
   Vue.component('card', {
      props: [
         'item'
      ],
      template: `
      <div class="card" style="width: 18rem;">
        <img src="/css/img/5.jpg" class="card-img-top" style="padding-top: 20px;"><br>
        <div class="card-body">
           <h5 class="card-title"> {{ item.product_name }}</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card is content.</p>
           <h3 class="product-price">{{ item.price }} $</h3>
           <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
        </div>
    `
   });
   Vue.component('search', {
      template: `
      <input type="text" class="goods-search" style="margin-right: 10px; border-radius: 6px;" v-model="$emit.search" />
    `
   });

   const app = new Vue({
      el: '#root',
      data: {
         items: [],
         filteredItems: [],
         search: '',
         isVisibleCart: false
      },
      methods: {
         fetchGoods() {
            setTimeout(() => {
               service(GET_GOODS_ITEMS).then((data) => {
                  this.items = data;
                  this.filteredItems = data;
               });
            }, 500)
         },
         filterItems() {
            this.filteredItems = this.items.filter(({ product_name }) => {
               return product_name.match(new RegExp(this.search, 'gui'))
            })
         },
         setVisibleCart() {
            this.isVisibleCart = !this.isVisibleCart
         },
      },
      computed: {
         calculatePrice() {
            return this.filteredItems.reduce((prev, { price }) => {
               return prev + price;
            }, 0)
         }
      },
      mounted() {
         this.fetchGoods();
      }
   })
}
window.onload = init


























/*
function service(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onload = () => {
     if (xhr.readyState === 4) {
        callback(JSON.parse(xhr.response))
     }
  }
}

class GoodsItem {
  constructor({product_name, price, description = '', img = "./css/img/5.jpg" }) {
     this.product_name = product_name;
     this.price = price;
     this.description = description;
     this.img = img;
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
  filteredItems = []
  fetchGoods(callback) {
     service(GET_GOODS_ITEMS, (data) => {
        this.items = data;
        this.filteredItems = data;
        callback()
     });
  }
  filterItems(value) {
     this.filteredItems = this.items.filter(({ product_name }) => {
        return product_name.match(new RegExp(value, 'gui'))
     })
  }
  calculatePrice() {
     return this.items.reduce((prev, { price }) => {
        return prev + price;
     }, 0)
  }
  render() {
     const goods = this.filteredItems.map(item => {
        const goodItem = new GoodsItem(item);
        return goodItem.render()
     }).join('');

     document.querySelector('.card-container').innerHTML = goods;
  }
}

class BasketGoodsList {
  items = [];
  fetchGoods() {
     service(GET_BASKET_GOODS_ITEMS, (data) => {
        this.items = data.contents;
     });
  }
}

const goodsList = new GoodsList();
/*
goodsList.fetchGoods(() => {
  goodsList.render();
});

const basketGoodsList = new BasketGoodsList();
basketGoodsList.fetchGoods();

document.getElementsByClassName('search-button')[0].addEventListener('click', () => {
  const value = document.getElementsByClassName('card-container')[0].value;
  goodsList.filterItems(value);
  goodsList.render();
})
*/