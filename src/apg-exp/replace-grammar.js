// copyright: Copyright (c) 2021 Lowell D. Thomas, all rights reserved<br>
//   license: BSD-2-Clause (https://opensource.org/licenses/BSD-2-Clause)<br>
//
// Generated by apg-js, Version 4.0.0 [apg-js](https://github.com/ldthomas/apg-js)
module.exports = function grammar(){
  // ```
  // SUMMARY
  //      rules = 11
  //       udts = 0
  //    opcodes = 39
  //        ---   ABNF original opcodes
  //        ALT = 4
  //        CAT = 4
  //        REP = 4
  //        RNM = 12
  //        TLS = 7
  //        TBS = 2
  //        TRG = 6
  //        ---   SABNF superset opcodes
  //        UDT = 0
  //        AND = 0
  //        NOT = 0
  //        BKA = 0
  //        BKN = 0
  //        BKR = 0
  //        ABG = 0
  //        AEN = 0
  // characters = [10 - 65535]
  // ```
  /* OBJECT IDENTIFIER (for internal parser use) */
  this.grammarObject = 'grammarObject';

  /* RULES */
  this.rules = [];
  this.rules[0] = {name: 'rule', lower: 'rule', index: 0, isBkr: false};
  this.rules[1] = {name: 'error', lower: 'error', index: 1, isBkr: false};
  this.rules[2] = {name: 'escape', lower: 'escape', index: 2, isBkr: false};
  this.rules[3] = {name: 'match', lower: 'match', index: 3, isBkr: false};
  this.rules[4] = {name: 'prefix', lower: 'prefix', index: 4, isBkr: false};
  this.rules[5] = {name: 'suffix', lower: 'suffix', index: 5, isBkr: false};
  this.rules[6] = {name: 'xname', lower: 'xname', index: 6, isBkr: false};
  this.rules[7] = {name: 'name', lower: 'name', index: 7, isBkr: false};
  this.rules[8] = {name: 'alpha', lower: 'alpha', index: 8, isBkr: false};
  this.rules[9] = {name: 'digit', lower: 'digit', index: 9, isBkr: false};
  this.rules[10] = {name: 'any-other', lower: 'any-other', index: 10, isBkr: false};

  /* UDTS */
  this.udts = [];

  /* OPCODES */
  /* rule */
  this.rules[0].opcodes = [];
  this.rules[0].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[0].opcodes[1] = {type: 2, children: [2,4]};// CAT
  this.rules[0].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[0].opcodes[3] = {type: 4, index: 10};// RNM(any-other)
  this.rules[0].opcodes[4] = {type: 3, min: 0, max: 1};// REP
  this.rules[0].opcodes[5] = {type: 1, children: [6,7,8,9,10,11]};// ALT
  this.rules[0].opcodes[6] = {type: 4, index: 2};// RNM(escape)
  this.rules[0].opcodes[7] = {type: 4, index: 3};// RNM(match)
  this.rules[0].opcodes[8] = {type: 4, index: 4};// RNM(prefix)
  this.rules[0].opcodes[9] = {type: 4, index: 5};// RNM(suffix)
  this.rules[0].opcodes[10] = {type: 4, index: 6};// RNM(xname)
  this.rules[0].opcodes[11] = {type: 4, index: 1};// RNM(error)

  /* error */
  this.rules[1].opcodes = [];
  this.rules[1].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[1].opcodes[1] = {type: 7, string: [36]};// TLS
  this.rules[1].opcodes[2] = {type: 4, index: 10};// RNM(any-other)

  /* escape */
  this.rules[2].opcodes = [];
  this.rules[2].opcodes[0] = {type: 7, string: [36,36]};// TLS

  /* match */
  this.rules[3].opcodes = [];
  this.rules[3].opcodes[0] = {type: 7, string: [36,38]};// TLS

  /* prefix */
  this.rules[4].opcodes = [];
  this.rules[4].opcodes[0] = {type: 7, string: [36,96]};// TLS

  /* suffix */
  this.rules[5].opcodes = [];
  this.rules[5].opcodes[0] = {type: 7, string: [36,39]};// TLS

  /* xname */
  this.rules[6].opcodes = [];
  this.rules[6].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
  this.rules[6].opcodes[1] = {type: 7, string: [36,123]};// TLS
  this.rules[6].opcodes[2] = {type: 4, index: 7};// RNM(name)
  this.rules[6].opcodes[3] = {type: 7, string: [125]};// TLS

  /* name */
  this.rules[7].opcodes = [];
  this.rules[7].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[7].opcodes[1] = {type: 4, index: 8};// RNM(alpha)
  this.rules[7].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[7].opcodes[3] = {type: 1, children: [4,5,6,7]};// ALT
  this.rules[7].opcodes[4] = {type: 4, index: 8};// RNM(alpha)
  this.rules[7].opcodes[5] = {type: 4, index: 9};// RNM(digit)
  this.rules[7].opcodes[6] = {type: 6, string: [45]};// TBS
  this.rules[7].opcodes[7] = {type: 6, string: [95]};// TBS

  /* alpha */
  this.rules[8].opcodes = [];
  this.rules[8].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[8].opcodes[1] = {type: 5, min: 97, max: 122};// TRG
  this.rules[8].opcodes[2] = {type: 5, min: 65, max: 90};// TRG

  /* digit */
  this.rules[9].opcodes = [];
  this.rules[9].opcodes[0] = {type: 5, min: 48, max: 57};// TRG

  /* any-other */
  this.rules[10].opcodes = [];
  this.rules[10].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
  this.rules[10].opcodes[1] = {type: 5, min: 32, max: 35};// TRG
  this.rules[10].opcodes[2] = {type: 5, min: 37, max: 65535};// TRG
  this.rules[10].opcodes[3] = {type: 5, min: 10, max: 13};// TRG

  // The `toString()` function will display the original grammar file(s) that produced these opcodes.
  this.toString = function toString(){
    let str = "";
    str += ";\n";
    str += "; SABNF grammar for parsing out the replacement string parameters\n";
    str += ";\n";
    str += "rule = *(*any-other [(escape / match / prefix/ suffix/ xname / error)])\n";
    str += "error = \"$\" any-other\n";
    str += "escape = \"$$\"\n";
    str += "match  = \"$&\"\n";
    str += "prefix = \"$`\"\n";
    str += "suffix = \"$'\"\n";
    str += "xname = \"${\" name \"}\"\n";
    str += "name = alpha *(alpha/digit/%d45/%d95)\n";
    str += "alpha = %d97-122 / %d65-90\n";
    str += "digit = %d48-57\n";
    str += "any-other = %x20-23 / %x25-FFFF / %xA-D\n";
    return str;
  }
}
