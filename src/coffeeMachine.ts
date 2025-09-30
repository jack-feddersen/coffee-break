export class CoffeeMachine {
  cups = [{ name: "Mug", capacityMl: 250, empty: true, contents: "" }];

  #beans = 200;

  constructor() {}

  makeCoffee() {
    const cup = this.cups.pop()!;

    // This takes some beans and grinds them.
    const beansUsed = (cup.capacityMl / 2.37) ** 2;
    this.#beans -= beansUsed;

    cup.empty = false;
    cup.contents = "Coffee";

    return cup;
  }
}

export default {
  CoffeeMachine,
};
