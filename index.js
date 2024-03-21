//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]

let arr1 = [3,7,34,90,12];
console.log('last item:', arr1[arr1.length-1]);

let arr2 = [true, 'green','where',12 ,56];
console.log('last item:',arr2[arr2.length-1]);

//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let array1 =['Cow','Bird'];
let array2 = ['Snake','Dog'];
let myPets =array1.concat(array2);

console.log({myPets});

//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
 arr3.sort();
 console.log({arr3});

//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates et arr = ["boy", "man", "girl",            "school", "girl", "woman"];
let arr = ["boy", "man", "girl",            "school", "girl", "woman"];

function removeDuplicates(elements){
    let unique =[];
    elements.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates(arr));
//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the","way","x","4"];
let text = "way";
let textIndex = arr5.indexOf(text);
if(text==arr5["way"]){
    console.log({text})
}
else{
    console.log("the search was not found");
}

  //Write a JS script to sort the following string:let word = "renniw"
  let word = 'renniw';
let newSort= word.split("")
                .sort()
                .join("")
;
console.log({newSort});

//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
let fruits =['Apple','Mango','Avocado','Pineapple','Strawberry','Pears','Banana','Orange','Kiwi','Guava'];
fruits[5]="Tomato";
console.log(fruits);
