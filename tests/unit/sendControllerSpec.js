'use strict';

describe('Controllers testing', function(){

    var $scope, $controller, $q, emailService, emails, deferred;

    beforeEach(module('zertoApp'));

    beforeEach(

        inject(function($rootScope, _$controller_, _$q_, _emailService_){
            $scope = $rootScope.$new();
            $controller = _$controller_;
            emailService = _emailService_;

            $controller('sendController', {
              $scope: $scope,
              emailService: _emailService_
            });

        })

    );

    describe('Send controller testing', function(){

        it('Set email text box', function(){
            $scope.email.text = 'master.oren@gmail.com';
            expect($scope.email.text).toEqual('master.oren@gmail.com');
        })

        it('Add email successfully', function(){

            var result = emailService.addEmailSync('master.oren@gmail.com');
            expect(result.emails).not.toBe(undefined);
            expect(result.emails.length).toBe(1);

        })

        it('Add email failed', function(){

            var result = emailService.addEmailSync('m');
            expect(result.error).not.toBe(undefined);
            expect(result.error).toBe('Email is not valid');

        })

        it('Add email async successfully', function(){

            expect(result.emails).not.toBe(undefined);
            expect(result.emails.length).toBe(1);

        })

    })

});