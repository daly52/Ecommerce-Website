const btnPlus = document.querySelectorAll(".plus");
const btnmin = document.querySelectorAll(".minus");
// const delet = document.getElementsByClassName("delete");


//console.log(chekboxtag)
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click", increment);
    // delet[i].addEventListener("click", deletee);
    btnmin[i].addEventListener("click", min);
    
 
}

function min(e){

    var  btnMin=e.target;
    var divElt=btnMin.parentElement;
    var quentitytag=divElt.querySelector("p");
   // console.log(quentitytag)
   quentityvalue=Number(quentitytag.innerHTML);
   if(quentityvalue>1)
   {
      quentityvalue--;
   }
   else if(quentityvalue==1){
    totaltag.innerHTML=50;
  
  }
  

   
//     //console.log(quentityvalue);
   quentitytag.innerHTML = quentityvalue;
   var totaltag=document.getElementById("unitePrice");
   //console.log(totaltag);
   var totalvalue=Number(totaltag.innerHTML);
   console.log(totalvalue);
   totalvalue=totalvalue-50;
   
   if(totalvalue<0 ){
    totalvalue=0;
    totaltag.innerHTML=0;
}

    //console.log(totalvalue);

      
  totaltag.innerHTML=totalvalue;
  
  
  }

function increment(event) {
    //console.log(event);
    var btnplus = event.target;
    // console.log(btnplus);
    var divElt = btnplus.parentElement;
    var quentitytag = divElt.querySelector("p");
    // console.log(quentitytag)
    quentityvalue = Number(quentitytag.innerHTML);
    quentityvalue++;
//     //console.log(quentityvalue);
   quentitytag.innerHTML = quentityvalue;
 var totaltag=document.getElementById("unitePrice");
 //console.log(totaltag);
 var totalvalue=Number(totaltag.innerHTML);
 console.log(totalvalue);
 totalvalue=totalvalue+50;

    
totaltag.innerHTML=totalvalue;


}





