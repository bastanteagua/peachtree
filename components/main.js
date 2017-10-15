angular.module('peachtreeApp', []);

function getDate(input) {
    let date = new Date(input);
    let month= date.toLocaleString("en-us", { month: "long" });
    let day= date.toLocaleString("en-us", { day: 'numeric' });
    
    return  month.substr(0,3) + '. ' + day;
}