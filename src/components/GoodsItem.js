export const goodsItem = Vue.component('goods-item', {
   props: [
      'item'
   ],
   template: `
<div class="goods-item">
<h3>{{item.product_name}}</h3>
<p>{{item.price}}</p>
<custom-button @click="addGood">Add</custom-button>
</div>
`,
   methods: {
      addGood() {
         service(GET_BASKET_GOODS, 'PUT', {
            id: this.id
         })
      }
   }
})