# Angular URL parser
Angular service to get simple methods to manipulate url parts

> Demo: http://yllieth.github.io/angular-url-parser/app/index.html
> 
> Rails gem: https://github.com/yllieth/angular_url_parser_rails

## Installation

### Bower

```
bower install yllieth/angular-url-parser --save
```

Once the lib is downloaded, add a reference in your index.html 

```
<script type="application/javascript" src="../bower_components/angular-url-parser/angular-url-parser.js"></script>
```

### Rails

In your `Gemfile`, add the following line:
```ruby
gem 'angular_url_parser_rails'
```

In your `application.js`, add the following line:
```
//= require angular-url-parser
```

## Usage

```javascript
angular
  .module('YOUR-ANGULAR-APP-NAME', [
    'ngUrlParser'
  ])
  .controller('demoCtrl', function(urlParser) {
    this.parts           = urlParser.parse();
    this.protocol        = urlParser.getProtocol();
    this.host            = urlParser.getHost();
    this.hostname        = urlParser.getHostname();
    this.port            = urlParser.getPort();
    this.route           = urlParser.getRoute();
    this.routeAttributes = urlParser.getRouteAttributes();
    this.queryString     = urlParser.getQuerystring();
    this.option          = urlParser.getOption();
    this.hash            = urlParser.getHash();
  })
```

- `getProtocol([string] url): string` : Return the protocol of the given url - Example: _"http:"_, _"https:"_, ...
- `getHost([string] url): string` : Return the host of the given url (without port) - Example: _"github.com"_, _"localhost"_, ...
- `getHostname([string] url): string` : Return the hostname of the given url (with port) - Example: _"github.com"_, _"localhost:3000"_, ...
- `getPort([string] url): string` : Return the port of the given url - Example: _""_, _"3000"_, ...
- `getRoute([string] url): string` : Return the main parts of the given url
- `getRouteAttributes([string] url): array` : Return the list of parts of the given url
- `getQuerystring([string] url): string` : Return the part of the given url with options
- `getOption([string] param, [string] url): object|string` : Return a specific option in the url's options, or all options in an object
- `getHash([string] url): string` : Return the hash of the given url
- `parse([string] url): object` : Return parsed url in an object:
    ```json
    // urlParser.parse('http://localhost:3000/models?sort=asc#quantiles')
  
    {
      "protocol": "http:",
      "host":     "localhost:3000",
      "hostname": "localhost",
      "port":     "3000",
      "pathname": "/models",
      "search":   "?sort=asc",
      "searchObject": { "sort": "asc" },
      "hash":     "quantiles"
    }
    ```
    
# Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
