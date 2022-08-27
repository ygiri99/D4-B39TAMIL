const request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all');

request.send(null);

request.onload = function(){
    const countries = JSON.parse(request.responseText);
    for(var country of countries){
        const {flag,name:{common},region,subregion,population} =country;
        console.log(flag);
        console.log("Name :",common);
        console.log("Population :",population);
        console.log("Region :",region,"  Subregion :",subregion);
    }

}