<template>
  <div class="container">
    <div>
      <img src="~/assets/5Burger.png" />
      <img src="~/assets/OurMenu.png" />
      <h1 class="title">
        
      </h1>
      <NuxtLink to="/cart">View cart</NuxtLink>

      <div v-for="item of items" :key="item.img">
        <img :src="require(`~/assets/${item.img}`)">
        name: {{ item.name }} <br>
        price: {{ item.price }} <br>
        desc: {{ item.desc }}
         <button @click="addCart(item)" >
          Add to cart 
        </button>
      </div>

       
    </div>
    <div></div>

    <div class="container">
      <img class="menuImage" src="~/assets/Burger.jpg" />
    </div>
  </div>
</template>

<script>


export default {
  data (){
    return {
      items: [ {
                name: "Burger",
                price: 5,
                desc: "",
                img: "Burger.jpg"
            
              }, {
                name: "Tacos ",
                price: 8,
                desc: "salad",
                img: "Taco.jpg"
            
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
 
  background-color:beige;
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
  color: #ffffff;
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

.menuImage {
  display: flex;
  order:1;
  max-height: 400px;
  max-width: 400px;
  height: auto;
  width: auto;
  border: solid black;
}

.floatingMenu {
  clear: both;
  position: fixed;
  width: 100%;
  background-color: darkred;
}
</style>
