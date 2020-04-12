/*---------------------------------------------------------------------
|  Author: Anthony Cuomo
|
| Purpose:  This is the selector of the DNA code that will be
|              replicated
|
| Pre-condition:  Random trait that will be selected from an array
|                     This will create a unique DNA structure
|
| Post-condition: Unique DNA structure created
|
*-------------------------------------------------------------------*/

//DNA Pool
var DNA_pool_one = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
var DNA_pool_two = [4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1];
var DNA_pool_three = [3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4];

var selected_DNA = []

//this chooses a random number in an array...
//need to change this to make it actually select numbers not randomly

var randomNum = (array) => {

    console.log("length of DNA string: " + array.length);

    for (var i = 0; i < array.length; i++) {

        selected_DNA.push(array[Math.floor(Math.random() * array.length)])

    }


}

//counts the number of occourences of each number and logs it at the end of the method

var countOcc = (array) => {
    var count_one = 0;
    var count_two = 0;
    var count_three = 0;
    var count_four = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            count_one++;
        }
        if (array[i] === 2) {
            count_two++;
        }
        if (array[i] === 3) {
            count_three++;
        }
        if (array[i] === 4) {
            count_four++;
        }
    }

    var total = count_one + count_two + count_three + count_four;

    console.log("Number of ones: " + count_one);
    console.log("Number of twos: " + count_two);
    console.log("Number of Threes: " + count_three);
    console.log("number of fours: " + count_four);

    //check to make susre verything was counted
    console.log("Total length is " + total + " / " + array.length);
}

var main = () => {

    // get random nums as DNA

    randomNum(DNA_pool_one);
    console.log("after first pass: " + selected_DNA);
    randomNum(DNA_pool_two);
    console.log("after second pass: " + selected_DNA);
    randomNum(DNA_pool_three);


    //get full DNA string
    console.log("final: " + selected_DNA.toString());
    console.log(selected_DNA.length);


    countOcc(selected_DNA);

}

//heartbeat of main method
var heartbeat = setInterval(main, 5000); //tick every 5 seconds 

