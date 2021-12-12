//Print the country which uses US Dollars as currency.
var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function() {
    var data=JSON.parse(request.response);
    let cou=data.filter((x)=>{
        for(let a in x.currencies) {
            if(x.currencies[a].code==="USD")
            return true;
        }
    });
    console.log(cou);
}
