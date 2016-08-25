(function () {
'use strict';
 angular.module('config', [])

.constant('envPackage', {version:'1.0.0',env:'DEV',description:'We are in development!'})

.value('debug', false)

; })();