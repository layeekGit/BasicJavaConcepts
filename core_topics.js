// Using objects in place of if-else.

function discount(price, discount){
  if(discount = "SUMMER20"){
    return price * 0.2;
  } else if (discount = "WINTER15"){
   return price * 0.15;
  } else if (discount = "SPRING10"){
    return price * 0.1;
  } else{
    return price;
  }
}

// instead
const discountRate = {
  "SPRING10": 0.1;
  "WINTER15": 0.15;
  "SUMMER20": 0.2;
}

function discount(price, discount){
  if(discount) ? price * discountRate[discount] : price;
};


===========================================================================================
  
  
