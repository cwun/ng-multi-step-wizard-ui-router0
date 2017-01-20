(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('AddressController', AddressController);
 
    AddressController.$inject = [];
 
    function AddressController() {
        var vm = this;
        vm.title = 'Where do you live?';
        
        activate();
 
        ////////////////
 
        function activate() {
            console.log('Address feature loaded!');
        }
    }
})();