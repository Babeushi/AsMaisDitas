const fs = require('fs')
let obj = {}
const txt = fs.readFileSync('biblia.txt', 'utf-8', (resp) => {
    return resp
})

const biblia = txt.toLowerCase().replace(/([^a-zA-Z ]+)|(r\n|\n|\r)|(\W*\b\w{1,2}\b)/g, ' ').split(/\W+/).filter(name => name)

let bibleCount = biblia.reduce((allWords, words)=>{
    if(words in allWords){
        allWords[words]++
    }else{
        allWords[words] = 1
    }
    
    return allWords
}, {})

Object.keys(bibleCount).sort((a, b) => bibleCount[b] - bibleCount[a]).map(key => obj[key] = bibleCount[key])

const final10 = Object.keys(obj).slice(0, 10).map(key => ({[key]:obj[key]}))

let finalName = final10.map(x => Object.getOwnPropertyNames(x)).flat();
let finalNum = final10.map(x => Object.values(x)).flat();

module.exports = {finalName, finalNum}