const arr = [1,2,3,4,5];

function mainFlow (arrF){
    let arrAfterCopy = copyArr(arrF);
    let arrAfterMix = mix(arrAfterCopy);

}


function copyArr (arrayForCopy){
    let copyOfArr = [...arrayForCopy];
    return copyOfArr;
};


function mix (arrForMix) {
    for (let i = arrForMix.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrForMix[i], arrForMix[j]] = [arrForMix[j], arrForMix[i]];
    }
    return arrForMix;
}

function compareElemOfArr (arrOrig, arrMix){
    for (let i=0;i<arrOrig.length;i++){

    }

}

function shiftEll (arrShif){
   let copyArr(arrShif);
   let shifted = arrShif.shift();

}

mainFlow(arr);