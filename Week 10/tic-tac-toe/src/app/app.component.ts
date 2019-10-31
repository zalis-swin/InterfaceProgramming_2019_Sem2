import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Tic Tac Toe";
  player = "hello";

  numRounds: number;
  amountRounds: number;
  roundNo: number;
  gameWinner: string;
  guitarWins:number = 0;
  frogWins:number = 0;
  numDraws: number = 0;
  
  winHandling(event) {
    if (event == "X") {
      this.guitarWins++;
    }
    else if (event == "O") {
      this.frogWins++;
    }
    else if (event == 'true') {
      this.numDraws++;
    }
    this.gameWinner = this.calculateGameWinner();
  }

  selectRounds() {
    (<HTMLInputElement> document.getElementById("roundInput")).disabled = true;
    (<HTMLInputElement> document.getElementById("selectButton")).disabled = true;
    this.amountRounds = this.numRounds;
  }

  countRounds(event) {
    this.roundNo = event;
  }

  calculateGameWinner() {
    if (this.roundNo == this.numRounds) {
      if (this.numDraws >= 1 && this.guitarWins == this.frogWins) {
        return "Draw";
      }
      else if (this.guitarWins > 0 && this.guitarWins > this.frogWins) {
        return "X";
      }
      else if (this.frogWins > 0 && this.frogWins > this.guitarWins) {
        return "O";
      }
    }
  }
}