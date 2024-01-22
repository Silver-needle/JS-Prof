export const BasketItem = Vue.component('basket-goods-item', {
   props: [
      'item'
   ],
   template: `
   <div class="card basket-card__content___item" style="width: 18rem;">
      <img src="/css/img/5.jpg" class="card-img-top" style="padding-top: 20px;"><br>
      <div class="card-body">
         <h5 class="card-title"> {{ item?.data?.product_name }}</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card is content.</p>
         <div>count: {{item?.count}}</div>
         <h3 class="product-price">{{ item?.price }} $</h3>
         <div>total: {{item?.total}}</div>
         <custom-button class="btn btn-primary" @click="$emit('add', item.data.id)">Add to Cart</custom-button>
         <custom-button class="btn btn-primary" @click="$emit('delete', item.data.id)">Delete</custom-button>
      </div>
   `
});