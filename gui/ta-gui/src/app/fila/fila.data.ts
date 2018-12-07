export class FilaData{

  estimatedWaitingTime: number;
  estimatedPersonsOnLine: number;
  estimatedTimeToGo: string;

  constructor( waitingTime : number , personsOnLine : number, timeToGo : string){
    this.estimatedWaitingTime = waitingTime;
    this.estimatedPersonsOnLine = personsOnLine;
    this.estimatedTimeToGo = timeToGo;
  }

  clean(): void {
    this.estimatedWaitingTime = 0;
    this.estimatedPersonsOnLine = 0;
    this.estimatedTimeToGo = "";
  }

  copyFrom(from: FilaData): void {
    this.estimatedWaitingTime = from.getWaitingTime();
    this.estimatedPersonsOnLine = from.getPersonsOnLine();
    this.estimatedTimeToGo = from.getTimeToGo();
  }

  setFeatures( waitingTime : number, personsOnLine : number, timeToGo : string) {
    if (waitingTime != null) {
      this.estimatedWaitingTime = waitingTime;
    }
    if (personsOnLine > -1) {
      this.estimatedPersonsOnLine = personsOnLine;
    }
    if (timeToGo != null) {
      this.estimatedTimeToGo = timeToGo;
    }
  }

  getWaitingTime(): number {
    return this.estimatedWaitingTime;
  }

  getPersonsOnLine() : number {
    return this.estimatedPersonsOnLine;
  }

  getTimeToGo() : string {
    return this.estimatedTimeToGo;
  }

}
