(function(){

    app.controller('sendController', SendController);

    SendController.$inject = ['$scope','$rootScope','appConstants','emailService'];

    function SendController($scope,$rootScope,appConstants,emailService){

        $scope.email = {
            text: ''
        }

        $scope.sendEmailSync = function(){
            var response = emailService.addEmailSync($scope.email.text);
            response.isValid ? success(response) : failure(response);
        }

        $scope.sendEmail = function(){
            emailService.addEmail($scope.email.text).then(success, failure);
        }

        function success(response){
            $scope.results = response;
            $rootScope.$broadcast(appConstants.eventsNames.onSendEmail);
        }

        function failure(response){
            $scope.error = 'There has been an error!';
            $rootScope.$broadcast(appConstants.eventsNames.onSendEmailFailed);
        }

    }

})();