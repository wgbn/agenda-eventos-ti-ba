agenda
    .factory('fireService', ["$firebaseArray",
        function($firebaseArray) {
            var db = new Firebase("https://agenda-ti-ba.firebaseio.com/agenda").orderByChild('event_start').startAt(new Date().getTime()).on('event_end', function(snapshot) {
                console.log('new record', snap.key());
            });
            var sync = $firebaseArray(db);

            return {
                getEventos: function(){
                    return sync;
                },
                addEvento: function(_evento){
                    sync.$add(_evento);
                },
            };
        }
    ])
;