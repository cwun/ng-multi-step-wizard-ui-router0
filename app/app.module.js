(function() {
    'use strict';

    // Creating our angular app and inject ngAnimate, ui-router 
    // =============================================================================
    var app = angular.module('wizardApp', ['ngAnimate', 'ui.router'])

    // Configuring our states 
    // =============================================================================
    app.config(['$stateProvider', '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider) {

            // For any unmatched url, redirect to /form/personal
            $urlRouterProvider.otherwise('/form/personal');
    
            $stateProvider
                // route to show our basic wizard (/form)
                .state('form', {
                    url: '/form',
                    templateUrl: 'app/form/form.html',
                    controller: 'FormController'
                })
        
                // nested states 
                // each of these sections will have their own view
                // url will be nested (/form/personal)
                .state('form.personal', {
                    url: '/personal',
                    templateUrl: 'app/personal/personal.html',
                    controller: 'PersonalController',
                    controllerAs: 'vm'
                })
        
                // url will be /form/work
                .state('form.work', {
                    url: '/work',
                    templateUrl: 'app/work/work.html',
                    controller: 'WorkController',
                    controllerAs: 'vm'
                })
        
                // url will be /form/address
                .state('form.address', {
                    url: '/address',
                    templateUrl: 'app/address/address.html',
                    controller: 'AddressController',
                    controllerAs: 'vm'
                })

                // url will be /form/result
                .state('form.result', {
                    url: '/result',
                    templateUrl: 'app/result/result.html',
                    controller: 'ResultController',
                    controllerAs: 'vm'
                })
        }
    ]);
       
})();
