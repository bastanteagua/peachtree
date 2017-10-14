angular.module('peachtreeApp', [])
.controller('MakeTransferController', function MakeTransferController() {
    this.currentBalance = 5824.76;
    this.transferTo = "Georgia Power Electric Company";
    this.amount;

    this.pay = function pay() {
        if(this.amount!=undefined && this.amount > 0 && this.currentBalance > -500){
            this.currentBalance -= this.amount;
            this.amount = undefined;
            window.alert('Thanks!');
        }
    };
});
