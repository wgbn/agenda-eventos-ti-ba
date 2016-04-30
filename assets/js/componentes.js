agenda
    .directive('wgbnData', function(){
        return {
            require: 'ngModel',
            link: function(scope, elemento, attrs, ctrl){
                elemento.mask("00/00/0000", {placeholder: "__/__/____"});
            }
        };
    })

    .directive('wgbnHora', function(){
        return {
            require: 'ngModel',
            link: function(scope, elemento, attrs, ctrl){
                elemento.mask("00:00", {placeholder: "__:__"});
            }
        };
    })

    .directive('wgbnDataHora', function(){
        return {
            require: 'ngModel',
            link: function(scope, elemento, attrs, ctrl){
                elemento.mask("00/00/0000 00:00", {placeholder: "__/__/____ __:__"});
            }
        };
    })

    .directive('wgbnEvento', function(){
        return {
            restrict: 'E',
            templateUrl: 'assets/templates/componentes/wgbn-evento.html',
            scope: {
                evento: '='
            },
            link: function(scope) {
                scope.evento.event_start = parseDate(scope.evento.event_start, true);
                scope.evento.event_end = parseDate(scope.evento.event_end, true);
                if (scope.evento.cfp_start) scope.evento.cfp_start = parseDate(scope.evento.cfp_start);
                if (scope.evento.cfp_end) scope.evento.cfp_end = parseDate(scope.evento.cfp_end);

                scope.clickSite = function(){
                    window.location.href = scope.evento.website.substr(0,4) == 'http' || scope.evento.website.substr(0,4) == 'https' ? scope.evento.website : 'http://'+scope.evento.website;
                };
                scope.clickTwitter = function(){
                    if (scope.evento.twitter)
                     window.location.href = scope.evento.twitter.substr(0,4) == 'http' || scope.evento.twitter.substr(0,4) == 'https' ? scope.evento.twitter : 'http://twitter.com/'+scope.evento.twitter;
                };

                function parseDate(_date, _time){
                    _time = _time || false;
                    dt = new Date(_date);
                    return r(dt.getDate())+'/'+r(dt.getMonth()+1)+'/'+dt.getFullYear()+(_time ? ' '+r(dt.getHours())+':'+r(dt.getMinutes()) : '');
                }

                function r(_i) {
                    return _i < 10 ? '0'+_i : _i;
                }
            }
        }
    })
;