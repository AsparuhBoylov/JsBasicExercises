function solve(arr){
    for  (let line of arr ){
        let splitted = line.split(" -> ")
        let name = splitted[0];
        let age = splitted[1];
        let grade = splitted[2];

        let obj = {
            Name:name,
            Age:age,
            Grade:grade,
        };
        for(let key in obj){
            console.log(key + ": " + obj[key]);
        }
    }
}