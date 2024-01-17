document.write("85. to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two."+"<br>");
function test85(arr){
    var x=[0,0];
    for(let i=0;i<arr.length;i++){
        if(i%2){
            x[1]=x[1]+arr[i];
        }
        else{
            x[0]=x[0]+arr[i];
        }    
    }
    return x;
}
document.write("The array :[1,3,6,2,5,10] , ans :"+test85([1, 3, 6, 2, 5, 10])+"<br><br>");