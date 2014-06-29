/**
 * Created by zhanghd on 2014/5/28 11:41
 * Copyright 2014 czmin, Inc. All rights reserved.
 */
angular.module('method', []).controller('methodCtrl', ['$scope', '$routeParams', '$modal', '$log', '$timeout', '$location', 'Lotto', 'Lottogroup', 'LottoMethod', 'Method','MethodGroup', 'LuckyConfig', 'alertService', function ($scope, $routeParams, $modal, $log, $timeout, $location, lottoModule, lottogroupModule, lottoMethodModule, methodModule,methodGroupModule, luckyConfig, alertService) {
    var process = {}, config = {};
    config = {
        pageSize: 5,
        inputNameTip: '请输入游戏分组名称'
    };
    process = {
        init: function () {
//            process.loadData();
            process.loadLotto();
            $scope.maxSize = 5;
            $scope.bigTotalItems = 175;
            $scope.bigCurrentPage = 1;
        },
        loadLotto: function () {
            var params = $routeParams;
            lottoMethodModule.get({id: 5}, function (data) {
                $scope.lottoDetail = data;
                $scope.activeGroupId = data.groups.length && data.groups[0].id;
            })
        },
        goGroup: function (item) {
            $scope.activeGroupId = item.id;
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
        modifyInstanceCtrl: function ($scope, $modalInstance, obj) {
            var item = obj.item || {};
            $scope.modifyFormTitle = (obj.option == 'modify' ? '修改玩法' : '新增玩法');
            $scope.modifyItem = item;
            $scope.confirmModifyItem = function (modifyItem) {
                if ($scope.modifyItem.name) {//
                    item.name = $scope.modifyItem.name;
                    if (item.id) {
                        methodModule.update(item, function () {
                            alertService.add('success', '修改成功!', 1000);
                        }, function (error) {//操作失败没有到这里来 TODO
                            alertService.add('warning', '修改失败[' + error.status + ']!', 3000);
                        });
                    } else {
                        methodModule.create(item, function () {
                            process.goGroup($scope.activeGroupId);//创建成功跳转到首页
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
                templateUrl: 'modifyMethodModalContent.html',
                controller: process.modifyInstanceCtrl,
                size: size,
                resolve: {
                    obj: function () {
                        return {item: item, option: option};
                    }
                }
            });
        },
        deleteItemInstanceCtrl: function ($scope, $modalInstance, item) {
            $scope.deleteItem = item;
            $scope.confirmDeleteItem = function (item) {
                methodModule.delete({id: item.id}, function () {
                    process.goGroup($scope.activeGroupId);//最后一台记录删除时，返回最后一页内容，与后端接口确认 todo
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
                templateUrl: 'deleteMethodModalContent.html',
                controller: process.deleteItemInstanceCtrl,
                resolve: {
                    item: function () {
                        return  item;
                    }
                }
            });
        },
        modifyGroupInstanceCtrl: function ($scope, $modalInstance, obj) {
            var item = obj.item || {};
            $scope.modifyFormTitle = (obj.option == 'modify' ? '修改玩法分组' : '新增玩法分组');
            $scope.modifyItem = item;
            $scope.confirmModifyItem = function (modifyItem) {
                if ($scope.modifyItem.name) {//
                    item.name = $scope.modifyItem.name;
                    if (item.id) {
                        methodGroupModule.update(item, function () {
                            alertService.add('success', '修改成功!', 1000);
                        }, function (error) {//操作失败没有到这里来 TODO
                            alertService.add('warning', '修改失败[' + error.status + ']!', 3000);
                        });
                    } else {
                        methodGroupModule.create(item, function () {
                            process.loadLotto();
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
        modifyGroupItem:function(item, option, size) {
            var modalInstance = $modal.open({
                templateUrl: 'modifyMethodGroupModalContent.html',
                controller: process.modifyGroupInstanceCtrl,
                size: size,
                resolve: {
                    obj: function () {
                        return {item: item, option: option};
                    }
                }
            });
        },
        deleteGroupItemInstanceCtrl: function ($scope, $modalInstance, item) {
            $scope.deleteItem = item;
            $scope.confirmDeleteGroupItem = function (item) {
                methodGroupModule.delete({id: item.id}, function () {
                    process.loadLotto();
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
        deleteGroupItem:function(item){
            var modalInstance = $modal.open({
                templateUrl: 'deleteMethodGroupModalContent.html',
                controller: process.deleteGroupItemInstanceCtrl,
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
    $scope.modifyGroupItem = process.modifyGroupItem;
    $scope.deleteGroupItem = process.deleteGroupItem;
    process.init();
    $scope.process = process;
}]);
