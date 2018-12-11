export class FilaCalculator {

  secondsToFullTime(seconds : number) : string {
    let second = seconds % 60;
    let minute = ((seconds - second) / 60 ) % 60;
    let hour = ((((seconds - second) / 60 ) - minute) / 60) % 24;
    let day = (((((seconds - second) / 60 ) - minute) / 60) - hour) / 24;
    let returner = "";
    if (day > 0) {
      if (day == 1) {
        returner += "1 dia,"
      } else {
        returner += day + " dias,"
      }
    }
    if (hour > 0) {
      if (hour == 1) {
        returner += " 1 hora,"
      } else {
        returner +=" " + hour + " horas,"
      }
    }
    if (minute > 0) {
      if (minute == 1) {
        returner += " 1 minuto,"
      } else {
        returner +=" " + minute + " minutos,"
      }
    }
    if (second == 1) {
      returner += " 1 segundo"
    } else {
      returner +=" " + second + " segundos"
    }
    return returner;
  }

}
