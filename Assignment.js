//https://github.com/biplob61/assignment.js
//Problem-1 kilometerToMeter
function kilometerToMeter(kilometer){
    let meter = kilometer*1000;
    if(kilometer>=1){             //varifying input as positive or not
        return meter;             // if positive return meter (converting value)
    } else{
        return false;             // if negative return false
    }
}

//Problem-2  budgetCalculator

function budgetCalculator(watch,mobile,laptop){
    if(watch>=1 && mobile>=1 && laptop>=1){   //varifying parameter as positive intiger
        priceOfWatch = 50*watch;
        priceOfMobile = 100*mobile;
        priceOfLaptop = 500*laptop;
        totalPrice = priceOfWatch+priceOfMobile+priceOfLaptop;   //calculateing the budget than return
        return totalPrice;
    } else{
        return false;          //if negative or anything else than return false
    }
}

//Problem3-hotelCost

function hotelCost(days){
    let cost =0;                //initial cost = 0
    if(days<=10){
        cost = days*100;
    } else if(days<=20){
        var first10Days= 10*100;  //calculating cost fisrt10Days 
        var remaingDays = days-10;
        var second10Days = remaingDays*80; //calculating cost between 10 and 20days 
        cost = first10Days + second10Days;  //updating cost for total 20 days
    } else{
        var first10Days = 10*100;
        var second10Days = 10*80;
        var remaingDays = days-20;
        var after20Days = remaingDays*50;    //calculating cost after 20 days 
        cost = first10Days + second10Days + after20Days; //updating cost again 
    }
    return cost;
}

//Problem4-megaFriend

function megaFriend(nameOfFriend){
    var largest =nameOfFriend[0];          // let index 0 is the largest of the array 
    for(var i=0; i<nameOfFriend.length; i++){ //repaet the loop according to the array's length
        var large = nameOfFriend[i];       //finding largest element
        if(large > largest){
            largest=large;        //assign the large element in to the largest
        }
    }
    return largest;
}