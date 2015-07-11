agenda
    .controller('MainCtrl', function($scope, $ocModal){
        $scope.clickBtnNovoEvento = function(){
            $ocModal.open({
                url: 'templates/modal/novo-evento.html',
                cls: 'scale',
                controller: 'NovoEventoCtrl'
            });
        };
    })

    .controller('ListagemCtrl', function($scope, $ocModal, fireService){
        var lista = fireService.getEventos();
        $scope.eventos = [];

        lista.$loaded()
            .then(function() {
                $scope.eventos = lista;
            })
            .catch(function(err) {
                console.error(err);
            });
    })

    .controller('NovoEventoCtrl', function($scope, $ocModal, fireService){
        $scope.clickClose = function(){
            $ocModal.close();
        };
        $scope.clickEnviar = function(){
            fireService.addEvento($scope.evento);
            $ocModal.close();
        };
    })
;