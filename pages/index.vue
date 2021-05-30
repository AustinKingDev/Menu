<template>
<div class="menuHeader">
    <div class="center">
      <img class="logo" src="~/assets/5Burger.png" />
    </div>

    <div class="center1">
      <img class="ourMenu" src="~/assets/OurMenu.png" />
    </div>
     
    <NuxtLink to="/cart" style="background: teal; color: white; ">View cart</NuxtLink>
  <div class="container">

     <div v-for="item of items" :key="item.id" class="item-card">
        <img :src="require(`~/assets/${item.img}`)" class="menuImage">

        <div class="item-content">
        name: {{ item.name }} <br>
        price: {{ item.price }} <br>
        desc: {{ item.desc }} <br>
         <button @click="addCart(item)" >
          Add to cart 
        </button> <br>
        <button @click="addEdit(item)" >
          Edit 
        </button>

        </div>
       
      </div>

       
    

    <div class="item-1 imageContainer">
      <div style="position: absolute;  top: 50%; display: grid;  grid-template-columns: repeat(3, 1fr);">
         <button style=" width: 100px">hi</button>
          <button style=" width: 100px">hi</button>
          <button style=" width: 100px">hi</button>
      </div>
      <img  class="menuImage" src="~/assets/Burger.jpg" />
    </div>

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
                img: "Cake.jpg"
            
              },

              
              ]
    }
  },
  methods: {
    addCart(item){
       console.log("add item");
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
  justify-content: center;
}

.ourMenu{
  grid-area: ourMenu;
 justify-content: center;
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
  height: 100%;
  width: 100%;
  margin: 5px;
}

.menuImage:hover {
  filter:brightness(50%);
  
}

.menuImage:hover + .item-content {
  display: inline-block;
  position: relative;
  z-index: 10;
  bottom: 80%;
  left: 30%;
  color:aliceblue
    
}

.item-card {
  position: relative;
  height: 320px;
  width: auto;
}

.button {
  display: none;
  width: 250px;
  height: auto;

}

.imageContainer {
position: relative;
}

.imageContainer:hover {
display: block;
z-index: 10;
}

.imageButton {
  display: none;
  width: 250px;;
}

.item-content {
display:none;
width:250px;
height: auto;
}

.item-content:hover {
  display:inline-block;
  z-index: 10;

}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:33%
}

.center1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:25%
}

.menuHeader {
  background-image:linear-gradient(rgb(225, 225, 200), beige);
}

</style>
