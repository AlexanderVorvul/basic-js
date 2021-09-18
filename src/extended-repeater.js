import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  let Str = String(str);
  const repeatTimes = options.repeatTimes === undefined ? 0 : Number(options.repeatTimes),
        separator = options.separator === undefined ? '+' : String(options.separator),
        addition = String(options.addition),
        additionRepeatTimes = options.additionRepeatTimes === undefined ? 0 : Number(options.additionRepeatTimes),
        additionSeparator = options.additionSeparator === undefined ? '|' : String(options.additionSeparator);

  if (options.addition !== undefined ){
    let addStr = addition;
    for(let i = 1; i < additionRepeatTimes; i++){
      addStr += additionSeparator + addition;
    }
      Str += addStr;
  }

  let result = Str;

  for(let i = 1; i < repeatTimes; i++){
    result += separator + Str ;
  }

  return result;

}
