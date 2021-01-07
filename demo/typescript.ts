type Fruit = 'pitaya' | 'durian' | 'guava'

let cart: Fruit[] = []

export const addToCart = (fruit: Fruit) => {
  return cart.push(fruit)
}

// addToCart('bagel')
addToCart('durian')
