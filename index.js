const btnPlus = document.querySelectorAll(".plus");
const btnmin = document.querySelectorAll(".minus");
const delet = document.getElementsByClassName("delete");


//console.log(chekboxtag)
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click", increment);
    delet[i].addEventListener("click", deletee);
    btnmin[i].addEventListener("click", min);
    
 
}

function min(e){

    var  btnMin=e.target;
    var divElt=btnMin.parentElement;
    var quentitytag=divElt.querySelector("p");
   // console.log(quentitytag)
   quentityvalue=Number(quentitytag.innerHTML);
   if(quentityvalue>0)
   {
      quentityvalue--;
   }
   

   
    //console.log(quentityvalue);
    quentitytag.innerHTML = quentityvalue;
    //console.log(quentitytag);
    var trElt = divElt.parentElement.parentElement;
    //console.log(trElt);
     var unitpricevalue = Number(trElt.querySelector(".unitePrice").innerHTML);
    //console.log(unitpricevalue)
     var subtotaltag = trElt.querySelector(".price");
     //console.log(subtotaltag);
     var subtotaltvalue = Number(subtotaltag.innerHTML);
     //console.log(pricevalue);
     subtotaltvalue = quentityvalue * unitpricevalue;
 subtotaltag.innerHTML = subtotaltvalue;
    // //console.log(pricevalue);
    //console.log(subtotaltvalue);
    var totaltag=document.getElementById("total");
    var totalvalue=Number(totaltag.innerHTML);
 
    totalvalue=totalvalue-unitpricevalue-unitpricevalue*0.19;
    if(totalvalue<0){
        totalvalue=0;
        totaltag.innerHTML=0;
    }
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
    //console.log(quentityvalue);
    quentitytag.innerHTML = quentityvalue;
    //console.log(quentitytag);
    var trElt = divElt.parentElement.parentElement;
    //console.log(trElt);
     var unitpricevalue = Number(trElt.querySelector(".unitePrice").innerHTML);
    //console.log(unitpricevalue)
     var subtotaltag = trElt.querySelector(".price");
     //console.log(subtotaltag);
     var subtotaltvalue = Number(subtotaltag.innerHTML);
     //console.log(pricevalue);
     subtotaltvalue = quentityvalue * unitpricevalue;
 subtotaltag.innerHTML = subtotaltvalue;
    // //console.log(pricevalue);
    //console.log(subtotaltvalue);
    var totaltag=document.getElementById("total");
    var totalvalue=Number(totaltag.innerHTML);
 
    totalvalue=totalvalue+unitpricevalue+unitpricevalue*0.19;
    
    totaltag.innerHTML=totalvalue;


}



function deletee(e) {
    var remove = e.target;
    //console.log(remove);
    var tdelem = remove.parentElement.parentElement.parentElement.parentElement.parentElement;
    //console.log(tdelem);
    tdelem.remove();

}

