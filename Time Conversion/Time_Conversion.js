function processData(input) {
    //Enter your code here
    var arrayA = input.split(":");
    var h = arrayA[0];
    var m = arrayA[1];
    var s = arrayA[2].substring(0,2);
    var ampm = arrayA[2].substring(2);
    if(ampm == 'PM' && h !=12) { 
        console.log( (parseInt(h)+12).toString()+ ":" +m.toString()+ ":"  +s.toString() );  
    }
    else if(ampm =='PM' && h==12){
        console.log( h+ ":" +m.toString()+ ":"  +s.toString() );  
    }
    else {
        if(h==12){
            h='00';
        }
        console.log( h+ ":" +m+ ":"  +s );  
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
