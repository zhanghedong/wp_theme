/**
 * Created by zhanghd on 2014/6/3 15:13
 * Copyright 2014 czmin, Inc. All rights reserved.
 */
(function () {
    var module = angular.module('services', [ 'my.resource' ]);
    module.factory('User', [ 'Resource', 'LuckyConfig', function ($resource, luckyConfig) {
        return $resource(luckyConfig.apiUrl + 'user/:id', { id: '@id', page: '@page', num: '@num' }, {
            getUsers: { method: 'GET', isArray: true },
            get: { method: 'GET', isArray: false}
        });
    }]);
    module.factory('ModifyUserPass', [ 'Resource', 'LuckyConfig', function ($resource, luckyConfig) {
        return $resource(luckyConfig.apiUrl + 'user/:id/pass', { id: '@id'},
            {
                update: { method: 'PUT', isArray: true }
            }
        );
    }]);
    module.factory('Lottogroup', [ 'Resource', 'LuckyConfig', function ($resource, luckyConfig) {
        return $resource(luckyConfig.apiUrl + 'lottogroup/:id', { id: '@id', page: '@page', num: '@num' }, {
            getList: { method: 'GET', isArray: true },
            get: { method: 'GET', isArray: false},
            update: { method: 'PUT', isArray: false} });
    }]);
    module.factory('Lotto', [ 'Resource', 'LuckyConfig', function ($resource, luckyConfig) {
        return $resource(luckyConfig.apiUrl + 'lotto/:id', { id: '@id', page: '@page', num: '@num' }, {
            getList: { method: 'GET', isArray: true },
            get: { method: 'GET', isArray: false},
            update: { method: 'PUT', isArray: false}
        });
    }]);
    //TODO lottoDetail change to lotto
    module.factory('LottoMethod', [ 'Resource', 'LuckyConfig', function ($resource, luckyConfig) {
        return $resource(luckyConfig.apiUrl + 'lottoDetail/:id', { id: '@id', page: '@page', num: '@num' }, {
            get: { method: 'GET', isArray: false},
            update: { method: 'PUT', isArray: false}
        });
    }]);
    module.factory('MethodGroup', [ 'Resource', 'LuckyConfig', function ($resource, luckyConfig) {
        return $resource(luckyConfig.apiUrl + 'methodgroup/:id', { id: '@id'}, {
            get: { method: 'GET', isArray: false},
            update: { method: 'PUT', isArray: false},
            delete: { method: 'DELETE', isArray: false}
        });
    }]);
    module.factory('Method', [ 'Resource', 'LuckyConfig', function ($resource, luckyConfig) {
        return $resource(luckyConfig.apiUrl + 'lottomethod/:id', { id: '@id'}, {
            get: { method: 'GET', isArray: false},
            update: { method: 'PUT', isArray: false},
            delete: { method: 'DELETE', isArray: false}
        });
    }]);
    module.factory('Bank', [ 'Resource', 'LuckyConfig', function ($resource, luckyConfig) {
        return $resource(luckyConfig.apiUrl + 'bank/:id', { id: '@id', page: '@page', num: '@num' });
    }]);
    module.factory('Sync', [ 'Resource', 'LuckyConfig', function ($resource, luckyConfig) {
        return $resource('http://www.willsongroup.com/lucky/cg-api/t/sync', { id: '@id' }, {
            getSync: {method: 'JSONP', params: {_jsonp: 'JSON_CALLBACK'}, isArray: false}

        });
    }]);
}());
