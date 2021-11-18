import {NumberManipulationService, StringManipulationService} from "./main-service"

class StringManipulation implements StringManipulationService
{
    public print(word:string)
    {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word[2]);
        var concat = word+" world";
        console.log(concat);
        var slice = concat.split(" ",2);
        return word.length;
    }
    public printWithSpace(sentence:string)
    {
        var space = sentence.split("",100);
        return space;
    }
    public findVowel(str:string)
    {
        let vowels = /[aeiou]/gi;
        let result = str.match(vowels);
        let count = result.length;
        console.log(count);
    }
}
class NumberManipulations implements NumberManipulationService {
    public findPrime(num:number)
    {
        if(num < 2) 
        {
            console.log("Not a Prime");   
        }
        for (let i = 2; i < num; i++)
        {
            if( num % i == 0)
            {
                console.log("Not a Prime");
                break;
            }
        }
        console.log("Prime");
    }
    public findMagic(num:number)
    {
            let sum = 0;
            let n = num;
            while (n > 9) {
                while (n > 0) {
                    sum += n % 10;
                    n = Math.floor(n / 10);
                }
                n = sum;
                sum = 0;
    
            }
            console.log(n === 1 ? `So ${num} is a magic number` : `${num} is  not a magic number`)
    }
}
let str1: string;
str1="hello";
let num1: number;
num1=23;
let str_manipulation = new StringManipulation();
let num_manipulation = new NumberManipulations();
str_manipulation.print(str1);
str_manipulation.printWithSpace(str1);
str_manipulation.findVowel(str1);
num_manipulation.findPrime(num1);
num_manipulation.findMagic(num1);