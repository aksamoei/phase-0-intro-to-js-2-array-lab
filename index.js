// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName) {
    cats.push(catName);
}

function destructivelyPrependCat(catName) {
    cats.unshift(catName);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(catName){
    return [...cats, catName];
}

function prependCat(catName) {
    return [catName, ...cats];
}

function removeLastCat() {
    return cats.slice(0, 2);
}

function removeFirstCat() {
    return cats.slice(1);
}
