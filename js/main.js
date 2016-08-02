var app = angular.module('apixml',[]);

app.controller("soluciones",function($scope,$http){
      $http.get("soluciones.xml",
                {
                    transformResponse: function (cnv) {
                        var x2js = new X2JS();
                        var aftCnv = x2js.xml_str2json(cnv);
                        return aftCnv;
                    }
                })
        .success(function (data) {
            $scope.data = data.Soluciones.Solucion;
        });
});
