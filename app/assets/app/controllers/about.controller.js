(function () {
    'use strict';

    angular.module('graphicallyInsane').controller('aboutCtrl', aboutCtrl);

    aboutCtrl.$inject = ['$scope'];
    
    /* @ngInject */
    function aboutCtrl($scope) {
        /* jshint validthis: true */
        var vm = this;
        $scope.title = 'About View';
        
        activate();

        function activate() {
        }
    }
})();