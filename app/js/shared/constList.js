(function(){

    angular.module('const',[])
        .factory('appConstants', AppConstants);

    function AppConstants(){

        var constList =
            {
                eventsNames:
                {
                    onSendEmail : 'onSendEmail',
                    onDeleteEmail: 'onDeleteEmail',
                    onSendEmailFailed: 'onSendEmailFailed'
                }
            }


        return constList;

    }

})();