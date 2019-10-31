import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  tiles: any[];
  nextPlayer: boolean;
  winner: string;
  draw: boolean;
  roundCount: number = 0;

  @Input() totalRounds: number;

  @Output() onWin = new EventEmitter<string>();
  @Output() roundNumber = new EventEmitter<number>();
  @Output() disableButton = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    this.nextRound();
  }

  nextRound(){
    this.tiles = Array(9).fill(null);
    this.winner = null;
    this.nextPlayer = true;
    this.draw = false;
    this.roundCount++;
    this.roundNumber.emit(this.roundCount);
    if (this.totalRounds == this.roundCount) {
    (<HTMLInputElement> document.getElementById("roundButton")).disabled = true;
    }
  }

  get player(){
    return this.nextPlayer ? 'X' : 'O';
  }

  takeTurn(index: number){
    if (!this.tiles[index] && !this.winner) {
      this.tiles[index] = this.player;
      this.nextPlayer = !this.nextPlayer;
    }
    this.winner = this.calculateWinner();
    this.draw = this.endRound();
  }

  calculateWinner() {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (this.tiles[a]
        && this.tiles[a] === this.tiles[b]
        && this.tiles[a] === this.tiles[c]) {
          this.onWin.emit(this.tiles[a])
          return this.tiles[a];
      }
    }
    return null;
  }

  endRound(): boolean {
    let isDraw = true;
    for (let i = 0; i < 9; i++) {
      if (this.tiles[i] == null) {
        isDraw = false
      }
    }
    this.onWin.emit(String(isDraw));
    return isDraw;
  }

  callParent() {
    this.disableButton.next();
  }

}
