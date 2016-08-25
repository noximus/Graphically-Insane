(function () {
    'use strict';

    angular.module('graphicallyInsane').controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope'];
    
    /* @ngInject */
    function homeCtrl($scope) {
        /* jshint validthis: true */
        var vm = this;
        $scope.title = 'Home View';

        activate();

        function activate() {
        }
    }
})();