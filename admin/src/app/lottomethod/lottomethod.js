/**
 * Created by zhanghd on 2014/5/28 11:41
 * Copyright 2014 czmin, Inc. All rights reserved.
 */
angular.module('lottomethod', []).controller('lottomethodCtrl', ['$scope', '$modal', '$log', '$timeout', 'Lotto', 'LuckyConfig', 'alertService', function ($scope, $modal, $log, $timeout, lottoModule, luckyConfig, alertService) {
    var process = {}, config = {};
    config = {
        pageSize: 5,
        inputNameTip: '请输入游戏分组名称'
    };
    process = {
        init: function () {
            process.loadData();
            $scope.maxSize = 5;
            $scope.bigTotalItems = 175;
            $scope.bigCurrentPage = 1;
        },
        goPage: function (page, num) {
            lottoModule.getList({page: page, num: config.pageSize}, function (list, header) {
                $scope.totalItems = header('X-CG-Total');
                $scope.list = list;
                $scope.currentPage = page;
            }, function (error) {
                console.log(error);
            });
        },
        loadData: function () {
            process.goPage(1);
            $scope.setPage = function (pageNo) {
                $scope.currentPage = pageNo;
            };
            $scope.pageChanged = function () {
                process.goPage($scope.currentPage);
            };
        },
        modifyInstanceCtrl: function ($scope, $modalInstance, item) {
            $scope.modifyItem = item;
            $scope.confirmModifyItem = function (modifyItem) {
                if ($scope.modifyItem.name) {//
                    item.name = $scope.modifyItem.name;
                    if(item.id){
                        lottoModule.update(item, function () {
                            alertService.add('success', '修改成功!', 1000);
                        }, function (error) {//操作失败没有到这里来 TODO
                            alertService.add('warning', '修改失败[' + error.status + ']!', 3000);
                        });
                    }else{
                        lottoModule.create(item, function () {
                            process.goPage(1);//创建成功跳转到首页
                        }, function (error) {//操作失败没有到这里来 TODO
                            alertService.add('warning', '修改失败[' + error.status + ']!', 3000);
                        });
                    }
                    $modalInstance.close();
                } else {
                    alertService.add('warning', config.inputNameTip, 3000);
                }
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        },
        modifyItem: function (item, option, size) {
            var modalInstance = $modal.open({
                templateUrl: 'modifyModalContent.html',
                controller: process.modifyInstanceCtrl,
                size: size,
                resolve: {
                    item: function () {
                        return item || {};
                    }
                }
            });
        },
        deleteItemInstanceCtrl: function ($scope, $modalInstance, item) {
            $scope.deleteItem = item;
            $scope.confirmDeleteItem = function (item) {
                lottoModule.delete({id: item.id}, function () {
                    process.goPage($scope.currentPage);//最后一台记录删除时，返回最后一页内容，与后端接口确认 todo
//                    alertService.add('success', '删除成功!', 1000);
                }, function (error) {
                    alertService.add('warning', '删除失败[' + error.status + ']!', 3000);
                });
                $modalInstance.close();
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        },
        deleteItem: function (item) {
            var modalInstance = $modal.open({
                templateUrl: 'deleteModalContent.html',
                controller: process.deleteItemInstanceCtrl,
                resolve: {
                    item: function () {
                        return  item;
                    }
                }
            });
        }
    };
    $scope.modifyItem = process.modifyItem;
    $scope.deleteItem = process.deleteItem;
    process.init();
    $scope.process = process;
}]);
