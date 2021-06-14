interface Fruit {
  name: string
  isSweet: boolean
  quantity: number
  callback?: Function
}

function randomizeFruit(fruit: Fruit) {
  const { name, isSweet, quantity, callback } = fruit
  const newFruit: Fruit = {
    name: name.split('').reverse().join(''),
    isSweet: !isSweet,
    quantity: Math.floor(Math.random() * (quantity + name.length)),
  }

  callback(newFruit)
}

randomizeFruit({
  name: 'Pitaya',
  isSweet: true,
  quantity: 42,
  callback: (fruit: Fruit) => {
    console.log('Fruit randomized:', fruit)
  },
})
