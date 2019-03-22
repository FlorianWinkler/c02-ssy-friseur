const Kunde = require('../client/kunde');


neueKundschaft();

function neueKundschaft(){
    Kunde();
    setTimeout(neueKundschaft,1500);
}
