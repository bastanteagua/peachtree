angular.module('peachtreeApp')
.filter('timestamp', function() {
  return function(input) {
    let date = new Date(input);
    let month= date.toLocaleString("en-us", { month: "long" });
    let day= date.getDay();
    
    return  month.substr(0,3) + '. ' + day;
  };
})
.component('transactionsList', {
        templateUrl: '../templates/transactions-list.template.html',
        controller: function TransactionsListController($http) {
          var self = this;
          $http.get('mock/transactions.json').then(function(response) {
            self.transactions = response.data.data;
          });

          this.sort = function sort() {
            self.transactions.sort(function(a, b){return a.amount-b.amount})
        };
        },
    }
);
