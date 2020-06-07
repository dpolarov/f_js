'use strict';

const dock1= new Dock(10, 10, 5,  sea);
//dock1;
const ship2 = new Ship('Good ship 2','tanker',sea);
sea.ships
ship2.move('n');
console.log(ship2);


ship2.moveTo({
    x: 20,
    y: 20
});


ship2.moveTo({
    x: 10,
    y: 10
});

dock1.moor(ship2);
dock1.unmoor(ship2);
dock1.moor(ship2);
dock1.unmoor(ship2);
dock1.unmoor(ship2);

console.log(sea);




