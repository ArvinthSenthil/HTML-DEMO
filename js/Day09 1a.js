//Get all countries from Asiacontinent/region using filter function
var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function() {
    var data=JSON.parse(request.response);
    let asia=data.filter((ele)=>{
        if(ele.region==="Asia") {
            return ele.name;
        }
    })
    console.log(asia);}
