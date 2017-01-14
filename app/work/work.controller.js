(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('WorkController', WorkController);
 
    WorkController.$inject = [];
 
    function WorkController() {
        var vm = this;
        vm.title = 'Work';
        
        activate();
 
        ////////////////
 
        function activate() {
            console.log(vm.title + ' loaded!');
        }
    }
})();