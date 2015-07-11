agenda.
    controller('ListagemCtrl', function($scope, $ocModal, fireService){
        $scope.lista = fireService.getEventos();
        $scope.eventos = [
            {
                nome: 'Teste Evento TI',
                local: 'Praça matriz',
                data: '20/07/2015',
                hora: '19:00',
                site: 'http://www.wgbn.com.br',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate in libero nostrum porro veritatis voluptatum? Atque beatae blanditiis distinctio, ipsa perspiciatis quidem ullam unde? Assumenda dolor eius ipsa laborum.',
                autor: 'Walter Gandarella',
                email: 'walter.wgbn@gmail.com'
            }
        ];
        $scope.lista.$loaded()
            .then(function() {
                $scope.eventos = $scope.lista;
            })
            .catch(function(err) {
                console.error(err);
            });

        $scope.clickBtnNovoEvento = function(){
            $ocModal.open({
                url: 'templates/modal/novo-evento.html',
                cls: 'scale',
                controller: 'NovoEventoCtrl'
            });
        };
    })

    .controller('MainCtrl', function($scope, $ocModal){

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