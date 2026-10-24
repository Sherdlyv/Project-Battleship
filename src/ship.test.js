import { ship } from "./ship.js";


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