function solve(arr){

    let result = {};
    let keyToFind = arr[arr.length - 1];

    for(let i = 0; i < arr.length - 1; i ++){
        let splitted = arr[i].split(" ");
        let key = splitted[0];
        let value = splitted[1];
        result[key] = value;
    }
    if(result[keyToFind] === undefined){
        console.log("None")
    }else {
        console.log(result[keyToFind]);
    }
}