(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('FormController', FormController);
 
    FormController.$inject = ['$scope'];
 
    function FormController($scope) {
        var vm = this;
        vm.title = 'Create a Profile';
        // we will store all of our form data in this object
        $scope.formData = {
            firstName: ''
            ,lastName: ''
            ,email: ''
            ,work: 'Code'
            ,street: ''
            ,city: ''
            ,state: ''
            ,zip: ''
        };

        activate();
 
        ////////////////
 
        function activate() {
            console.log(vm.title + ' loaded!');
        }
    }
})();
