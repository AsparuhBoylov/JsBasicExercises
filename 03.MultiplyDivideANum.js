function multiplyDivNum(arr) {

    let n = Number(arr[0]);
    let x = Number(arr[1]);

    if (x >= n){
        let result = n * x;

        console.log(result);
    }
    else if(n > x){
       let result = n / x;

        console.log(result);
    }
}

