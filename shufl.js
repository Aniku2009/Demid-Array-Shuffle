const arr = [1,2,3,4,5];

function mainFlow (arrF){
    let arrAfterCopy = copyArr(arrF);
    let arrAfterMix = mix(arrAfterCopy);
    let arrAfterCompare = compareElemOfArr(arrAfterCopy, arrAfterMix);
    for (let i=0;i<arrAfterCompare.length;i++){
        console.log(arrAfterCompare[i]);
        }
alert('Original array - '+ arrF+'   Mixed array - '+ arrAfterMix+'    Arr after compare - '+arrAfterCompare);
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
    // let j=false;
    // do{
        for (let i=0;i<arrOrig.length;i++){
            if (arrOrig[i]==arrMix[i]){
                let d = shiftEll(arrMix);
                arrMix = [...d];
                i=0;
               //  continue;
            }
        }

    // }
    // while (j=true);
    return arrMix;
}

function shiftEll (arrShif){
    let copy = copyArr(arrShif);
    let shifted = copy.shift();
    let d =  [...copy, shifted];
    return d;
}

mainFlow(arr)