const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature', // ← Önemli: .feature dosyalarını tanır
    baseUrl: 'https://www.iyzico.com/demo/',
    screenshotOnRunFailure: true,  // (Hata olursa ekran görüntüsü alsın mı)
    video: false,                  // (Video kaydı istemiyorsan)
    pageLoadTimeout : 10000,       // Sayfa yükleme zaman aşımı
  },
  viewportWidth: 1440,
  viewportHeight: 900
});
