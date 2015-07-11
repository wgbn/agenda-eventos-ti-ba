var agenda = angular.module('agenda', ['ngRoute', 'ng-polymer-elements', 'firebase', 'oc.modal', 'calendrical']);

agenda.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'assets/templates/listagem.html',
            controller: 'ListagemCtrl'
        })
})
;