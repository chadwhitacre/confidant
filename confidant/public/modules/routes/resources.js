(function(angular) {
    'use strict';

    angular.module('confidant.routes.resources', [
        'ui.router',
        'ui.bootstrap',
        'confidant.resources'
    ])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider

        .state('resources', {
            url: '/resources',
            views: {
                main: {
                    controller: 'resources.ResourceCtrl',
                    templateUrl: '/modules/resources/views/resources.html'
                }
            },
            data: {
                viewLocation: 'resources'
            }
        })

        .state('resources.newCredential', {
            url: '/new/credential',
            views: {
                'details': {
                    controller: 'resources.CredentialDetailsCtrl',
                    templateUrl: '/modules/resources/views/credential-details.html'
                }
            },
            data: {
                viewLocation: 'resources'
            }
        })

        .state('resources.newService', {
            url: '/new/service',
            views: {
                'details': {
                    controller: 'resources.ServiceDetailsCtrl',
                    templateUrl: '/modules/resources/views/service-details.html'
                }
            },
            data: {
                viewLocation: 'resources'
            }
        })

        .state('resources.credential-details', {
            url: '/credentials/:credentialId',
            views: {
                'details': {
                    controller: 'resources.CredentialDetailsCtrl',
                    templateUrl: '/modules/resources/views/credential-details.html'
                },
                'docs': {
                    controller: 'resources.CredentialDetailsCtrl',
                    templateUrl: '/custom/modules/resources/views/credential-docs.html'
                }
            },
            data: {
                viewLocation: 'resources',
            }
        })

        .state('resources.blind-credential-details', {
            url: '/blind_credentials/:blindCredentialId',
            views: {
                'details': {
                    controller: 'resources.BlindCredentialDetailsCtrl',
                    templateUrl: '/modules/resources/views/blind-credential-details.html'
                },
                'docs': {
                    controller: 'resources.BlindCredentialDetailsCtrl',
                    templateUrl: '/custom/modules/resources/views/blind-credential-docs.html'
                }
            },
            data: {
                viewLocation: 'resources',
            }
        })

        .state('resources.service-details', {
            url: '/services/:serviceId',
            views: {
                'details': {
                    controller: 'resources.ServiceDetailsCtrl',
                    templateUrl: '/modules/resources/views/service-details.html'
                }
            },
            data: {
                viewLocation: 'resources',
            }
        })

        ;
    }])

    ;
}(window.angular));
