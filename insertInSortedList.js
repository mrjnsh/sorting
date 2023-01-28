function insertInSortedList(array, item){
          if(array[array.length - 1] < item){
                    return [...array, item]
          }
          if(array[0] > item){
                    return [item, ...array]
          }
          for(let i =0; i < array.length; i++){
                    if(array[i] > item){
                              //insert item befor array[i]
                              array.splice(i,0,item);
                              break;
                    }
          }
          return array;
}

module.exports={
          insertInSortedList
}