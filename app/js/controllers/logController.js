(function(){

    app.controller('logController', LogController);

    LogController.$inject = ['$scope','appConstants','emailService'];

    function LogController($scope,appConstants,emailService){

        var onSendEmail = $scope.$on(appConstants.eventsNames.onSendEmail, function(){
            getLogs();
        });

        var onSendEmailFailed = $scope.$on(appConstants.eventsNames.onSendEmailFailed, function(){
            getLogs();
        });

        var onDeleteEmail = $scope.$on(appConstants.eventsNames.onDeleteEmail, function(){
            getLogs();
        });

        function getLogs(){
            $scope.logs = emailService.getLogs();
        }
    }

})()