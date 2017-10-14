angular.module('peachtreeApp')
    .component('transactionsList', {
        templateUrl: '../templates/transactions-list.template.html',
        controller: function TransactionsListController($http) {
            var self = this;
            //self.orderProp = 'age';

            $http.get('mock/transactions.json')
            .then(function(response) {
              self.transactions = response.data.data;

              console.log(self.transactions);
            });
        },
    }
);