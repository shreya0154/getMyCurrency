const baseURL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const table = document.querySelector("#tableView");
// (async()=>{
//     for(country in countryList){
//         let conversionURL = `${baseURL}/usd/${country.toLowerCase()}.json`;
//         if(country === "USD"){}
//         else{
//             console.log(country);
//             const response = await fetch(conversionURL);
//             const data = await response.json();
//             console.log(data[country.toLowerCase()]);
//             let num = 4;
//             while(num--){
//                 let list = document.createElement("td");
//                 list.innerText = `1 USD = ${data[country.toLowerCase()]} ${country}`;
                
//             }
//             let list = document.createElement("li");
//             list.innerText = `1 USD = ${data[country.toLowerCase()]} ${country}`;
//             listOfCurrencies.appendChild(list);
//         }
        
//     }
// })();


// const lists = async()=>{
//     for(country in countryList){
//         let conversionURL = `${baseURL}/usd/${country.toLowerCase()}.json`;
//         if(country === "USD"){}
//         else{
//             console.log(country);
//             const response = await fetch(conversionURL);
//             const data = await response.json();
//             console.log(data[country.toLowerCase()]);
//             let num = 4;
//             while(num--){
//                 let list = document.createElement("td");
//                 list.innerText = `1 USD = ${data[country.toLowerCase()]} ${country}`;
//             }
//             let list = document.createElement("li");
//             list.innerText = `1 USD = ${data[country.toLowerCase()]} ${country}`;
//             listOfCurrencies.appendChild(list);
//         }
//     }
// }

const curr = [];
const tr = document.querySelectorAll(".ttr");
let i = 0;
const funct = async()=>{
    for(currency in countryList){
        let conversionURL = `${baseURL}/usd/${currency.toLowerCase()}.json`;
        if(currency === "USD"){}
        else{
            // console.log(currency);
            const response = await fetch(conversionURL);
            const data = await response.json();
            // console.log(data[currency.toLowerCase()]);
            curr.push({c: currency, val : data[currency.toLowerCase()]});
            // console.log(curr[i]);
            i++;
        }
    
    }
    
    let z = 0;
    // for(let i = 0; i<39; i++){
    //     let tr1 = document.createElement("tr");
    //     tr1.setAttribute("style", "background-color: white; margin-bottom: 50px")
    //     for(let j = 0; j<4; j++){
    //         let td1 = document.createElement("td");
    //         td1.setAttribute("style", "background-color: white");
    //         console.log("hey", curr[z]);
    //         td1.innerHTML = `<text>${(curr[z]).val} <text style="color: blue">${(curr[z]).c}</text></text>`;
    //         tr1.appendChild(td1);
    //         console.log("hello", tr1.textContent);
    //         z++;
    //     }
    //     table.appendChild(tr1);
    // }

    for(let tr1 of tr){
        for(let j = 0; j<4; j++){
                let td1 = document.createElement("td");
                    // td1.setAttribute("style", "background-color: white");
                console.log("hey", curr[z]);
                td1.innerHTML = `<text>${(curr[z]).val} <text style="color: blue">${(curr[z]).c}</text></text>`;
                tr1.appendChild(td1);
                console.log("hello", tr1.textContent);
                z++;
                }
    }

}

funct();


// const tr1 = document.querySelector(".ttr");
// for(let j = 0; j<4; j++){
// let td1 = document.createElement("td");
// td1.innerHTML = `<text>346 <text style="color: blue">UKN</text></text>`;
// tr1.appendChild(td1);
// }
// function ult(){
//     for(let x of curr){
//         console.log(x);
//     }
// }
// ult();

// let z = 0;
// function suv(){
//     for(let i = 0; i<39; i++){
//         let tr1 = document.createElement("tr");
//         for(let j = 0; j<4; j++){
//             let td1 = document.createElement("td");
//             console.log("hey", curr[z]);
//             td1.innerText = `1 USD = ${(curr[z]).val} ${(curr[z]).c}`;
//             tr1.appendChild(td1);
//             console.log("hello", tr1.textContent);
//             z++;
//         }
//         table.appendChild(tr1);
//     }
// }
// suv();