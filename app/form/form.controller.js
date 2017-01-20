(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('FormController', FormController);
 
    FormController.$inject = ['$scope', 'FormDataModel'];
 
    function FormController($scope, FormDataModel) {
        var vm = this;
        vm.title = 'Multi-Step Wizard';
        // we will store all of our form data in this object
        $scope.formData = new FormDataModel();

        activate();
 
        ////////////////
 
        function activate() {
            console.log(vm.title + ' loaded!');
        }
    }
})();
