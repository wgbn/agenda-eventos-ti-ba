agenda
    .controller('MainCtrl', function($scope, $ocModal){
        $scope.clickBtnNovoEvento = function(){
            $ocModal.open({
                url: 'assets/templates/modal/novo-evento.html',
                cls: 'scale',
                controller: 'NovoEventoCtrl'
            });
        };
    })

    .controller('ListagemCtrl', function($scope, $ocModal, fireService, calendrical){
        var lista = fireService.getEventos();
        $scope.mes = calendrical.getWeeksInMonth(new Date());
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
            if ($scope.novo.$valid){
                var evento = angular.copy($scope.evento);
                console.log(evento);
                evento.event_start = parseDate(evento.event_start, true);
                evento.event_end = parseDate(evento.event_end, true);

                if (evento.cfp_start) evento.cfp_start = parseDate(evento.cfp_start);
                if (evento.cfp_end) evento.cfp_end = parseDate(evento.cfp_end);

                fireService.addEvento(evento);
                $ocModal.close();
                $scope.evento = {};
            }
        };

        function parseDate(_date, _time){
            _time = _time || false;
            var _date = _date.split(' ');
            var result = new Date(
                _date[0].split('/')[2],
                parseInt(_date[0].split('/')[1]) - 1,
                _date[0].split('/')[0],
                _time ? _date[1].split(':')[0] : 0,
                _time ? _date[1].split(':')[1] : 0,
                0,
                0
            );
            return result.getTime();
        }
    })
;