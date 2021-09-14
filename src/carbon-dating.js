import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  
  if (typeof sampleActivity != "string") return false;
  
  sampleActivity = sampleActivity.trim();
  if (sampleActivity.length < 1 ) return false;
  
  const N = Number(sampleActivity);
  if(isNaN(N)) return false;
  if(  ! (0 < N && N <= MODERN_ACTIVITY) ) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log( MODERN_ACTIVITY / N ) / k;

  return Math.ceil(t);    
}

