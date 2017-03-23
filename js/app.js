var app = angular
  .module('myapp', [])
  .controller('MyModuleWeather', function($scope, $http, $log) {

  // Definicição da função após atualizaç
  $scope.change = function() {
    // Procura dados por JSONP.
    var url = 'http://api.openweathermap.org/data/2.5/weather';

    //Função JSONP
    $http.jsonp(url, {
			params : {
        q : $scope.city,
        units : 'metric',
        lang: 'pt',
        callback: 'JSON_CALLBACK',
        appid: '810deb65213b28a42efa356c1413391d',
      }}).
      success(function(data, status, headers, config) {
        $scope.main = data.main;
        $scope.wind = data.wind;
        $scope.description = data.weather[0].description;
        $scope.name = data.name;

      }).
      error(function(data, status, headers, config) {

        alert("Cidade não encontrada! Tente novamente..");

      });
  };

});
