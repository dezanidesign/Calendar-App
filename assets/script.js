$("#currentDay").append(moment().format('dddd'));



// var timeBlocksAppend =  [{
//     block1: $('#block1').append(' <textarea id="blockText" name="blockText" rows="4" cols="50"> '),
//     block2: $('#block2').append(' <textarea id="blockText" name="blockText" rows="4" cols="50"> '),
//     block3: $('#block3').append(' <textarea id="blockText" name="blockText" rows="4" cols="50"> '),
//     block4: $('#block4').append(' <textarea id="blockText" name="blockText" rows="4" cols="50"> '),
//     block5: $('#block5').append(' <textarea id="blockText" name="blockText" rows="4" cols="50"> '),
//     block6: $('#block6').append(' <textarea id="blockText" name="blockText" rows="4" cols="50"> '),
//     block7: $('#block7').append(' <textarea id="blockText" name="blockText" rows="4" cols="50"> '),
//     block8: $('#block8').append(' <textarea id="blockText" name="blockText" rows="4" cols="50"> '),
//     block9: $('#block9').append(' <textarea id="blockText" name="blockText" rows="4" cols="50"> '),
//     block9: $('#block9').append( moment().format('h:mm:ss a') ),

// }]

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

// You just need to figure out a way to change the colour of blocks without using #block1 #block2 etc  


// function testFunction () {
//     if (timeBlocks[i] < moment()){
//         $('#block1').css('background-color', ' rgb(149, 55, 55');
//     }
// }

// testFunction();

 var blockTextOne = document.getElementById("blockText1");
 var btnInsert = document.getElementById("btnInsert");
 var blockOneOutput = document.getElementById("block1Output");
 
 btnInsert.onclick = function(){
    var key = blockTextOne.value; //  This sets the item?
    console.log(key);
    localStorage.setItem("input1", key);
    var value = localStorage.getItem(key);

blockOneOutput.innerHTML += key;

 }

var write = localStorage.getItem("input1");
blockTextOne.innerHTML += write;

