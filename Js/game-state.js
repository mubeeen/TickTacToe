import Events from './events.js';

export default class GameState {
    constructor() {

        let match = 0;
        //document.getElementById("main-menu").style.display = 

        //let m = document.getElementById("valid-input-notification").value;
        //console.log(m);

        document.getElementById("lets-play").addEventListener("click",() => {
            document.getElementById("front-main-menu").style.display = "none";
            document.getElementById("play-game-container").style.display = "block";

            //var selector = document.getElementById('selected-matches');
            //this.value = selector[selector.selectedIndex].value;
            
            this.value = document.getElementById("FormControlInput1").value;
            console.log(this.value);
            new Events(this.value);
        })

        //let myEvent = new Events(this.value);        
    }
}

