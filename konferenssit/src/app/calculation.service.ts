import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  participantsNumber: number = 0;
  groupsNumber: number = 0;
  groupSize: number = 0;
  roundsNumber: number = 0;

  initCalculation(participantsNumber: number, groupsNumber: number) {
    this.participantsNumber = participantsNumber;
    this.groupsNumber = groupsNumber;
  }

  calculateGroups() {
    if (this.groupsNumber <= 0) {
      return 0;
    }
    // Maximum ihmistä ryhmissä, jos tulee murtoluku
    this.groupSize = Math.ceil(this.participantsNumber / this.groupsNumber);
    return this.groupSize;
  }

  calculateRounds() {
    if (this.groupSize == 1) {
      this.roundsNumber = this.participantsNumber;
      return this.roundsNumber;
    }
    if (this.participantsNumber <= 0 || this.groupSize < 1 || this.participantsNumber < this.groupSize) {
      this.roundsNumber = 0;
      return this.roundsNumber;
    }
    this.roundsNumber = Math.ceil((this.participantsNumber - 1) / (this.groupSize - 1));
    return this.roundsNumber;
  }

  // chatGpt ehdotus
  generateWorkshopGroups(): number[][][] {
    let participants = [];
    for (let i = 1; i <= this.participantsNumber; i++) {
      // Osallistujat on merkitty numeroilla: 1, 2 ...
      participants.push(i);
    }

    const rounds: number[][][] = [];

    for (let r = 0; r < this.roundsNumber; r++) {
        // Kierrätetään osallistujia
        const rotated = [...participants.slice(r), ...participants.slice(0, r)];
        const groups: number[][] = [];

        for (let i = 0; i < this.participantsNumber; i += this.groupSize) {
            groups.push(rotated.slice(i, i + this.groupSize));
        }

        rounds.push(groups);
    }

    return rounds;
  }
}
