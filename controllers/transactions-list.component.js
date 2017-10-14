angular.module('peachtreeApp')
    .component('transactionsList', {
        templateUrl: '../templates/transactions-list.template.html',
        controller: function TransactionsListController() {
            this.arturo = "hola";
            this.list   = ['1',  '2', '3'];
        },
    }
);
