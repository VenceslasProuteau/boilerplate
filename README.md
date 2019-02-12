# Boilerplate
- React
- Webpack & Gulp
- Mocha/Chai/Sinon/Enzyme runned by Karma
- LinguiJS / React Lingui

### Serve application
Using webpackDevServer to locally serve application. Used with HMR enabled.

```
gulp serve
```

### Unit testing

```
gulp test (--watch to watch tests updates)
```

### Build App
Bundle app into one chunk in /dist folder.

```
gulp build 
```

### How locales work
For now lang is not configurable, and 'fr' is the one set by default.
To set new locales, you need to :
- Create a file named locales-{lang}.json
- In this json you can nest properties, objects, to you own needs.

#### If you want to change locales behaviour, feel free to change these rules in ./tasks/build-config.js file nor check the mergeLocales tasks in ./tasks/mergeLocales.js

_example_

```
{
  "moduleName": {
    "title": "moduleName title",
    "category": {
      "idCategory": "1",
      "subCategory": {
        "title": "subCategory title"
      }
    }
  }
}
```

- When you serve nor build your app these json will be merged into on single flatten json in /dist folder.
- To use lingui you can use React Trans component using translations ids, or use i18n directly:

_example_


```
import React from 'react';
import {Trans} from '@lingui/react'; // Only if using Trans component
import {LocalesService} from './modules/locales/locales.service';

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.i18n = LocalesService.getLocales(); // If not using Trans component
  }

  render() {
    <div>{this.i18n._('moduleName.title')}</div>
    // or
    <Trans id="moduleName.title">
  }
}
```

### Additional notes

- There is no css/scss loader configured in webpack config, so you must add one if you wanna use css/scss.
- locales changes are watched but there's no hot reloading so you need to refresh browser to see changes.