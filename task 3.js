var arr = [2,22,11,14,30,93,112,3,27,81];
function checkDivisibility(){
    for (let i = 0; i<arr.length;i++){
        if(arr[i]%3==0){
            console.log(arr[i]);
        }
    }
   
    
}
checkDivisibility();