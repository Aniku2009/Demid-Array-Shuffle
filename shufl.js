const arr = [1,2,3,4,5];

function mainFlow (arrF){
    let arrAfterCopy = copyArr(arrF);
     // arrAfterCopy.push(10);
    let arrAfterMix = mix(arrAfterCopy);
    let arrAfterCompare = compareElemOfArr(arrAfterCopy, arrAfterMix);
    console.log(arrAfterCompare);
}


function copyArr (arrayForCopy){
    let copyOfArr = arrayForCopy.slice();
    return copyOfArr;
};


function mix (arrForMix) {
    let mixs = copyArr(arrForMix);
    for (let i = mixs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mixs[i], mixs[j]] = [mixs[j], mixs[i]];
    }
    return mixs;
}

function compareElemOfArr (arrOrig, arrMix){
    for (let i=0;i<arrOrig.length;i++){
        if (arrOrig[i]===arrMix[i]){
            shiftEll(arrMix);
        }
    }
return arrMix;
}

function shiftEll (arrShif){
   let copy = copyArr(arrShif);
   let shifted = copy.shift();
return copy.push(shifted);
}

mainFlow(arr);