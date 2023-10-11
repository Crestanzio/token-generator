import { source } from "./source.js";
import { Tokens } from "./types.js";

//  String literals etc. can implement with regular expressions
interface TokenObject {
  type: string;
  value: string | RegExp;
  length?: number;
}

function lexer(input: string, ArrayOfTokens: TokenObject[]) {
  const tokens = [];
  const checked: string[] = [];

  // Custom Array.prototype.some, more faster.
  function isNotExist(char: string) {
    let counter = 0;

    if (!checked.includes(char)) {
      for (let token = 0, length = ArrayOfTokens.length; token < length; token++) {
        let currentValue = ArrayOfTokens[token].value;

        if (typeof currentValue === "string") {
          if (currentValue.includes(char)) {
            counter++;
            break;
          }
        } else if (currentValue.test(char)) {
          counter++;
        }
      }
      checked.push(char);
    } else {
      return;
    }

    return counter > 0 ? false : char !== undefined && char !== "\r" && true;
  }

  for (let cursor = 0, length = input.length; cursor < length; ) {
    let character = input[cursor];

    Tokens: for (let token = 0, length = ArrayOfTokens.length; token < length; token++) {
      let currentType = ArrayOfTokens[token].type,
        currentValue = ArrayOfTokens[token].value,
        currentLength = ArrayOfTokens[token].length;

      if (isNotExist(character)) throw new Error(`Unexpected token '${character}'`);

      if (typeof currentValue === "string") {
        let FCharMatch = currentValue.startsWith(character);

        if (FCharMatch && currentLength) {
          let expression = "",
            counter = 0;

          switch (true) {
            case currentLength === 1:
              character = input[++cursor];
              counter++;

              if (isNotExist(character)) throw new Error(`Unexpected token '${character}'`);

              if (character !== currentValue) {
                tokens.push({ type: currentType, value: currentValue });
                continue Tokens;
              }

            case currentLength > 1:
              for (counter; counter < currentLength; counter++) {
                if (isNotExist(character)) throw new Error(`Unexpected token '${character}'`);

                expression = expression.concat(character);
                character = input[++cursor];
              }
          }

          switch (true) {
            case currentValue === expression && currentType.includes("COMMENT"):
              tokens.push({ type: currentType, value: currentValue });
              while (character !== undefined && !/\n/.test(character)) {
                character = input[++cursor];
              }
              continue Tokens;
            case currentValue === expression:
              tokens.push({ type: currentType, value: currentValue });
              continue Tokens;
            default:
              character = input[(cursor -= counter)];
              continue Tokens;
          }
        } else if (FCharMatch) {
          let currentValueLength = currentValue.length,
            LCharIndex = currentValueLength - 1;
          for (let index = 0; index < currentValueLength; index++) {
            let lastIndex = index === LCharIndex,
              LCharMatch = currentValue.charAt(LCharIndex) === character;
            if (isNotExist(character)) throw new Error(`Unexpected token '${character}'`);

            switch (true) {
              case lastIndex && !LCharMatch:
                character = input[(cursor -= index)];
                continue Tokens;
              case lastIndex && LCharMatch:
                tokens.push({ type: currentType, value: currentValue });
            }
            character = input[++cursor];
          }
          continue Tokens;
        }
      } else if (character !== undefined && currentValue.test(character)) {
        let expression = "";

        while (character !== undefined && currentValue.test(character)) {
          if (isNotExist(character)) throw new Error(`Unexpected token '${character}'`);

          expression = expression.concat(character);
          character = input[++cursor];
        }

        tokens.push({
          type: currentType,
          value: currentType.includes("NUMERIC") ? parseFloat(expression) : expression,
        });
        continue Tokens;
      } else if (/\r/.test(character)) {
        character = character[++cursor];
        continue Tokens;
      }
    }
  }
  tokens.push({ type: "EOF" });
  return console.log(tokens);
}

console.time("Test");
lexer(source, Tokens);
console.timeEnd("Test");
