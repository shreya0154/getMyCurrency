// import {countryList} from "./countries.js"

// const { create } = require("lodash");

const baseURL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const exchangeBtn = document.querySelector(".exchangeBtn");
const selectTag = document.querySelectorAll("select");
const msgTag = document.querySelector(".message");
const listOfCurrencies = document.querySelector(".valueList");

for(let select of selectTag){
    for(currencyCode in countryList){
        console.log(currencyCode);
        let options = document.createElement("option");
        options.setAttribute("value", currencyCode);
        options.textContent = currencyCode;
        if(select.name === "fromCurrency" && options.textContent === "USD"){
            options.selected = "selected";
        }
        if(select.name === "toCurrency" && options.textContent === "INR"){
            options.selected = "selected";
        }
        select.appendChild(options);
    
    }
    select.addEventListener("change", (e)=>{
        updateFlag(e.target);
    })
}

const updateFlag =(targetOption)=>{
    let imageTag = targetOption.parentElement.querySelector("img");
    let index = targetOption.value;
    let countryCode = countryList[index];
    imageTag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}





{/* <form onSubmit={(e) => {
        e.preventDefault();
       this.props.addItems(this.state.naam, Number(this.state.moolya))}
      }> */}


const getExchangeRate=async()=>{
    
    let from = selectTag[0].value ;
    let to = selectTag[1].value ;
    let fromValue = document.querySelector(".Amount input").value;
    let conversionURL = `${baseURL}/${from.toLowerCase()}/${to.toLowerCase()}.json`;
    const response = await fetch(conversionURL);
    const data = await response.json();
    console.log(data);
    console.log(data[to.toLowerCase()]);
    let rate = data[to.toLowerCase()];

    if(fromValue === "" || Number(fromValue) < 0){
        fromValue = 1;
        msgTag.innerText = `1 ${from} = ${rate} ${to}`;
        return;
    }
    
    let toValue = Number(fromValue)*Number(rate);
    console.log(fromValue, from, " = " ,toValue, to);
    msgTag.innerText = `${fromValue} ${from} = ${toValue} ${to}`;

}




exchangeBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    getExchangeRate();

})

window.addEventListener("load", ()=>{
    getExchangeRate();
})