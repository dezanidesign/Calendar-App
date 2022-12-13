$("#currentDay").append(moment().format('dddd'));


     nineAM = moment(09, 'HH');
     tenAM = moment(10, 'HH');
     elevenAM = moment(11, 'HH');
     twelveAM = moment(12, 'HH');
     oneAM = moment(13, 'HH');
     twoAM = moment(14, 'HH');
     threeAM = moment(15, 'HH');
     fourAM = moment(16, 'HH');
     fiveAM = moment(17, 'HH');

     nineAMF= (nineAM.format('hh:mm'));
     tenAMF= (tenAM.format('hh:mm'));
     elevenAMF= (elevenAM.format('hh:mm'));
     twelveAMF= (twelveAM.format('hh:mm'));
     oneAMF= (oneAM.format('hh:mm'));
     twoAMF= (twoAM.format('hh:mm'));
     threeAMF= (threeAM.format('hh:mm'));
     fourAMF= (fourAM.format('hh:mm'));
     fiveAMF= (fiveAM.format('hh:mm'));

var timeBlocks = [
    nineAM,
    tenAM,
    elevenAM,
    twelveAM,
    oneAM,
    twoAM,
    threeAM,
    fourAM,
    fiveAM
];

console.log(timeBlocks);

for (i = 0; i < timeBlocks.length; i++){
    if (nineAM < moment()){
        $('#block1').css('background-color', ' rgb(149, 55, 55');
    };

    if (tenAM < moment()){
        $('#block2').css('background-color', ' rgb(149, 55, 55');
    };

    if (elevenAM < moment()){
        $('#block3').css('background-color', ' rgb(149, 55, 55');
    };

    if (twelveAM < moment()){
        $('#block4').css('background-color', ' rgb(149, 55, 55');
    };

    if (oneAM < moment()){
        $('#block5').css('background-color', ' rgb(149, 55, 55');
    };

    if (twoAM < moment()){
        $('#block6').css('background-color', ' rgb(149, 55, 55');
    };

    if (threeAM < moment()){
        $('#block7').css('background-color', ' rgb(149, 55, 55');
    };

    if (fourAM < moment()){
        $('#block8').css('background-color', ' rgb(149, 55, 55');
    };

    if (fiveAM < moment()){
        $('#block9').css('background-color', ' rgb(149, 55, 55');
    };

    

}



//first block

 var blockTextOne = document.getElementById("blockText1");
 var btnInsertOne = document.getElementById("btnInsert1");
 var blockOneOutput = document.getElementById("block1Output");
 
 btnInsertOne.onclick = function(){
    var key = blockTextOne.value; //  This sets the item?
    console.log(key);
    localStorage.setItem("input1", key);
    var value = localStorage.getItem(key);



 }

var write = localStorage.getItem("input1");
blockTextOne.innerHTML += write;

//second block

var blockTextTwo = document.getElementById("blockText2");
var btnInsertTwo = document.getElementById("btnInsert2");
var blockTwoOutput = document.getElementById("block2Output");

btnInsertTwo.onclick = function(){
   var key = blockTextTwo.value; //  This sets the item?
   console.log(key);
   localStorage.setItem("input2", key);
   var value = localStorage.getItem(key);



}

var write = localStorage.getItem("input2");
blockTextTwo.innerHTML += write;


//Third block

var blockTextThree = document.getElementById("blockText3");
var btnInsertThree = document.getElementById("btnInsert3");
var blockThreeOutput = document.getElementById("block3Output");

btnInsertThree.onclick = function(){
   var key = blockTextThree.value; //  This sets the item?
   console.log(key);
   localStorage.setItem("input3", key);
   var value = localStorage.getItem(key);



}

var write = localStorage.getItem("input3");
blockTextThree.innerHTML += write;

//Four block

var blockTextFour = document.getElementById("blockText4");
var btnInsertFour = document.getElementById("btnInsert4");
var blockFourOutput = document.getElementById("block4Output");

btnInsertFour.onclick = function(){
   var key = blockTextFour.value; //  This sets the item?
   console.log(key);
   localStorage.setItem("input4", key);
   var value = localStorage.getItem(key);



}

var write = localStorage.getItem("input4");
blockTextFour.innerHTML += write;

//Five block

var blockTextFive = document.getElementById("blockText5");
var btnInsertFive = document.getElementById("btnInsert5");
var blockFiveOutput = document.getElementById("block5Output");

btnInsertFive.onclick = function(){
   var key = blockTextFive.value; //  This sets the item?
   console.log(key);
   localStorage.setItem("input5", key);
   var value = localStorage.getItem(key);



}

var write = localStorage.getItem("input5");
blockTextFive.innerHTML += write;

//Six block

var blockTextSix = document.getElementById("blockText6");
var btnInsertSix = document.getElementById("btnInsert6");
var blockSixOutput = document.getElementById("block6Output");

btnInsertSix.onclick = function(){
   var key = blockTextSix.value; //  This sets the item?
   console.log(key);
   localStorage.setItem("input6", key);
   var value = localStorage.getItem(key);



}

var write = localStorage.getItem("input6");
blockTextSix.innerHTML += write;

//Seven block

var blockTextSeven = document.getElementById("blockText7");
var btnInsertSeven = document.getElementById("btnInsert7");
var blockSevenOutput = document.getElementById("block7Output");

btnInsertSeven.onclick = function(){
   var key = blockTextSeven.value; //  This sets the item?
   console.log(key);
   localStorage.setItem("input7", key);
   var value = localStorage.getItem(key);



}

var write = localStorage.getItem("input7");
blockTextSeven.innerHTML += write;

//Eight block

var blockTextEight = document.getElementById("blockText8");
var btnInsertEight = document.getElementById("btnInsert8");
var blockEightOutput = document.getElementById("block8Output");

btnInsertEight.onclick = function(){
   var key = blockTextEight.value; //  This sets the item?
   console.log(key);
   localStorage.setItem("input8", key);
   var value = localStorage.getItem(key);



}

var write = localStorage.getItem("input8");
blockTextEight.innerHTML += write;

//Nine block

var blockTextNine = document.getElementById("blockText9");
var btnInsertNine = document.getElementById("btnInsert9");
var blockNineOutput = document.getElementById("block9Output");

btnInsertNine.onclick = function(){
   var key = blockTextNine.value; //  This sets the item?
   console.log(key);
   localStorage.setItem("input9", key);
   var value = localStorage.getItem(key);



}

var write = localStorage.getItem("input9");
blockTextNine.innerHTML += write;


