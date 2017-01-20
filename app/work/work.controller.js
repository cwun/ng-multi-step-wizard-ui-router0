(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('WorkController', WorkController);
 
    WorkController.$inject = [];
 
    function WorkController() {
        var vm = this;
        vm.title = 'What do you do?';
        
        activate();
 
        ////////////////
 
        function activate() {
            console.log('Work feature loaded!');
        }
    }
})();