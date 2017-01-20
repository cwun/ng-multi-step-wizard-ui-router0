(function() {
    'use strict';

    // Creating our angular app and inject ui-router 
    // =============================================================================
    var app = angular.module('wizardApp', ['ui.router'])

    // Configuring our states 
    // =============================================================================
    app.config(['$stateProvider', '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider) {

            // For any unmatched url, redirect to /form/personal
            $urlRouterProvider.otherwise('/form/personal');
    
            $stateProvider
                // PARENT STATE: form state
                .state('form', {
                    url: '/form',
                    templateUrl: 'app/form/form.html',
                    controller: 'FormController'
                })
        
                // NESTED STATES: child states of 'form' state 
                // URL will become '/form/personal'
                .state('form.personal', {
                    url: '/personal',
                    templateUrl: 'app/personal/personal.html',
                    controller: 'PersonalController',
                    controllerAs: 'vm'
                })
        
                // URL will become '/form/work'
                .state('form.work', {
                    url: '/work',
                    templateUrl: 'app/work/work.html',
                    controller: 'WorkController',
                    controllerAs: 'vm'
                })
        
                // URL will become '/form/address'
                .state('form.address', {
                    url: '/address',
                    templateUrl: 'app/address/address.html',
                    controller: 'AddressController',
                    controllerAs: 'vm'
                })

                // URL will become '/form/result'
                .state('form.result', {
                    url: '/result',
                    templateUrl: 'app/result/result.html',
                    controller: 'ResultController',
                    controllerAs: 'vm'
                })
        }
    ]);
       
})();
