const btnPlus = document.querySelectorAll(".plus");
const btnmin = document.querySelectorAll(".minus");
const delet = document.getElementsByClassName("delete");


//console.log(chekboxtag)
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click", increment);
    delet[i].addEventListener("click", deletee);
    btnmin[i].addEventListener("click", min);


}

function min(e) {

    var btnMin = e.target;
    var divElt = btnMin.parentElement;
    var total = bt
    var quentitytag = divElt.querySelector("p");
    // console.log(quentitytag)
    quentityvalue = Number(quentitytag.innerHTML);
    if (quentityvalue > 1) {
        quentityvalue--;
    }

    //console.log(quentityvalue);
    quentitytag.innerHTML = quentityvalue;
    var trElt = divElt.parentElement.parentElement;
    //console.log(trElt);
    var unitpricevalue = Number(trElt.querySelector(".unitePrice").innerHTML);
    //console.log(unitpricevalue)
    var pricetag = trElt.querySelector(".price");
    var pricevalue = Number(pricetag.innerHTML);
    pricevalue = quentityvalue * unitpricevalue;
    pricetag.innerHTML = pricevalue;




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
    var trElt = divElt.parentElement.parentElement;
    var unitpricevalue = Number(trElt.querySelector(".unitePrice").innerHTML);
    console.log(unitpricevalue)
    var pricetag = trElt.querySelector(".price");
    var pricevalue = Number(pricetag.innerHTML);
    pricevalue = quentityvalue * unitpricevalue;
    pricetag.innerHTML = pricevalue;

}



function deletee(e) {
    var remove = e.target;
    //console.log(remove);
    var tdelem = remove.parentElement.parentElement.parentElement.parentElement.parentElement;
    //console.log(tdelem);
    tdelem.remove();

}

function totelprice(e) {
    checkbox = e.target;
    var pricevalue = Number(checkbox.parentElement.parentElement.querySelector(".price").innerHTML);
    var totaltag = document.getElementById("total");
    var totalvalue = Number(totaltag.innerHTML);
    var btnPluss = checkbox.parentElement.parentElement.querySelector(".plus");



}