
// function verifyno(){
//     fetch("index.json").then(function(response){
//         return response.json();
//     }).then(function(info){
//         for(var data of info){
//             var a = document.getElementById("CardNo").value;
//             var b =  document.getElementById("CVVNO");
//             if(data.cardName==a){
//                 b.disabled=false;
//             }
//         }
//     })
// }





var cardname,cvvno,expirydate;

 var a=setInterval(verifyno,1000);
function verifyno(){
fetch("index.json").then(function(carddetails){
    return carddetails.json();
}).then(function(details){
    for (var detail of details){
        var cardname=document.getElementById("CardNo").value;
 var cvvno=document.getElementById("CVVNO").value;
 var expirydate=document.getElementById("ExpiryDate");
 var holdername=document.getElementById("holder");
        
            if(detail.cardName===cardname){
               
                document.getElementById("CVVNO").disabled=false;
            }
            if(detail.cvv==cvvno){
                expirydate.disabled=false;
            }
            if((detail.cardName===cardname)&& (detail.cvv==cvvno)){
                document.getElementById("holder").disabled=false;

            }
        }
    }
)}

function exceptpayment(){
    alert("payment is successfull");
}
function bodyload(){
    verifyno();
    
}
