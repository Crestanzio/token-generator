export const Tokens = [
    { type: "KEYWORD", value: "function", },
    { type: "KEYWORD", value: "if", },
    { type: "KEYWORD", value: "else", },
    { type: "KEYWORD", value: "while", },
    { type: "IDENTIFIER", value: /[a-z]/i, },
    { type: "VARIABLE", value: /\${\w+}/, },
    { type: "SINGLE_STRING_LITERAL", value: "'", },
    { type: "DOUBLE_STRING_LITERAL", value: '"', },
    { type: "BACKTICK_STRING_LITERAL", value: "`", },
    { type: "NUMERIC_LITERAL", value: /\d/, },
    { type: "PLUS", value: "+", length: 1 },
    { type: "DIV", value: "/", length: 1 },
    { type: "MINUS", value: "-", length: 1 },
    { type: "MULT", value: "*", length: 1 },
    { type: "MODULUS", value: "%", length: 1 },
    { type: "ASSIGNMENT", value: "=", length: 1 },
    { type: "EQUALS", value: "==", length: 2 },
    { type: "NOT_EQUALS", value: "!==", length: 3 },
    { type: "GREATER", value: ">", length: 1 },
    { type: "LESS", value: "<", length: 1 },
    { type: "GREATER_OR_EQUALS", value: ">=", length: 2 },
    { type: "LESS_OR_EQUALS", value: "<=", length: 2 },
    { type: "AND", value: "&&", length: 2 },
    { type: "OR", value: "||", length: 2 },
    { type: "NOT", value: "!", length: 1 },
    { type: "SPREAD", value: "...", length: 3 },
    { type: "SINGLE_LINE_COMMENT", value: "//", length: 2 },
    { type: "WHITESPACE", value: " ", },
    { type: "NEW_LINE", value: "\n", },
    { type: "SEMICOLON", value: ";", },
    { type: "COMMA", value: ",", },
    { type: "OPEN_PARENTHESIS", value: "(", },
    { type: "CLOSE_PARENTHESIS", value: ")", },
    { type: "OPEN_CURLY_BRACKET", value: "{", },
    { type: "CLOSE_CURLY_BRACKET", value: "}", },
    { type: "OPEN_SQUARE_BRACKET", value: "[", },
    { type: "CLOSE_SQUARE_BRACKET", value: "]", },
];