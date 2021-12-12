//Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function() {
    var data=JSON.parse(request.response);
    let pops=data.reduce((acc,item)=>{
        return acc+item.population;
    },0)
    console.log(pops);
}
