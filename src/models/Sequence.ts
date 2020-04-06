import Pattern from './Pattern';
import { Instrument } from './Instrument';

export default class Sequence {
  kickPattern: Pattern;
  snarePattern: Pattern;
  openHatPattern: Pattern;
  closedHatPattern: Pattern;
  constructor(
    kickPattern: Pattern | undefined = undefined,
    snarePattern: Pattern | undefined = undefined,
    openHatPattern: Pattern | undefined = undefined,
    closedHatPattern: Pattern | undefined = undefined,
  ) {
    this.kickPattern = kickPattern || new Pattern(Instrument.Kick);
    this.snarePattern = snarePattern || new Pattern(Instrument.Snare);
    this.openHatPattern = openHatPattern || new Pattern(Instrument.OpenHat);
    this.closedHatPattern = closedHatPattern || new Pattern(Instrument.ClosedHat);
  }

  getPatternByInstrument(instrument: Instrument): Pattern {
    switch (instrument) {
      case Instrument.Kick:
        return this.kickPattern;
      case Instrument.Snare:
        return this.snarePattern;
      case Instrument.OpenHat:
        return this.openHatPattern;
      case Instrument.ClosedHat:
        return this.closedHatPattern;
    }
  }

  setStep(instrument: Instrument, step: number) {
    const pattern = this.getPatternByInstrument(instrument);
    console.log(pattern);
    pattern?.setStep(step);
  }

  clearStep(instrument: Instrument, step: number) {
    const pattern = this.getPatternByInstrument(instrument);
    pattern?.clearStep(step);
  }
}