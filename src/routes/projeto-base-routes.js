angular
    .module("projetoBaseApp")
    .config(projetoBaseRoutes);

    projetoBaseRoutes.$inject = [
        '$routeProvider'
    ];

    function projetoBaseRoutes(
        $routeProvider
    )
    {

        $routeProvider
            .when('/home', {
                templateUrl: './www/views/inicial-tpl.html'
            })
            .otherwise({
                redirectTo: 'home'
            });

    }