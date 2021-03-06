import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import {I18nProvider} from '@lingui/react';

import LocalesService from './modules/locales/locales.service';
import App from './App';

const initApp = () => {
  const language = 'fr';
  axios
    .get(`dist/locales-${language}.json`)
    .then(({data}) => {
      LocalesService.init({language, locales: data});
      const i18n = LocalesService.getLocales();
      ReactDOM.render(
        <I18nProvider i18n={i18n}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </I18nProvider>,
        document.getElementById("root")
      );
    });
}

initApp();