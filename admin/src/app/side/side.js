/**
 * Created by zhanghd on 2014/5/28 11:41
 * Copyright 2013 czmin, Inc. All rights reserved.
 */
angular.module('side',[]).controller('sideCtrl', ['$scope','$timeout', '$location', function ($scope, $timeout, $location) {
    var process = {};
    process = {
        onClick: function (idx) {
            $scope.selectedItem = idx;
        },
        init: function () {
            $timeout(function () {
                var i, j,path, items = [
                    {
                        href: '#/lottogroup',
                        text: '游戏分组',
                        cls: 'lottogroup',
                        title: 'tickler'
                    },
                    {
                        href: '#/lotto',
                        text: '游戏管理',
                        cls: 'lotto',
                        title: '游戏列表'
                    },
                    {
                        href: '#/order',
                        text: '订单管理',
                        cls: 'order',
                        title: ''
                    },
                    {
                        href: '#/bank',
                        text: '系统银行',
                        cls: 'bank',
                        title: ''
                    },
                    {
                        href: '#/user',
                        text: '用户管理',
                        cls: 'user',
                        title: ''
                    },
                    {
                        href: '#/logout',
                        text: '安全退出',
                        cls: 'user',
                        title: ''
                    }
                ];
                path = '#' + $location.$$path;
                for (i = 0, j = items.length; i < j; i++) {
                    if (items[i].href === path) {
                        $scope.selectedItem = i;//default note
                    }
                }
                $scope.sides = items;
            });
        }
    };
    process.init();
    $scope.process = process;
}]);
