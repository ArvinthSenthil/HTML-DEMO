//Get all countries population less than 2 lakh
var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function() {
    var data=JSON.parse(request.response);
    let population=data.filter((item)=>{
        return item.population<200000;
    })
    console.log(population);
}
