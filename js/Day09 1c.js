//Print the following details name,capital,flag using forEach function
var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function() {
    var data=JSON.parse(request.response);
    data.forEach((item)=>{
        console.log(item.name,item.capital,item.flag);
    })
}
