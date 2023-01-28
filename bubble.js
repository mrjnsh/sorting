const {comparator} = require('./comparator')
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if(comparator(arr[i],arr[j])){
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

module.exports = {
    bubbleSort
};
