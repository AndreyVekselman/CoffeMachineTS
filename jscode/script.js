"use strict";
class Coffee {
    constructor(coffeeTypeInput, originCoffeeInput) {
        this.coffeeType = coffeeTypeInput;
        this.originCoffee = originCoffeeInput;
    }
}
class Glass {
    constructor(glassSizeInput, glassTypeInput) {
        this.glassSize = glassSizeInput;
        this.glassType = glassTypeInput;
    }
}
class coffeeMachine {
    constructor() {
        this.coffee = [];
        this.glass = [];
    }
    addCofee(coffeeTypeInput, originCoffeeInput) {
        this.coffee.push(new Coffee(coffeeTypeInput, originCoffeeInput));
        return `Coffee ${coffeeTypeInput} from ${originCoffeeInput} added to machine successefully`;
    }
    addGlass(glassSizeInput, glassTypeInput) {
        this.glass.push(new Glass(glassSizeInput, glassTypeInput));
        return `${glassSizeInput} Glass from ${glassTypeInput} added to machine successefully`;
    }
    getCoffee() {
        return this.coffee;
    }
    getGlass() {
        return this.glass;
    }
    coffeeRequest(coffeeTypeInput, originCoffeeInput, glassSizeInput, glassTypeInput) {
        let cofffeAndGlassExist = false;
        let i = 0, j = 0;
        while (i < this.glass.length && !cofffeAndGlassExist) {
            if (this.glass[i].glassSize == glassSizeInput &&
                this.glass[i].glassType == glassTypeInput) {
                while (j < this.coffee.length && !cofffeAndGlassExist) {
                    if (this.coffee[j].coffeeType == coffeeTypeInput &&
                        this.coffee[j].originCoffee == originCoffeeInput) {
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
btnAddCoffeeConfirm === null || btnAddCoffeeConfirm === void 0 ? void 0 : btnAddCoffeeConfirm.addEventListener("click", () => {
    const coffeeTypeHTML = document.getElementById("coffeType").value;
    const coffeeOriginHTML = document.getElementById("coffeOrigin").value;
    const coffeeOutTxtHTML = document.getElementById("outCoffeeAdd");
    coffeeOutTxtHTML.innerText = coffeMachine.addCofee(coffeeTypeHTML, coffeeOriginHTML);
    console.log(coffeMachine.getCoffee());
});
// add Glass
const btnAddGlassConfirm = document.getElementById("glassConfirm");
btnAddGlassConfirm === null || btnAddGlassConfirm === void 0 ? void 0 : btnAddGlassConfirm.addEventListener("click", () => {
    const glassTypeHTML = document.getElementById("glassType").value;
    const glassSizeHTML = document.getElementById("glassSize").value;
    const glassOutTxtHTML = document.getElementById("outGlassAdd");
    glassOutTxtHTML.innerText = coffeMachine.addGlass(glassSizeHTML, glassTypeHTML);
    console.log(coffeMachine.getGlass());
});
///coffe Machine
const btnCoffePrepare = document.getElementById("coffePrepare");
btnCoffePrepare === null || btnCoffePrepare === void 0 ? void 0 : btnCoffePrepare.addEventListener("click", () => {
    const coffeeTypeHTMLInMachine = document.getElementById("coffeTypeInMachine").value;
    const coffeeOriginHTMLInMachine = document.getElementById("coffeOriginInMachine").value;
    const glassTypeHTMLInMachine = document.getElementById("glassTypeInMachine").value;
    const glassSizeHTMLInMachine = document.getElementById("glassSizeInMachine").value;
    const outCoffeMachine = document.getElementById("outCoffeMachine");
    outCoffeMachine.innerText = coffeMachine.coffeeRequest(coffeeTypeHTMLInMachine, coffeeOriginHTMLInMachine, glassSizeHTMLInMachine, glassTypeHTMLInMachine);
    console.log(coffeMachine.getCoffee());
    console.log(coffeMachine.getGlass());
});
////
