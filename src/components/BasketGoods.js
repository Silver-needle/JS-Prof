export const basketGoods = Vue.component('basket-goods', {
   data() {
      return {
         basketGoodsItems: []
      }
   },

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
               <basket-goods-item v-for="item in basketGoodsItems" :item="item" @delete-"deleteBasketGood" @add="addGood"></basket-goods-item>
            </div>
         </div>
      </div>
      `,
   mounted() {
      service(GET_BASKET_GOODS).then((data) => {
         this.basketGoodsItems = data
      })
   },
   methods: {
      deleteBasketGood(id) {
         service(GET_BASKET_GOODS, "DELETE", {
            id
         }).then((data) => {
            this.basketGoodsItems = data
         })
      },
      addGood() {
         service(GET_BASKET_GOODS, 'PUT', {
            id
         }).then((data) => {
            this.basketGoodsItems = data
         })
      }
   }
})