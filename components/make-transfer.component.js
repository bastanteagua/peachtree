angular.module('peachtreeApp')
    .component('makeTransfer', {
        templateUrl: '../templates/make-transfer.template.html',
        controller:function MakeTransferController() {
            this.currentBalance = 5824.76;
            this.transferTo     = "Georgia Power Electric Company";
            this.amount         = 0.00;
            
            this.makeTransfer = this;

            this.pay = function pay() {
                if(this.amount != undefined && this.amount > 0 && this.currentBalance > -500){
                    this.currentBalance -= this.amount;
                    this.amount          = 0.00;

                    window.alert('Thanks!');
                }
            };
        }
    }
);
