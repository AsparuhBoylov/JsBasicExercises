function product([num1, num2, num3]) {

    let negativeCounter = 0;

    if(num1 < 0){
        negativeCounter++;
    }
    if(num2 < 0){
        negativeCounter++;
    }
    if(num3 < 0){
        negativeCounter++;
    }
    if(num1 === 0 || num2 === 0 || num3 === 0){
        return "Positive";
    }
    if(negativeCounter === 0 || negativeCounter === 2){
        return "Positive";
    }else{
        return "Negative";
    }

}

