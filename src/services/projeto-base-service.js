angular
    .module("projetoBaseApp")
    .service("ProjetoBaseService", ProjetoBaseService);

    ProjetoBaseService.$inject = [
        '$http'
    ];

    function ProjetoBaseService(
        $http
    )
    {

        return {
            
        };

    }