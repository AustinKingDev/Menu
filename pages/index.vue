<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        jc items 
      </h1>
      <NuxtLink to="/cart">View cart</NuxtLink>
      <div v-for="item of items">
        name: {{ item.name }} <br>
        price: {{ item.price }} <br>
        desc: {{ item.desc }}
         <button @click="addCart(item)" >
          Add to cart 
        </button>
      </div>

       
    </div>
  </div>
</template>

<script>


export default {
  data (){
    return {
      items: [ {
                name: "Tataki Tuna Salad 1",
                price: 14,
                desc: "salad"
            
              }, {
                name: "Tataki Tuna Salad 2 ",
                price: 14,
                desc: "salad"
            
              }, {
                name: "Tataki Tuna Salad 3",
                price: 14,
                desc: "salad"
            
              }]
    }
  },
  methods: {
    addCart(item){
       console.log("add item");
            // const item = {
            //     name: "Tataki Tuna Salad",
            //     price: 14,
            //     desc: "salad"
            
            //   }
              this.$store.commit("addToCart", item) 
              this.$router.push("/cart")
    }
  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
