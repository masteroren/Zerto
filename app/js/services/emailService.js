(function(){

    app.service('emailService', EmailService);

    EmailService.$inject= ['$q','$timeout'];

    function EmailService($q, $timeout){

        var self = this;
        var emails = {};
        var logs = [];

        this.addEmailSync = function(emailAddress){

            var valid = validateEmail(emailAddress);
            if (!valid.isValid){

                addLog(valid.reason);
                return {
                    error: 'Email is not valid'
                }

            } else {

                emails[emailAddress] = emailAddress;
                addLog('Email ' + emailAddress + ' was added');
                return {
                    emails: self.getEmails()
                }

            }

        }

        this.addEmail = function(emailAddress){

            var deferred = $q.defer();

            $timeout(function(){

                var valid = validateEmail(emailAddress);
                if (!valid.isValid){

                    addLog(valid.reason);
                    deferred.reject(false);

                } else {

                    emails[emailAddress] = emailAddress;
                    addLog('Email ' + emailAddress + ' was added');
                    deferred.resolve(true);
                }

            }, 0);

            return deferred.promise;
        }

        this.deleteEmail = function(index){

            var deferred = $q.defer();

            $timeout(function(){

                var email = self.getEmails()[index];
                addLog('Email ' + email + ' was deleted')
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

        function validateEmail(email){
            var result = {
                isValid: true,
                reason: ''
            };

            if (email == ''){
                result.isValid = false;
                result.reason = 'The email entered is empty';
                return result;
            }

            if (!isAValidEmail(email)){
                result.isValid = false;
                result.reason = 'The email entered is not a valid email address';
                return result;
            }

            if (!!emails[email] == true){
                result.isValid = false;
                result.reason = 'The email entered already exists';
                return result;
            }

            return result;

        }

        function isAValidEmail(email){
            var emailRegEx = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
            var result = emailRegEx.test(email);
            return result;
        }

    }

})();