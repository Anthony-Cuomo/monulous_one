/*---------------------------------------------------------------------
|  Author: Anthony Cuomo
|  Biology Assistant: Monica Mendiburu         
|
|  Purpose:  The purpose of this is to make the original code of the
|               DNA. The program will replicate DNA like code to solve
|               a simple problem like [insert problem here]
|
|  Pre-condition:  The Precondition is to create a Male array and
|                    Female array. The arrays will then be matched up
|                    to then run through a process similar to mitosis
|
|  Post-condition: The two arrays come together to create a chomosomes 
|                    and a cell like structure to then be replicated 
|                    as cells
|
*-------------------------------------------------------------------*/

//variables to create structure of male and female chromosomes
var male = {
    chromo_0: [0, 0, 0, 0],
    chromo_1: [1, 1, 1, 1]
};
var female = {
    chromo_0: [1, 1, 1, 1],
    chromo_1: [1, 1, 1, 1]
}

//object to hold different chromosomes together
var cell = {
    chromosome_0: [],
    chromosome_1: []
};

/*

This create the zygote by bringing the two male and female objects together

*/
var zygote = (mc0, mc1, fc0, fc1) => {

    for (var i = 0; i < 4; i++) {
        cell.chromosome_0.push(mc0[i]);
        cell.chromosome_1.push(mc1[i]);
        cell.chromosome_0.push(fc0[i]);
        cell.chromosome_1.push(fc1[i]);
    }

}

/* 
    cell replication 
     - here the cells will replicate naturally within certain constraints
     - starting with zeros and ones can move to more difficult processes later

*/

var cell_rep = () => {


}

zygote(male.chromo_0, male.chromo_1, female.chromo_0, female.chromo_1);

console.log(cell);

