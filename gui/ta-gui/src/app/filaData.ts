export class FilaData{

  private estimatedWaitingTime: string;
  private estimatedPersonsOnLine: number;
  private estimatedTimeToGo: string;

  constructor( waitingTime : string , personsOnLine : number, timeToGo : string){
    this.estimatedWaitingTime = waitingTime;
    this.estimatedPersonsOnLine = personsOnLine;
    this.estimatedTimeToGo = timeToGo;
  }

  clean(): void {
    this.estimatedWaitingTime = "";
    this.estimatedPersonsOnLine = 0;
    this.estimatedTimeToGo = "";
  }

  copyFrom(from: FilaData): void {
    this.estimatedWaitingTime = from.getWaitingTime();
    this.estimatedPersonsOnLine = from.getPersonsOnLine();
    this.estimatedTimeToGo = from.getTimeToGo();
  }

  setFeatures( waitingTime : string, personsOnLine : number, timeToGo : string) {
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

  getWaitingTime(): string {
    return this.estimatedWaitingTime;
  }

  getPersonsOnLine() : number {
    return this.estimatedPersonsOnLine;
  }

  getTimeToGo() : string {
    return this.estimatedTimeToGo;
  }

}
