export const state = () => ({
    cart: []
  })

export const mutations = {
    addToCart(state, item) {

      // check if its already in the cart 
     // allow for mutlple ?
      state.cart.push(item)
    },
    //removeItem(state, item){

    //}
  }