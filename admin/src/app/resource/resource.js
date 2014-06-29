/**
 * Created by zhanghd on 2014/6/3 15:13
 * Copyright 2014 czmin, Inc. All rights reserved.
 */
(function () {
    var module = angular.module('my.resource', [ 'ngResource' ]);
    module.factory('Resource', [ '$resource', function ($resource) {
        return function (url, params, methods) {
            var defaults = {
                update: { method: 'PUT', isArray: false },
                create: { method: 'POST' }
            };
            methods = angular.extend(defaults, methods);
            var resource = $resource(url, params, methods);
            resource.prototype.$save = function () {
                if (!this.id) {
                    return this.$create();
                }
                else {
                    return this.$update();
                }
            };
            return resource;
        };
    }]);
}());
