function cleanStr(str){
    return str.trim().replace(/  +/g, ' ');
}
export function wordsCount(words) {
    return cleanStr(words).split(' ')
}

/*
- внутри модуля могут быть вспомогательные перемнные и функции
    - функции wordsCount и getWords производят предобработку строки, удаляя лишнии 
      пробелы слева и справа, а также приводя множественные пробелы к одному
    - функция getWords реализуется с помощью генератора, либо вручную, решать вам
      в любом случае она должна подставить в for of
      
for(let some of getWords(str)){
    this.console.log(some);         // выводит 4 слова
}
*/

export function *getWords (str) {
   let word =  wordsCount(str)
   for (let i = 0; i < word.length; i++) {
        yield word[i]    
   }
}
