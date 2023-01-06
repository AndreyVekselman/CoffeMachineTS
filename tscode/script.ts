type coffeeType = "Groud" | "Instant";
type originCoffee = "Brazil" | "Columbia" | "Indonezia";

type glassType = "Cardboard" | "Plastic";
type glassSize = "Big|" | "Small" | "Medium";

class Coffee {
  public coffeeType: coffeeType;
  public originCoffee: originCoffee;
  constructor(coffeeTypeInput: coffeeType, originCoffeeInput: originCoffee) {
    this.coffeeType = coffeeTypeInput;
    this.originCoffee = originCoffeeInput;
  }
}

class Glass {
  public glassSize: glassSize;
  public glassType: glassType;
  constructor(glassSizeInput: glassSize, glassTypeInput: glassType) {
    this.glassSize = glassSizeInput;
    this.glassType = glassTypeInput;
  }
}

class coffeeMachine {
  coffee: Coffee[];
  glass: Glass[];
  constructor() {
    this.coffee = [];
    this.glass = [];
  }
  public addCofee(
    coffeeTypeInput: coffeeType,
    originCoffeeInput: originCoffee
  ): string {
    this.coffee.push(new Coffee(coffeeTypeInput, originCoffeeInput));
    return `Coffee ${coffeeTypeInput} from ${originCoffeeInput} added to machine successefully`;
  }
  public addGlass(
    glassSizeInput: glassSize,
    glassTypeInput: glassType
  ): string {
    this.glass.push(new Glass(glassSizeInput, glassTypeInput));
    return `${glassSizeInput} Glass from ${glassTypeInput} added to machine successefully`;
  }
  public getCoffee(): Coffee[] {
    return this.coffee;
  }
  public getGlass(): Glass[] {
    return this.glass;
  }
  public coffeeRequest(
    coffeeTypeInput: coffeeType,
    originCoffeeInput: originCoffee,
    glassSizeInput: glassSize,
    glassTypeInput: glassType
  ): string {
    let cofffeAndGlassExist: boolean = false;
    let i: number = 0,
      j: number = 0;
    while (i < this.glass.length && !cofffeAndGlassExist) {
      if (
        this.glass[i].glassSize == glassSizeInput &&
        this.glass[i].glassType == glassTypeInput
      ) {
        while (j < this.coffee.length && !cofffeAndGlassExist) {
          if (
            this.coffee[j].coffeeType == coffeeTypeInput &&
            this.coffee[j].originCoffee == originCoffeeInput
          ) {
            cofffeAndGlassExist = true;
            this.coffee.splice(j, 1);
            this.glass.splice(i, 1);
          }
          j++;
        }
      }
      i++;
    }
    return cofffeAndGlassExist
      ? "Coffee preparation in progress..."
      : `coffee or glass missing`;
  }
}

const coffeMachine = new coffeeMachine();

//// add Coffee
const btnAddCoffeeConfirm = document.getElementById("coffeConfirm");
btnAddCoffeeConfirm?.addEventListener("click", () => {
  const coffeeTypeHTML = (
    document.getElementById("coffeType") as HTMLInputElement
  ).value as coffeeType;
  const coffeeOriginHTML = (
    document.getElementById("coffeOrigin") as HTMLInputElement
  ).value as originCoffee;
  const coffeeOutTxtHTML = document.getElementById(
    "outCoffeeAdd"
  ) as HTMLInputElement;

  coffeeOutTxtHTML.innerText = coffeMachine.addCofee(
    coffeeTypeHTML,
    coffeeOriginHTML
  );
  console.log(coffeMachine.getCoffee());
});

// add Glass
const btnAddGlassConfirm = document.getElementById("glassConfirm");
btnAddGlassConfirm?.addEventListener("click", () => {
  const glassTypeHTML = (
    document.getElementById("glassType") as HTMLInputElement
  ).value as glassType;
  const glassSizeHTML = (
    document.getElementById("glassSize") as HTMLInputElement
  ).value as glassSize;
  const glassOutTxtHTML = document.getElementById(
    "outGlassAdd"
  ) as HTMLInputElement;

  glassOutTxtHTML.innerText = coffeMachine.addGlass(
    glassSizeHTML,
    glassTypeHTML
  );
  console.log(coffeMachine.getGlass());
});

///coffe Machine

const btnCoffePrepare = document.getElementById("coffePrepare");
btnCoffePrepare?.addEventListener("click", () => {
  const coffeeTypeHTMLInMachine = (
    document.getElementById("coffeTypeInMachine") as HTMLInputElement
  ).value as coffeeType;
  const coffeeOriginHTMLInMachine = (
    document.getElementById("coffeOriginInMachine") as HTMLInputElement
  ).value as originCoffee;
  const glassTypeHTMLInMachine = (
    document.getElementById("glassTypeInMachine") as HTMLInputElement
  ).value as glassType;
  const glassSizeHTMLInMachine = (
    document.getElementById("glassSizeInMachine") as HTMLInputElement
  ).value as glassSize;
  const outCoffeMachine = document.getElementById(
    "outCoffeMachine"
  ) as HTMLInputElement;

  outCoffeMachine.innerText = coffeMachine.coffeeRequest(
    coffeeTypeHTMLInMachine,
    coffeeOriginHTMLInMachine,
    glassSizeHTMLInMachine,
    glassTypeHTMLInMachine
  );
  console.log(coffeMachine.getCoffee());
  console.log(coffeMachine.getGlass());
});

////
