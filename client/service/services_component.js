angular.module('app').component('services', {
    bindings: {
    },
    templateUrl: 'client/service/services_view.html',
    controller: ['$http', function ($http) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            $ctrl.services = [];
            loadServicesData();
        };

        function loadServicesData() {
            $http.get('/api/services').then(function (res) {
                $ctrl.services = res.data;
            });
        }
    }]
});