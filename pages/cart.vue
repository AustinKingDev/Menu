<template>
    
    <div>
         <h1 class="title">
      cart 
      </h1>
      <NuxtLink to="/">home</NuxtLink>
      <div v-for="item of this.$store.state.cart "> 
        name: {{ item.name }} <br>
        price: {{ item.price }} <br>
        desc: {{ item.desc }}

        </div>
    </div>
</template>