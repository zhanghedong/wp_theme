/**
 * Created by zhanghd on 2014/6/4 17:19
 * Copyright 2014 czmin, Inc. All rights reserved.
 */

//angular.module('luckyAlert', []).controller('luckyAlertCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
//    $scope.closeable = true;
//    $scope.alerts = [];
//    $scope.addAlert = function () {
//        $scope.alerts.push({msg: 'Another alert!'});
//    };
//
//    $scope.closeAlert = function (index) {
//        $scope.alerts.splice(index, 1);
//    };
//    /**
//     *
//     * @param type  danger success
//     * @param msg
//     */
//    var setAlert = function (type, msg) {
//        var obj = { type: type, msg: msg }, index = $scope.alerts.length;
//        $scope.alerts.push(obj);
//        $timeout(function () {
//            $scope.alerts.splice(index, 1);
//        }, 3000);
//    };
//    return {
//        alert:setAlert
//    }
//}]);

//angular.module('app.services')