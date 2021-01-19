








var array = [];

$(".original").click(function() {
var inputValue = $(".inputName").val();  
array.push(inputValue);
$(".inputName").val("");  
   
   
  var sum = 0;

for (var i = 0; i < array.length; i++){
       
       console.log(i);
   
    sum =  sum + (array[i]/array.length);
    console.log(sum);
   
}

   
$(".buttontwo").click(function (){  
 if (sum < 55) {
    sum = "F";
} else if (sum >= 55 && sum < 65) {
    sum = "D";
} else if (sum >= 65 && sum < 75) {
    sum = "C";
} else if (sum >= 75 && sum < 85) {
    sum = "B";
} else if (sum >= 85 && sum <=100) {
    sum = "A";
}  
   
$(".average").text(sum);
 
});
});
 
 


 

