angular
  .module('demo-angular-url-parser', ['angular-url-parser'])
  .controller('demoCtrl', function($scope, urlParser) {
    'use strict';

    this.example = {
        ex1: 'http://localhost',
        ex2: 'http://localhost:3000',
        ex3: 'http://localhost:3000/profile/yllieth',
        ex4: 'http://localhost:3000/profile/yllieth?page=1&sort=asc',
        ex5: 'http://localhost:3000#personal_information',
        current: location.href
    };

    this.selectedUrl = this.example.current;

    this.changeUrl = function(url) {
      this.protocol = urlParser.getProtocol(url);
      this.host = urlParser.getHost(url);
      this.hostname = urlParser.getHostname(url);
      this.port = urlParser.getPort(url);
      this.route = urlParser.getRoute(url);
      this.routeAttributes = urlParser.getRouteAttributes(url);
      this.queryString = urlParser.getQuerystring(url);
      this.option = urlParser.getOption(undefined, url);
      this.hash = urlParser.getHash(url);
    };

    this.changeUrl(this.selectedUrl);
  });