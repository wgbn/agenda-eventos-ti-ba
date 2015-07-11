agenda
    .factory('fireService', ["$firebaseArray",
        function($firebaseArray) {
            var db = new Firebase("https://agenda-ti-ba.firebaseio.com");
            var sync = $firebaseArray(db.child('agenda'));

            return {
                getEventos: function(){
                    return sync;
                },
                addEvento: function(_evento){
                    sync.$add(_evento);
                }
            };
        }
    ])
;