

// 1. ilometer To meter using javaScript

function kilometerToMeter (kilometers){
    var resultInMeter = kilometers*1000; //we know 1km = 1000m;
    return resultInMeter;
}

console.log(kilometerToMeter(50));  //checking functionality;




// 2. Budget Calculator using JavaScript

var totalBill = 0;
var watchUnitPrice = 50;
var phoneUnitPrice = 100;
var laptopUnitPrice = 500;
function budgetCalculator (watch,phone,laptop)    //three parameter;
{
        if( watch<0 || phone <0 || laptop <0)  // checking negative input value;
        {
            invalid= ("You have entered invalid quantity");
            return invalid;  // pass invalid message;
        }
    else 
    {
        totalWatchBill = watch*watchUnitPrice;
        totalPhoneBill = phone*phoneUnitPrice;
        totaLaptopBill = laptop*laptopUnitPrice;
        totalBill= totalWatchBill + totalPhoneBill + totaLaptopBill; // calculating total bill ;

        return totalBill; 
    }          
}
console.log(budgetCalculator(1,1,0));  //checking functionality;


// 3. Hotel Cost finding using javaScript

function hotelCost (day){

    if (day<0){
        var errorMessage = 'You have entered negative value';  //checking negative value;
        return errorMessage;
    }
    else {
        var cost = 0;   // initial cost zero;
        if (day<=10)
        {
        cost = day*100;  //only for 10 days;
        return cost;
        }
        else if (day<=20){
            var firs10Day = 10*100; 
            var restDay = day - 10;
            var restDayCost = restDay*80;
            var totalCost = firs10Day + restDayCost;  // cost for 10 days along with rest days but less than 20days;
            return totalCost;
        }

        else {
            var firstTenDays = 10*100;  // 1st 10days;
            var secondTenDays = 10*80;  // 2nd 10days;
            var remainingDays = day - 20;
            var remainingDaysCost = remainingDays*50;
            var finalCost = firstTenDays + secondTenDays + remainingDaysCost; // total bill ;
            return finalCost;
        }
    }
        
}

console.log(hotelCost(11));  //checking functionality;





// 4. megaFriend using JavaScrip

var nameSize = 0;  //intialization size
var largeName ;
  function megaFriend (friendList)
  {
    if (friendList.length === 0){
        var errorMsg = "You Friend List is Empty";  //check the array is empty or not;
        return errorMsg;
    }

else {
    for ( var i = 0; i < friendList.length; i++) // loop for traversing the array;
    {
        if (friendList[i].length>nameSize)   
        {
            nameSize = friendList[i].length;  //set nameSize;
            largeName= friendList[i];   // final name;
        }
    }

}
     return largeName;
  }

//   friendList=['Babu','Akkas Ali','Keramot Ali'];
//   var result = megaFriend(friendList);
//   console.log(result)

console.log(megaFriend(['Abdur','Rahmania']));  //checking functionality