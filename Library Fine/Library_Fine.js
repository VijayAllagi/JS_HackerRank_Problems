function processData(input) {
    //Enter your code here
    var datesArray = input.split("\n");
    console.log(findDiffernce(datesArray[1],datesArray[0]));
} 
function findDiffernce(d1,d2){
    d1Array = d1.split(" "); //Expected 
    d2Array = d2.split(" "); //Actual
    //Actual Year is greater
  if(d2Array[2] > d1Array[2]){
       
       return 10000*(d2Array[2]-d1Array[2]);       
    }
    //Actual year is smaller than 
    else if(d2Array[2] < d1Array[2]){
        return 0;
    }
    else {
        //Actual month is greater
        if ( (parseInt(d2Array[1])>parseInt(d1Array[1]))){
        return 500*(d2Array[1]-d1Array[1]); 
        }
         else if(d2Array[1] < d1Array[1]){
             return 0 ;
         }
        //Actual day is greater
         else if( d2Array[1]<=d1Array[1] && d2Array[0]>d1Array[0]){
            return 15*(d2Array[0]-d1Array[0]); 
        }
        //Actual day is greater or equal 
        else {
            return 0; 
        }
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
