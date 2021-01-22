

function kilometerToMeter(distance)
{
    if(typeof(distance)!="number")
    {
        return "enter correct distance"; //show error message if user give string as a input

    }
    else{

    

        if(distance<0)
        {
            return "distance can not be negative"; //show error message if user give negative number as input
        }
        else{
            return distance*1000;
        }

    }

}


function  budgetCalculator(number_of_watch,number_of_mobile,number_of_laptop)
{
    if(typeof(number_of_watch)!='number' || typeof(number_of_mobile)!='number' ||typeof(number_of_laptop)!='number')
    {
        return "enter number correctly";

    }

    else{
        
            if(number_of_watch<0 || number_of_mobile<0 ||number_of_laptop<0)
            {
                return "number can not be negative";
            }
            else{
                return number_of_watch*50+number_of_mobile*100+number_of_laptop*500;
            }
    }

    
}

function hotelCost(number_of_days)
{
    if(number_of_days<0)
    {
        return "number of days can not be negative";
    }
    else if(number_of_days>20)
    {
        //this else if work when number of days is more than 20
        var value=number_of_days-20; 
        return 10*100+10*80+value*50; 
    }
    else if(number_of_days>10 && number_of_days<=20)
    {
        //this else if work when number of days is more than 10 and less than or equal 20
        var value=number_of_days-10;
        return 10*100+value*80;
    }
    else{
        //this else if work when number of days is less than or equal 10
        return number_of_days*100;
    }
}

function megaFriend(friends)
{
    if(friends.length==0)
    {
        return "no value";
    }
    else{
      

       var max_value=0;
       var long_name;
       for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > max_value) {
          var max_value = friends[i].length;
          long_name = friends[i];
        }
      } 

      return long_name;

    }
}

var val=budgetCalculator(14,12,13);
console.log(val);
