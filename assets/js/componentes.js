agenda
    .directive('wgbnData', function(){
        return {
            require: 'ngModel',
            link: function(scope, elemento, attrs, ctrl){
                var formataData = function(data){
                    data = data.replace(/[^0-9]+/g, '');
                    if (data.length > 2)
                        data = data.substring(0,2) + '/' + data.substring(2);
                    if (data.length > 5)
                        data = data.substring(0,5) + '/' + data.substring(5,9);
                    return data;
                };

                elemento.bind('keyup', function(){
                    ctrl.$setViewValue(formataData(ctrl.$viewValue));
                    ctrl.$render();
                });
            }
        };
    })

    .directive('wgbnHora', function(){
        return {
            require: 'ngModel',
            link: function(scope, elemento, attrs, ctrl){
                var formataHora = function(hora){
                    hora = hora.replace(/[^0-9]+/g, '');
                    if (hora.length > 2)
                        hora = hora.substring(0,2) + ':' + hora.substring(2,4);
                    return hora;
                };

                elemento.bind('keyup', function(){
                    ctrl.$setViewValue(formataHora(ctrl.$viewValue));
                    ctrl.$render();
                });
            }
        };
    })

    .directive('wgbnEvento', function(){
        return {
            restrict: 'E',
            transclude: false,
            scope: true,
            controller: function($scope, $location) {
                $scope.clickEvento = function(){
                    console.log($scope.evento.site);
                    window.location.href = $scope.evento.site.substr(0,4) == 'http' ? $scope.evento.site : 'http://'+$scope.evento.site;
                };
                delete $scope.evento.$$hashKey;
            },
            replace: false,
            controllerAs: 'evtCtrl',
            bindToController: {
                evento: "="
            },
            templateUrl: 'templates/componentes/wgbn-evento.html'
        }
    })

    .directive('wgbnSemanas', function(){
        return {
            restrict: 'E',
            transclude: false,
            scope: true,
            controller: function($scope, $location) {
                //
            },
            replace: false,
            controllerAs: 'mesCtrl',
            bindToController: {
                mes: "="
            },
            templateUrl: 'templates/componentes/wgbn-semanas.html'
        }
    })
;