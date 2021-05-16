<template>
    
    <div class="container1">
         <h1 class="title">
      cart 
      </h1>
      <NuxtLink to="/">home</NuxtLink>
      <div v-for="item of this.$store.state.cart " :key=item> 
        name: {{ item.name }} <br>
        price: {{ item.price }} <br>
        desc: {{ item.desc }}

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
  background-color:beige;
}
</style>