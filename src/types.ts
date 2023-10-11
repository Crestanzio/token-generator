//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                      //
//                                                                                                                                      //
//                                                                                                                                      //
//                                                              CONSTANTS                                                               //
//                                                                                                                                      //
//                                                                                                                                      //
//                                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Tokens = [

  // Keywords
  { type: "KEYWORD",                 value: "function",            },
  { type: "KEYWORD",                 value: "if",                  },
  { type: "KEYWORD",                 value: "else",                },
  { type: "KEYWORD",                 value: "while",               },
  
  // Identifiers
  { type: "IDENTIFIER",              value: /[a-z]/i,              },
  
  // Variable declarations
  { type: "VARIABLE",                value: /\${\w+}/,             },
  
  // Literals
  { type: "SINGLE_STRING_LITERAL",   value: "'",                   },
  { type: "DOUBLE_STRING_LITERAL",   value: '"',                   },
  { type: "BACKTICK_STRING_LITERAL", value: "`",                   },
  { type: "NUMERIC_LITERAL",         value: /\d/,                  },
  
  // Arithmetic operators
  { type: "PLUS",                    value: "+",         length: 1 },
  { type: "DIV",                     value: "/",         length: 1 },
  { type: "MINUS",                   value: "-",         length: 1 },
  { type: "MULT",                    value: "*",         length: 1 },
  { type: "MODULUS",                 value: "%",         length: 1 },
  
  // Assignment operators
  { type: "ASSIGNMENT",              value: "=",         length: 1 },
  
  // Comparison operators
  { type: "EQUALS",                  value: "==",        length: 2 },
  { type: "NOT_EQUALS",              value: "!==",       length: 3 },
  { type: "GREATER",                 value: ">",         length: 1 },
  { type: "LESS",                    value: "<",         length: 1 },
  { type: "GREATER_OR_EQUALS",       value: ">=",        length: 2 },
  { type: "LESS_OR_EQUALS",          value: "<=",        length: 2 },

  // Logical operators
  { type: "AND",                     value: "&&",        length: 2 },
  { type: "OR",                      value: "||",        length: 2 },
  { type: "NOT",                     value: "!",         length: 1 },

  // Iterate operators
  { type: "SPREAD",                  value: "...",       length: 3 },
  
  // Comments
  { type: "SINGLE_LINE_COMMENT",     value: "//",        length: 2 },

  // Separators
  { type: "WHITESPACE",              value: " ",                   },
  { type: "NEW_LINE",                value: "\n",                  },
  { type: "SEMICOLON",               value: ";",                   },
  { type: "COMMA",                   value: ",",                   },

  // Punctuators
  { type: "OPEN_PARENTHESIS",        value: "(",                   },
  { type: "CLOSE_PARENTHESIS",       value: ")",                   },
  { type: "OPEN_CURLY_BRACKET",      value: "{",                   },
  { type: "CLOSE_CURLY_BRACKET",     value: "}",                   },
  { type: "OPEN_SQUARE_BRACKET",     value: "[",                   },
  { type: "CLOSE_SQUARE_BRACKET",    value: "]",                   },
  
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                      //
//                                                                                                                                      //
//                                                                                                                                      //
//                                                             TOKEN TYPES                                                              //
//                                                                                                                                      //
//                                                                                                                                      //
//                                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Keywords
export type IF                      = { type: "KEYWORD",                 value: string,         };

// Identifiers
export type IDENTIFIER              = { type: "IDENTIFIER",              value: string | RegExp };

// Variable declarations
export type VARIABLE                = { type: "VARIABLE",                value: string | RegExp }; 

// Literals
export type SINGLE_STRING_LITERAL   = { type: "SINGLE_STRING_LITERAL",   value: string,         };
export type DOUBLE_STRING_LITERAL   = { type: "DOUBLE_STRING_LITERAL",   value: string,         };
export type BACKTICK_STRING_LITERAL = { type: "BACKTICK_STRING_LITERAL", value: string,         };
export type NUMERIC_LITERAL         = { type: "NUMERIC_LITERAL",         value: number | RegExp };

// Arithmetic operators
export type PLUS                    = { type: "PLUS",                    value: string,         };
export type MINUS                   = { type: "MINUS",                   value: string,         };
export type MULT                    = { type: "MULT",                    value: string,         };
export type DIV                     = { type: "DIV",                     value: string,         };
export type MODULUS                 = { type: "MODULUS",                 value: string,         };

// Assignment operators
export type ASSIGNMENT              = { type: "ASSIGNMENT",              value: string,         };

// Comparison operators
export type EQUALS                  = { type: "EQUALS_TO",               value: string,         };
export type NOT_EQUALS              = { type: "NOT_EQUALS_TO",           value: string,         };
export type GREATER                 = { type: "GREATER_THAN",            value: string,         };
export type LESS                    = { type: "LESS_THAN",               value: string,         };
export type GREATER_OR_EQUALS       = { type: "GREATER_OR_EQUALS_TO",    value: string,         };
export type LESS_OR_EQUALS          = { type: "LESS_OR_EQUALS_TO",       value: string,         };

// Logical operators
export type AND                     = { type: "LOGICAL_AND",             value: string,         };
export type OR                      = { type: "LOGICAL_OR",              value: string,         };
export type NOT                     = { type: "LOGICAL_NOT",             value: string,         };

// Iterate operators
export type SPREAD                  = { type: "SPREAD_OPERATOR",         value: string,         };

// Comments
export type SINGLE_LINE_COMMENT     = { type: "SINGLE_LINE_COMMENT",     value: string,         };

// Separators
export type SEMICOLON               = { type: "SEMICOLON",               value: string,         };
export type COMMA                   = { type: "COMMA",                   value: string,         };
export type WHITESPACE              = { type: "WHITESPACE",              value: string | RegExp };
export type NEW_LINE                = { type: "NEW_LINE",                value: string | RegExp };

// Punctuators
export type OPEN_PARENTHESIS        = { type: "OPEN_PARENTHESIS",        value: string,         };
export type CLOSE_PARENTHESIS       = { type: "CLOSE_PARENTHESIS",       value: string,         };
export type OPEN_CURLY_BRACKET      = { type: "OPEN_CURLY_BRACKET",      value: string,         };
export type CLOSE_CURLY_BRACKET     = { type: "CLOSE_CURLY_BRACKET",     value: string,         };
export type OPEN_SQUARE_BRACKET     = { type: "OPEN_SQUARE_BRACKET",     value: string,         };
export type CLOSE_SQUARE_BRACKET    = { type: "CLOSE_SQUARE_BRACKET",    value: string,         };

export type Token =
  // ----------------------------
  //  Keywords
  // ----------------------------
  | IF
  // ----------------------------
  //  Identifiers
  // ----------------------------
  | IDENTIFIER
  // ----------------------------
  //  Variable declarations
  // ----------------------------
  | VARIABLE
  // ----------------------------
  //  Literals
  // ----------------------------
  | SINGLE_STRING_LITERAL
  | DOUBLE_STRING_LITERAL
  | BACKTICK_STRING_LITERAL
  | NUMERIC_LITERAL
  // ----------------------------
  //  Arithmetic operators
  // ----------------------------
  | PLUS
  | MINUS
  | MULT
  | DIV
  | MODULUS
  // ----------------------------
  //  Assignment operators
  // ----------------------------
  | ASSIGNMENT
  // ----------------------------
  //  Comparison Operators
  // ----------------------------
  | EQUALS
  | NOT_EQUALS
  | GREATER
  | LESS
  | GREATER_OR_EQUALS
  | LESS_OR_EQUALS
  // ----------------------------
  //  Logical Operators
  // ----------------------------
  | AND
  | OR
  | NOT
  // ----------------------------
  //  Iterate operators
  // ----------------------------
  | SPREAD
  // ----------------------------
  //  Comments
  // ----------------------------
  | SINGLE_LINE_COMMENT
  // ----------------------------
  //  Separators
  // ----------------------------
  | SEMICOLON
  | COMMA
  | WHITESPACE
  | NEW_LINE
  // ----------------------------
  //  Punctuators
  // ----------------------------
  | OPEN_PARENTHESIS
  | CLOSE_PARENTHESIS
  | OPEN_CURLY_BRACKET
  | CLOSE_CURLY_BRACKET
  | OPEN_SQUARE_BRACKET
  | CLOSE_SQUARE_BRACKET;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                      //
//                                                                                                                                      //
//                                                                                                                                      //
//                                                           EXPRESSION TYPES                                                           //
//                                                                                                                                      //
//                                                                                                                                      //
//                                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type ARITHMETIC_OPERATOR = PLUS | MINUS | MULT | DIV;
export type COMPARISON_OPERATOR = EQUALS | NOT_EQUALS | GREATER | LESS | GREATER_OR_EQUALS | LESS_OR_EQUALS;
export type LOGICAL_OPERATOR    = AND | OR | NOT;
export type OPERATOR            = ARITHMETIC_OPERATOR | COMPARISON_OPERATOR | LOGICAL_OPERATOR

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                      //
//                                                                                                                                      //
//                                                                                                                                      //
//                                                              NOBE TYPES                                                              //
//                                                                                                                                      //
//                                                                                                                                      //
//                                                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type NUMERIC_LITERAL_NODE  = { type: 'NUMERIC_LITERAL',  value: NUMERIC_LITERAL                      }
export type CALL_EXPRESSION_NODE  = { type: 'CALL_EXPRESSION',  identifier: IDENTIFIER, argument: Node      }
export type BINARY_EXRESSION_NODE = { type: 'BINARY_EXRESSION', left: Node, right: Node, operator: OPERATOR }

export type Node =
  | NUMERIC_LITERAL_NODE
  | CALL_EXPRESSION_NODE
  | BINARY_EXRESSION_NODE

export type Program = {
  body: Node[]
}