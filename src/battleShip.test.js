import { ship } from "./ship.js";
import { gameBoard } from "./gameBoard.js";


test("Verify class ship", () => {
    const myShip = new ship(4);
    expect(myShip.length).toBe(4);
    expect(myShip.isSunk()).toBe(false);
})

test("hit ship", () => {
    const myShip = new ship(2);

    myShip.hit();
    expect(myShip.isSunk()).toBe(false);

    myShip.hit();
    expect(myShip.isSunk()).toBe(true);

})

test("Return miss", () => {
    const grille = new gameBoard();
    const myShip = new ship(5);
    grille.placeShip(4,4,myShip)
    
    expect(grille.receiveAttack(3,4)).toBe('miss');
    expect(grille.receiveAttack(4, 4)).toBe('hit');
})