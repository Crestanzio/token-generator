# Token genarator 

 This a smart and lightweight library written in typescript, to simplify the way you write syntax tokens for a new programming language.

# How to use this library

 First of all the `lexer()` function accept to parameters, `source` and `tokens`.

 The first parameter, is the source file that function be aware of the tokens and the second one, is the types of the tokens.

 The `source` has to be an file with extension, and the type of `tokens` has to be an array of objects with the flags `type`, `value` and `length`.

 The flag `type`, `value` is required and the `length` is optional.

 The type `type` has to be string, `value` can be only string | RegExp, and `length` type of number.

 The flag `length` is used for symbols or operators, so library be aware how many numbers of tokens have to proccess, and not comfused with the same symbols.

 See an example to understand.
 
```typescript
   // Arithmetic operators
  { type: "DIV",                     value: "/",         length: 1 },
  
   // Comments
  { type: "SINGLE_LINE_COMMENT",     value: "//",        length: 2 },
```
  This way library can understand that if the next token is the same as previous then has to be a type `"SINGLE_LINE_COMMENT"` other way the token is type `"DIV"`.

 # Example of usage

 
 
 ```typescript
 const source = fs.readFileSync("style.lcss", "utf8");

const tokens = [
	// Keywords
	  { type: "KEYWORD",                 value: "function",            },
	  { type: "KEYWORD",                 value: "if",                  },
	  { type: "KEYWORD",                 value: "else",                },
	  { type: "KEYWORD",                 value: "while",               },
	
	// Identifiers
	  { type: "IDENTIFIER",              value: /[a-z]/i,              },

	// Arithmetic operators
	    { type: "PLUS",                    value: "+",         length: 1 },
	    { type: "DIV",                     value: "/",         length: 1 },
	    { type: "MINUS",                   value: "-",         length: 1 },
	    { type: "MULT",                    value: "*",         length: 1 },
	    { type: "MODULUS",                 value: "%",         length: 1 },
]

lexer(source, tokens);
```
<mark style="color:red">WARNING</mark>: This library is not complete and is not maintained, it's just a personal experiment to evolve my programming knowledge.
