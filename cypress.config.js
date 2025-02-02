const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',  // setting the property for spec files on global level
    // viewportHeight:600,
    // viewportWidth:1200
    //defaultCommandTimeout: 30000
    "screenshotsFolder": "cypress/screenshots",
     "defaultCommandTimeout": 10000, // Adjust timeout as needed   
     "numTestsKeptInMemory": 10  
     // 0 you will not get any DOM snapshots. The memory usage will still climb, but it will climb at a much slower rate.
    
    
  },

});



