(function(){

    app.controller('sendController', SendController);

    SendController.$inject = ['$scope','$rootScope','appConstants','emailService'];

    function SendController($scope,$rootScope,appConstants,emailService){

        $scope.email = {
            text: ''
        }

        $scope.send = function(){
            emailService.addEmail($scope.email.text).then(success, failure);
        }

        function success(response){
            $rootScope.$broadcast(appConstants.eventsNames.onSendEmail);
        }

        function failure(response){
            $rootScope.$broadcast(appConstants.eventsNames.onSendEmailFailed);
        }

    }

})();