interface Fruit {
  name: string
  isSweet: boolean
}

const whenToEatSweetFruits = 'all the time'
const whenToEatSourFruits = 'all the time'
const someFruit: Fruit = {
  name: 'pitaya',
  isSweet: true,
}

function printTheBestTimeToEatSweetOrSourFruits(fruit: Fruit) {
  console.log(
    `The best time to eat ${fruit.name} is ${
      fruit.isSweet ? whenToEatSweetFruits : whenToEatSourFruits
    }`
  )
}

printTheBestTimeToEatSweetOrSourFruits(someFruit)
