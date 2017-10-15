angular.module('peachtreeApp')
.factory('transactionsService', function() {
    return {
      transactions: [],
      getList: function() {
        return this.transactions;
      },
      setList: function(list) {
        angular.copy(list, this.transactions);
      },
      pushOne: function(transaction) {
        this.transactions.splice(0, 0, transaction);
      }
    };
  })