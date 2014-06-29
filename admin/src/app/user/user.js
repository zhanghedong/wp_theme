/**
 * Created by zhanghd on 2014/5/28 11:41
 * Copyright 2014 czmin, Inc. All rights reserved.
 */
angular.module('user', []).controller('userCtrl', ['$scope', '$modal', '$log', 'User', 'LuckyConfig', 'ModifyUserPass', 'alertService', function ($scope, $modal, $log, userModule, luckyConfig, modifyUserPassModule, alertService) {
    var process = {}, config = {};
    config = {
        inputPasswordTip: '密码不能为空且不能少于6位！',
        inputRePasswordTip: '密码不能为空且不能少于6位！',
        inputConfirmTip: '两次密码输入不一致!'
    };
    process = {
        init: function () {
            process.loadData();
            $scope.maxSize = 5;
            $scope.bigTotalItems = 175;
            $scope.bigCurrentPage = 1;
            $scope.inputPasswordTip = config.inputPasswordTip;
            $scope.inputRePasswordTip = config.inputRePasswordTip;
        },
        goPage: function (page, num) {
            var users = userModule.getUsers({page: page, num: 5}, function (user, header) {
                $scope.totalItems = header('X-CG-Total');
                $scope.users = user;
                $scope.currentPage = page;
            }, function (error) {
                console.log(error);
            });
//            users.$promise.then(function () {
//
//            };
        },
        loadData: function () {
            process.goPage(1);
            $scope.setPage = function (pageNo) {
                $scope.currentPage = pageNo;
            };
            $scope.pageChanged = function () {
                process.goPage($scope.currentPage);
                console.log('Page changed to: ' + $scope.currentPage);
            };
        },
        modifyRecordInstanceCtrl: function ($scope, $modalInstance, user) {

            var currUser = userModule.get({id: user.id}, function (user, header) {
                $scope.modifyUser = user;
            });
            $scope.confirmModifyUser = function (modifyUser) {
                if (modifyUser.newPassword && modifyUser.newPassword === modifyUser.reNewPassword) {
                    modifyUserPassModule.update({id: 1}, {pass: 'newPassword'},function(){

                    },function(error){
                       console.log(error);
                    });
                    $modalInstance.close();
                } else if (!modifyUser.newPassword) {
                    alertService.add('warning', config.inputPasswordTip, 3000);
                } else {
                    alertService.add('warning', config.inputConfirmTip, 3000);
                }
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        },
        modifyPassword: function (user, option, size) {
            $scope.modifyUser = user;
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: process.modifyRecordInstanceCtrl,
                size: size,
                resolve: {
                    user: function () {
                        return $scope.modifyUser;
                    }
                }
            });
        },
        deleteUserInstanceCtrl: function ($scope, $modalInstance, user) {
            var currUser = userModule.get({id: user.id}, function (user, header) {

                $scope.deleteUserInfo = user;
            });
            $scope.confirmDeleteUser = function (modifyUser) {
                currUser.$delete(function () {
                    alertService.add('success', '删除成功!', 1000);
                }, function (error) {
                    alertService.add('warning', '删除失败[' + error.status + ']!', 3000);
                });
                $modalInstance.close();

            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        },
        deleteUser: function (user) {
            var modalInstance = $modal.open({
                templateUrl: 'deleteModalContent.html',
                controller: process.deleteUserInstanceCtrl,
                resolve: {
                    user: function () {
                        return  user;
                    }
                }
            });
        }
    };
    $scope.modifyPassword = process.modifyPassword;
    $scope.deleteUser = process.deleteUser;
    process.init();
    $scope.process = process;
}]);
