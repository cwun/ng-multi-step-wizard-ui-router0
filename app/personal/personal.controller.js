(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('PersonalController', PersonalController);
 
    PersonalController.$inject = [];
 
    function PersonalController() {
        var vm = this;
        vm.title = 'Please tell us about yourself.';
        
        activate();
 
        ////////////////
 
        function activate() {
            console.log('Personal feature loaded!');
        }
    }
})();
