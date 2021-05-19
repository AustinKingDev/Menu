<template>
  <div class="container">
    <div class="logo">
      <img class="logo" src="~/assets/5Burger.png" />
    </div>

    <div class="ourMenu">
      <img class="ourMenu" src="~/assets/OurMenu.png" />
    </div>
     
      <NuxtLink to="/cart">View cart</NuxtLink>

      <!-- <div v-for="item of items" :key="item.id">
        <img :src="require(`~/assets/${item.img}`)">
        name: {{ item.name }} <br>
        price: {{ item.price }} <br>
        desc: {{ item.desc }}
         <button @click="addCart(item)" >
          Add to cart 
        </button>
      </div> -->

       
    

    <div class="item-1">
      <img  class="menuImage" src="~/assets/Burger.jpg" />
    </div>

    <div class="item-2">
      <img class="menuImage" src="~/assets/Taco.jpg" />
    </div>

    <div class="item-3">
      <img class="menuImage" src="~/assets/HotDog.jpg" />
    </div>

    <div class="item-4">
      <img class="menuImage" src="~/assets/Chicken.jpg" />
    </div>

    <div class="item-5">
      <img class="menuImage" src="~/assets/Pizza.jpg" />
    </div>

    <div class="item-6">
      <img class="menuImage" src="~/assets/Steak.jpg" />
    </div>

    <div class="item-7">
      <img class="menuImage" src="~/assets/Fries.jpg" />
    </div>

    <div class="item-8">
      <img class="menuImage" src="~/assets/Soup.jpg" />
    </div>

    <div class="item-9">
      <img class="menuImage" src="~/assets/Cake.jpg" />
    </div>
  </div>
</template>

<script>


export default {
  data (){
    return {
      hover: false,
      items: [ {
                id: 1,
                name: "Burger",
                price: 5,
                desc: "",
                img: "Burger.jpg"
            
              }, {
                id: 2,
                name: "Tacos ",
                price: 8,
                desc: "salad",
                img: "Taco.jpg"
            
              }, {
                id:3,
                name: "Hot Dog",
                price: 5,
                desc: "salad",
                img: "HotDog.jpg"
            
              },
              {
                id:4,
                name: "Blackened Chicken",
                price: 10,
                desc: "",
                img: "Chicken.jpg"
            
              },
              {
                id:5,
                name: "Pizza",
                price: 4,
                desc: "",
                img: "Pizza.jpg"
            
              },
              {
                id:6,
                name: "Steak",
                price: 12,
                desc: "",
                img: "Steak.jpg"
            
              },
              {
                id:7,
                name: "Tomato Soup",
                price: 5,
                desc: "",
                img: "Soup.jpg"
            
              },
              {
                id:8,
                name: "Fries",
                price: 4,
                desc: "",
                img: "Fries.jpg"
            
              },
              {
                id:9,
                name: "Chocolate Cake",
                price: 6,
                desc: "",
                img: ".jpg"
            
              },

              
              ]
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
  display: grid;
  grid-template-columns: 33% 33% 33%;
  
  grid-gap: 10px;
  grid-template-areas: 
  "logo logo logo"
  ". ourMenu ."
  "item-1 item-2 item-3"
  "item-4 item-5 item-6"
  "item-7 item-8 item-9";
 background-color:beige;
}

.logo{
  grid-area: logo;
  grid-column-start: 2;
  justify-content: center;
}

.ourMenu{
  grid-area: ourMenu;
 justify-content: center;
}
.item-1{
  grid-area: item-1
}
.item-2{
  grid-area: item-2;
}
.item-3{
  grid-area: item-3;
}
.item-4{
  grid-area: item-4;
}
.item-5{
  grid-area: item-5;
}
.item-6{
  grid-area: item-6;
}
.item-7{
  grid-area: item-7;
}
.item-8{
  grid-area: item-8;
}
.item-9{
  grid-area: item-9;
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
  display: grid;
  height: 500px;
  width: 100%;
  margin: 5px;
}

.menuImage:hover{
    opacity: 75%;
    background-color: black;
}

.show {
  opacity: 75%;
  background-color: black;
}

.floatingMenu {
  clear: both;
  position: fixed;
  width: 100%;
  background-color: darkred;
}


</style>
