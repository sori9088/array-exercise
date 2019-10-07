const inventors = [
    'Albert Einstein',
    'Issac Newton',
    'Galileo Galilei',
    'Marie Curie',
    'Johannes Kepler',
    'Nicolaus Copernicus',
    'Max Planck',
    'Katherine Blodgett',
    'Ada Lovelace',
    'Sarah E. Goode',
    'Lise Meitner',
    'Hanna Hammarstrom'
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];





// 11111111
let startswithA = inventors.filter((inventor)=>inventor.split('')[0]==='A')

console.log(startswithA)


// 2222222222
let containN = inventors.filter((inventor)=>inventor.includes('n')===true)

console.log(containN)


// 333333
let sameletter = inventors.filter((inventor)=>{
    let isRepeated = false;
    const chars = inventor.split('')
    chars.map((char,i)=>{
        if(char===chars[i+1]){
            isRepeated = true;
        } 
    })
    return isRepeated
})
    console.log(sameletter)


//4444444
let isOdd = numbers.filter((numbers)=> numbers%2==1)
console.log(isOdd)


//555555
let twodigit = numbers.filter((numbers)=>numbers/10>=1)
console.log(twodigit)

///66666
let prime = numbers.filter((numbers)=> {
    let isPrimeNumber = true;
    for(let i=2;i<numbers;i++){
        if(numbers % i === 0 ){
            isPrimeNumber = false;
        }
}
return isPrimeNumber
})
console.log(prime)


////77777
var firstname = inventors.map(inventors=>inventors.split(' ')[0])
console.log(firstname)


////88888
let length = inventors.map(inventors=> inventors.split('').length)
console.log(length)


////999999
let uppercase = inventors.map(inventors =>inventors.toUpperCase())
console.log(uppercase)


////10101010101010
let initial = inventors.map(inventors=>{
    chars=inventors.split(' ')
    return chars[0][0]+'.'+chars[1][0]
})
console.log(initial)


////11
let multiple = numbers.map(numbers=>numbers*100)
console.log(multiple)


////1212121212
let powersoftwo = numbers.map(numbers=>numbers*numbers)
console.log(powersoftwo)


//13131313131313
let alphabeticals = inventors.sort();
console.log(alphabeticals)


//141414141414 *******************
let reverse = inventors.sort((a,b)=> {
    if(a<b) return 1;
    else if(b<a) return -1;
    else return 0;
}) 
console.log(reverse)


// 15151515
let shortest = inventors.sort((a,b)=>{
    if(a.length < b.length) return -1;
    else if (a.length > b.length) return 1;
    else return 0;
})
console.log(shortest)

// 16161616
let longest = inventors.sort((a,b)=>{
    if(a.length < b.length) return 1;
    else if(a.length > b.length) return -1;
    else return 0;
})
console.log(longest)

//17171717
let sum = numbers.reduce((sum,number)=>sum + number)
console.log(sum)

//1818181818
let evensum = numbers.reduce((sum,number)=>{
    if(number % 2 == 0){
        return sum + number
    } else return sum
},0)
console.log(evensum)

//1919191919
let lettery = inventors.some((inventor) =>inventor.includes('y'))
console.log(lettery)


//20202020
let lettere = inventors.every((inventor)=>inventor.includes('e'))
console.log(lettere)


//21212121
let longerfirstname = inventors.every((inventor)=>inventor.split(' ')[0].length>4)
console.log(longerfirstname)


//22222222222
let middlename = inventors.find((inventor)=> inventor.split(' ').length > 2 )
console.log(middlename)

//bonus
let newarr = inventors.filter((inventor)=>{
    if(inventor!=middlename) return inventor
   
})
console.log(newarr)