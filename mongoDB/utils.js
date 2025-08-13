//This regex pattern validates email addresses. Let me break it down:
// ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$
// ^ - Start of string anchor
// [a-zA-Z0-9._%+-]+ - Local part (before @):
// Letters (a-z, A-Z), digits (0-9), and special chars (. _ % + -)
// + means one or more characters
// @ - Literal @ symbol (required)
// [a-zA-Z0-9.-]+ - Domain name:
// Letters, digits, dots, and hyphens
// + means one or more characters
// \\. - Literal dot (escaped with \)
// [a-zA-Z]{2,} - Top-level domain:
// Only letters
// {2,} means 2 or more characters (like .com, .org, .info)
// $ - End of string anchor
// Valid examples:
// user@example.com
// test.email+tag@domain.co.uk
// user123@sub-domain.org