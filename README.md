# Angular URL parser
Get simple methods to manipulate url parts

> Demo: http://yllieth.github.io/angular-url-parser/app/index.html

## Installation

### Bower

```
bower install angular-url-parser --save
```

Once the lib is downloaded, 

1. add a reference in your index.html 

    `<script type="application/javascript" src="../bower_components/angular-url-parser/angular-url-parser.js"></script>`
    
2. add the module in your angular application
    
    ```javascript
    angular
      .module('YOUR-ANGULAR-APP-NAME', [
        'ngUrlParser'
      ])
      .controller('demoCtrl', function(urlParser) {
        this.protocol = urlParser.getProtocol();
        this.host = urlParser.getHost();
        this.hostname = urlParser.getHostname();
        this.port = urlParser.getPort();
        this.route = urlParser.getRoute();
        this.routeAttributes = urlParser.getRouteAttributes();
        this.queryString = urlParser.getQuerystring();
        this.option = urlParser.getOption();
        this.hash = urlParser.getHash();
      })
    ```

3. enjoy!

## Usage

- `getProtocol([string] url): string` : Return the protocol of the given url - Example: _"http:"_, _"https:"_, ...
- `getHost([string] url): string` : Return the host of the given url (without port) - Example: _"github.com"_, _"localhost"_, ...
- `getHostname([string] url): string` : Return the hostname of the given url (with port) - Example: _"github.com"_, _"localhost:3000"_, ...
- `getPort([string] url): string` : Return the port of the given url - Example: _""_, _"3000"_, ...
- `getRoute([string] url): string` : Return the main parts of the given url
- `getRouteAttributes([string] url): array` : Return the list of parts of the given url
- `getQuerystring([string] url): string` : Return the part of the given url with options
- `getOption([string] param, [string] url): object|string` : Return a specific option in the url's options, or all options in an object
- `getHash([string] url): string` : Return the hash of the given url

# Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request