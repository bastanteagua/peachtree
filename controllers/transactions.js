angular.module('peachtreeApp')
.controller('TransactionsController', function TransactionsController($scope,$http) {
    this.arturo="hola";

    this.list;
    $http.get('mock/transactions.json').then(function(response) { 
        console.log(response.data.data);
        this.list = response.data.data;
    });

    /*$.getJSON("mock/transactions.json", function(json) {
       
        $scope.$apply(function(){
            console.log(json.data);
            list = json.data;
        });
    });*/
   /* $http.jsonp('mock/transactions.json?callback=JSON_CALLBACK').success(function(data) {
        this.list = data;
    });
    
    $http.get("mock/transactions.json", function(data) {
        console.log(data);
        list = data;
        $scope.$apply();
    });*/

});
