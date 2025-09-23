class CoffeeMachine {
  cups = [
    { name: "Mug", capacityMl: 250, empty: true, contents: null },
  ]

  #beans = 200

  constructor() {}

  makeCoffee() {
    const cup = this.cups.pop();

    // This takes some beans and grinds them.
    const beansUsed = (cup.capacityMl / 2.37) ** 2;
    this.#beans -= beansUsed;

    cup.empty = false;
    cup.contents = "Coffee";

    return cup;
  }
}

module.exports = CoffeeMachine;

// We want to add more beans to our machine, and see how many are left inside, but we can't see them now. What should we do? 
// --> Let the Beans Be Set/Got By Methods

// We want to have a different type of cup, like a flask, and add it to our machine. I want to be able to choose between both. What should we do?
// --> Refactor makeCoffee to take a cup parameter
// --> Create a new Cup class and pass that in instead

// I also now want a take-away cup, which can also be closed. What should we do?
// --> Create a new TakeAwayCup
// --> Create a separate sub interface for the closable cups

// We're now depending on passing in either a mug, take-away cup or flask. What if someone else wants to use a new cup in the future?
// --> Create a new Cup interface and pass that in instead instead of Union typing classes

// What if I want to know how many beans I would need to make a coffee for a particular mL?
// Extract Method to calculate the beans needed for a given mL