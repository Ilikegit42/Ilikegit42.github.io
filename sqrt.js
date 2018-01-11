function calcSqrt(num){
    var s = Math.sqrt(num)
    var count = 0;
    var res = "";

    for(var i = 2 ; i<=num ; i++){
        for(count = 0; num % i == 0 ; count++){
            num /=i;
        }
        if(count > 0){
            res += i + "^" + count + "\n";
        }
    }

    return res + "\nRadical este... " + s;
}
