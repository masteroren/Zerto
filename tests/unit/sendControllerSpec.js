'use strict';

describe('Controllers testing', function(){

    var $scope, $q, deferred;

    beforeEach(module('zertoApp'));

    beforeEach(

        inject(function($rootScope, $controller, _$q_, emailService){
            $q = _$q_;
            $scope = $rootScope.$new();

            deferred = _$q_.defer();

            spyOn(emailService, 'addEmail').andReturn(deferred.promise);

            $controller('sendController', {
              $scope: $scope,
              emailService: emailService
            });

        })

    );

    describe('Send controller testing: ', function(){

        it('Set email text box', function(){
            $scope.email.text = 'master.oren@gmail.com';
            expect($scope.email.text).toEqual('master.oren@gmail.com');
        })

        it('Add email sync', function(){

            $scope.email.text = 'master.oren@gmail.com';
            $scope.sendEmailSync();

            expect($scope.results).not.toBe(undefined);
            expect($scope.results.isValid).toEqual(true);

        })

        it('Add email failure sync', function(){

            $scope.email.text = 'm';
            $scope.sendEmailSync();

            expect($scope.results).toBe(undefined);
            expect($scope.error).toEqual('There has been an error!');

        })

        it('Add email', function(){

            $scope.sendEmail();

            deferred.resolve(true);

            $scope.$apply();

            expect($scope.results).not.toBe(undefined);
            expect($scope.error).toBe(undefined);

        })

        it('Add email failed', function(){

            $scope.sendEmail();

            deferred.reject();

            $scope.$apply();

            expect($scope.results).toBe(undefined);
            expect($scope.error).toBe('There has been an error!');

        })

    })

});