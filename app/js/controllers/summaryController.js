(function(){

    app.controller('summaryController', SummaryController);

    SummaryController.$inject = ['$scope','$rootScope','appConstants','emailService'];

    function SummaryController($scope,$rootScope,appConstants,emailService){

        var onSendEmail = $scope.$on(appConstants.eventsNames.onSendEmail, function(){
            getEmails();
        });

        $scope.deleteEmailSync = function(index){
            emailService.deleteEmailSync(index);
            success();
        }

        $scope.deleteEmail = function(index){
            emailService.deleteEmail(index).then(success, failure);
        }

        function getEmails(){
            $scope.emails = emailService.getEmails();
        }

        function success(){
            getEmails();
            $rootScope.$broadcast(appConstants.eventsNames.onDeleteEmail);
        }

        function failure(){

        }

    }

})()