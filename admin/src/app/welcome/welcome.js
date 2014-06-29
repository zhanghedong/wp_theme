/**
 * Created by zhanghd on 2014/5/28 11:41
 * Copyright 2013 czmin, Inc. All rights reserved.
 */
angular.module('welcome',[]).controller('welcomeCtrl', ['$scope','$timeout', '$location', function ($scope, $timeout, $location) {
    var process = {};
    $scope.welcome = 'hello world';
    $scope.process = process;
}]);
