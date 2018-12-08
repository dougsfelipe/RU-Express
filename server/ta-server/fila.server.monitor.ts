import {FilaData} from "../../gui/ta-gui/src/app/fila/fila.data";

export class FilaServerMonitor{

    constructor() {}

    getDataQueue() : FilaData {
        let waitingTime = this.getRandomIntInclusive(0,10799);
        let waitingPeople = this.getRandomIntInclusive(0,656);
        let timeToGo = this.getRandomIntInclusive(0,1439);
        let minuteToGo = timeToGo % 60;
        let hourToGo = (timeToGo - minuteToGo) / 60;
        return new FilaData(waitingTime, waitingPeople, hourToGo+":"+minuteToGo);
    }

    private getRandomIntInclusive(min : number, max : number) : number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return (Math.floor(Math.random() * ((max - min) + 1)) + min);
    }

}
