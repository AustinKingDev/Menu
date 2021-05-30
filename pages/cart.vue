<template>
  <div style="background-color: beige;">  

    <div class="menuHeader">

      <div class="center">
        <img class="logo" src="~/assets/Cart.png" />
      
        <NuxtLink to="/">home</NuxtLink>
      </div> <br>

    </div>

      <div v-for="item of this.$store.state.cart " :key=item class="cart-grid"> 

        <img :src="require(`~/assets/${item.img}`)" class="cart-image" >
        <p> {{ item.name }} </p>
        <span>${{ item.price }} </span>
        /
  

      </div>

  </div>
</template>

<style>
.container1 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: beige;
}

.cart-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 120px);
  background-color: beige;
  margin-bottom: 5px;
  border-top: 1px solid black;
}
.vline{
  border-right: 1px solid black;;
}
.cart-image {
  height:120px;
  width:120px
}
</style>