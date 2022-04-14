const str = `
010-1234-5678
thegon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick prown fox jumps over the lazy dog.
abbcccdddd
`

//const regexp = new RegExp('the','gi')
const regexp = /the/gi
console.log(str.match(regexp))