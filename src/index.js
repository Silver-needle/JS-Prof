"use strict";
import './style.css';
import { BASE_URL, GET_GOODS_ITEMS, GET_BASKET_GOODS_ITEMS } from './const';
import { service } from './services';
import { BasketItem } from './components/BasketItem';
import { CustomButton } from './components/CustomButton';
import { basketGoods } from './components/BasketGoods';
import { goodsItem } from './components/GoodsItem';

function init() {
   Vue.component('search-component', {
      model: {
         prop: 'value',
         event: 'input'
      },
      props: {
         value: String,
      },
      template: `
         <input type="text" class="goods-search" : value="value" @input = "$emit('input', $event.terget.value)" />
   `
   })

   Vue.component('search', {
      template: `
      <input type="text" class="goods-search" style="margin-right: 10px; border-radius: 6px;" v-model="$root.search" />
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
