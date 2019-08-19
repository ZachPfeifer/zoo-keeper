class Koala {
  constructor(data) {
    this.id = 8,
      this.name = data.name
    this.color = data.color
    this.gender = data.gender
    this.weight = data.weight
    this.tailLengthInch = data.tailLengthInch
    this.teethQuantity = data.teethQuantity
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
}

export default Koala;



