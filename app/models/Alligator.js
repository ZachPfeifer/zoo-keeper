class Alligator {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethQuantity = '',
    ) {
        this.id = 0,
            this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethQuantity = teethQuantity;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

export default Alligator;
