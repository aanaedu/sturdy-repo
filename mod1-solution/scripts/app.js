(function() {
'use strict';

    angular
        .module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        var vm = this;
        vm.items = "";
        vm.message = "Please enter data first";
        vm.hasItem = false;

        vm.checkItems = function() {
            var itemsArray = vm.items.split(",");
            // remove item where there is no item between some commas
            itemsArray = itemsArray.filter(item => item.trim().length > 0);
            var noOfItems = itemsArray.length;

            if(noOfItems <= 0){
                return;
            }

            if (noOfItems <= 3){
                vm.message = "Enjoy!";
                vm.hasItem = true;
            } else {
                vm.message = "Too much!";
                vm.hasItem = true;
            }
        };
    }
})();
