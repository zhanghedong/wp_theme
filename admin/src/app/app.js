/**
 * Created by zhanghd on 2014/5/14 23:45
 * Copyright 2014 czmin.com, Inc. All rights reserved.
 */
angular.module('app', [
    'ngRoute',
    'ngResource',
    'my.resource',
    'services',
    'welcome',
    'side',
    'user',
    'bank',
    'header',
    'lotto',
    'lottogroup',
    'method',
    'order',
    'ui.bootstrap'
]);
angular.module('app').config(['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider', function ($routeProvider, $locationProvider, $httpProvider, $compileProvider) {
    //$locationProvider.html5Mode(true);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|chrome):/);
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|chrome-extension|chrome):|data:image\//);
    $routeProvider.when('/lottogroup', {
        templateUrl: 'app/lottoGroup/lottogroup.tpl.html',
        controller: 'lottogroupCtrl'
    }).when('/lotto', {
        templateUrl: 'app/lotto/lotto.tpl.html',
        controller: 'lottoCtrl'
    }).when('/bank', {
        templateUrl: 'app/bank/bank.tpl.html',
        controller: 'bankCtrl'
    }).when('/order', {
        templateUrl: 'app/order/order.tpl.html',
        controller: 'orderCtrl'
    }).when('/method/:id', {
        templateUrl: 'app/method/method.tpl.html',
        controller: 'methodCtrl',
        reloadOnSearch: false
    }).when('/user', {
        templateUrl: 'app/user/user.tpl.html',
        controller: 'userCtrl'
    }).when('/welcome', {
        templateUrl: 'app/welcome/welcome.tpl.html',
        controller: 'welcomeCtrl'
    }).otherwise({redirectTo: '/welcome'});
}]).run(function ($route, $http, $templateCache) {
    angular.forEach($route.routes, function (r) {
        if (r.templateUrl) {
            $http.get(r.templateUrl, {cache: $templateCache});
        }
    });
}).controller('AppCtrl', function ($scope, $location, $window) {

}).constant('LuckyConfig', {
    apiUrl: 'http://d.com/bc/server/'
}).filter('status', function () {
    var filterFun = function (status) {
        return status === 1 ? '正常' : '已屏蔽';
    };
    return filterFun;
}).filter('lottoStatus', function () {
    var filterFun = function (status) {
        var obj = {new: '新游戏', hot: '热门游戏'};
        return status ? obj[status] : '无';
    };
    return filterFun;
}).factory('alertService', function ($rootScope, $timeout) {
    var alertService = {};

    // 创建一个全局的 alert 数组
    $rootScope.alerts = [];

    alertService.add = function (type, msg, timeout) {
        $rootScope.alerts.push({'type': type, 'msg': msg, 'close': function () {
            alertService.closeAlert(this);
        }});
        timeout && $timeout(function () {
            alertService.closeAlert(this)
        }, timeout);
    };

    alertService.closeAlert = function (alert) {
        alertService.closeAlertIdx($rootScope.alerts.indexOf(alert));
    };

    alertService.closeAlertIdx = function (index) {
        $rootScope.alerts.splice(index, 1);
    };
    return alertService;
});
;

