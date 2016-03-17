(function(){

    app.service('emailService', EmailService);

    EmailService.$inject= ['$q','$timeout'];

    function EmailService($q, $timeout){

        var self = this;
        var emails = {};
        var logs = [];

        this.addEmail = function(emailAddress){

            var deferred = $q.defer();

            $timeout(function(){

                if (!!emails[emailAddress] == false){
                    emails[emailAddress] = emailAddress;
                    addLog('Email ' + emailAddress + ' added');

                    deferred.resolve();
                } else {
                    addLog('Email ' + emailAddress + ' already exists');
                    deferred.reject();
                }
            }, 0);

            return deferred.promise;
        }

        this.deleteEmail = function(index){

            var deferred = $q.defer();

            $timeout(function(){

                var email = self.getEmails()[index];
                addLog('Email ' + email + ' deleted')
                delete emails[email];
                deferred.resolve();

            }, 0);

            return deferred.promise;

        }

        this.getEmails = function(){

            var emailsArr = Object.keys(emails);
            return emailsArr;
        }

        this.getLogs = function(){
            return logs;
        }

        function addLog(message){
            logs.push({
                text: message
            });
        }

    }

})();