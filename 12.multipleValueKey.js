function solve(arr){

    let result = {};
    let keyTofind =  arr[arr.length - 1];

    for(let i = 0; i < arr.length  -1; i ++){
        let splitted = arr[i].split(" ");
        let key = splitted[0];
        let value = splitted[1];
        if (result[key] === undefined) {
            result[key] = [];
            result[key].push(value);
        }else{
            result[key].push(value);
        }
    }
    if(result[keyTofind] === undefined){
        console.log("None");
    }else{
        let values = result[keyTofind];

        for(let value of values){
            console.log(value);
        }
    }
}

solve(["key value","key eulav","test tset","key"]);