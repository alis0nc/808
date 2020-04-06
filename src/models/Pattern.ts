import { Instrument } from './Instrument';

const PATTERN_LENGTH = 16;
export const STEPS_PER_BAR = 8;

export const DEFAULT_PATTERN = [
  false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false,
];

export default class Pattern {
  instrument: Instrument;
  pattern: Array<boolean>;

  constructor(instrument: Instrument, pattern: Array<boolean> | undefined = undefined) {
    this.instrument = instrument;
    this.pattern = pattern || DEFAULT_PATTERN.slice();
  }

  checkValidStep(step: number) {
    return step < PATTERN_LENGTH;
  }

  setStep(step: number) {
    if(this.checkValidStep(step)) {
      this.pattern[step] = true;
    }
  }

  clearStep(step: number) {
    if(this.checkValidStep(step)) {
      this.pattern[step] = false;
    }
  }
}