var app = angular.module('zertoApp', ['ui.router','const']);

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
          url: "/home",
          views: {
            '':{
                templateUrl: 'app/views/home.html'
            },
            'send@home':{
                templateUrl: 'app/views/partial/send.html',
                controller: 'sendController'
            },
            'summary@home':{
                templateUrl: 'app/views/partial/summary.html',
                controller: 'summaryController'
            },
            'log@home':{
                templateUrl: 'app/views/partial/log.html',
                controller: 'logController'
            }
          }
        })
});