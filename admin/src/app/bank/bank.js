/**
 * Created by zhanghd on 2014/5/28 11:41
 * Copyright 2013 czmin, Inc. All rights reserved.
 */

angular.module('bank', []).controller('bankCtrl', ['$scope', '$modal', '$log', 'User','LuckyConfig', function ($scope, $modal, $log, userModule,luckyConfig) {
    var process = {};
    process = {
        init: function () {
            process.modifyRecordInit();
            process.loadData();
            var user = new userModule;
            console.log(user);
            user.$get({id: 1});
        },
        loadData: function () {
            $scope.totalItems = 64;
            $scope.currentPage = 4;

            $scope.setPage = function (pageNo) {
                $scope.currentPage = pageNo;
            };

            $scope.pageChanged = function () {
                console.log('Page changed to: ' + $scope.currentPage);
            };

            $scope.maxSize = 5;
            $scope.bigTotalItems = 175;
            $scope.bigCurrentPage = 1;
        },
        modifyRecordInstanceCtrl: function ($scope, $modalInstance, items) {
            $scope.items = items;
            $scope.selected = {
                item: $scope.items[0]
            };
            $scope.ok = function () {
                $modalInstance.close($scope.selected.item);
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        },
        modifyRecordInit: function () {
            $scope.items = ['item1', 'itexxm2', 'item3'];
            $scope.open = function (size) {
                var modalInstance = $modal.open({
                    templateUrl: 'myModalContent.html',
                    controller: process.modifyRecordInstanceCtrl,
                    size: size,
                    resolve: {
                        items: function () {
                            return $scope.items;
                        }
                    }
                });
                modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };
        }
    };
    process.init();
    $scope.process = process;
}]);

