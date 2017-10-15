angular.module('peachtreeApp')
.filter('timestamp', function() {
  return function(input) {
    return  getDate(input);
  };
})
.component('transactionsList', {
        templateUrl: '../templates/transactions-list.template.html',
        controller: function TransactionsListController($scope, $http, transactionsService) {
          this.filterText;
          this.sortedbyDate = true;
          this.sortedByBeneficiary = true;
          this.sortedByAmount = true;
          this.transactions = transactionsService.getList();

          var self = this;
          $http.get('mock/transactions.json').then(function(response) {
            transactionsService.setList(response.data.data);
          });

          $scope.searchAll = function (element){
            if(self.filterText!=undefined){
              let all = element.amount + " " 
                  + element.merchant + " " 
                  + element.transactionType + " "
                  +  getDate(element.transactionDate);
              
              return all.toUpperCase().indexOf(self.filterText.toUpperCase()) > -1;
            }else return true;
          };

          this.clearSearchBox = function clearSearchBox(){
            this.filterText = undefined;
          }

          this.sortbyDate = function sortbyDate() {
              this.transactions.sort(function(a, b){return a.transactionDate-b.transactionDate});
              if(this.sortedByDate){
                this.transactions.reverse();
              }
              this.sortedByDate = !this.sortedByDate;
          };
          this.sortbyBeneficiary = function sortbyBeneficiary() {
            this.transactions.sort(function(a, b){
              return a.merchant.localeCompare(b.merchant)
            });
            if(this.sortedByBeneficiary){
              this.transactions.reverse();
            }
            this.sortedByBeneficiary = !this.sortedByBeneficiary;
        };
        this.sortbyAmount = function sortbyAmount() {
          this.transactions.sort(function(a, b){return a.amount-b.amount});
          if(this.sortedByAmount){
            this.transactions.reverse();
          }
          this.sortedByAmount = !this.sortedByAmount;
      };
        },
    }
);
