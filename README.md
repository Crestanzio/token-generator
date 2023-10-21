# Token genarator

 This is a smart and lightweight library written in typescript to simplify the way you write syntax tokens for a new programming language.
 
&nbsp;
# How to use this library

 First of all, the `lexer()` function accepts two parameters, `source` and `tokens`.

 The first parameter is the path for the source file and the second one is the types of the tokens.

 The `source` has to be a file with extension name and the type of `tokens` has to be an array of objects with the flags `type`, `value` and `length`.

 The flags `type`, `value` are required and the `length` is optional.

 The type `type` has to be string, `value` can be only string | RegExp and `length` has to be a type of number.

 The flag `length` is used for symbols or operators so library can be aware of how many numbers of tokens have to be proccessed and not be comfused with the same symbols.

 See an example to understand.
 
```typescript
   // Arithmetic operators
  { type: "DIV",                     value: "/",         length: 1 },
  
   // Comments
  { type: "SINGLE_LINE_COMMENT",     value: "//",        length: 2 },
```
  This way library knows if the next token is the same as the previous one and so the variable type will be `"SINGLE_LINE_COMMENT"` or else it will be `"DIV"`.

&nbsp;
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
&nbsp;

> [!WARNING]
> This library is not completed and it will not be maintained, it's just a personal experiment to evolve my programming knowledge.
