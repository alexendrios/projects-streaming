const chrome = require('chromedriver')

module.exports = {
    src_folders: ['tests'],
    detailed_output: true,
	globals_path: "globals/globalModule",
	page_objects_path: [ "pages" ],
    webdriver: {
        start_process: true,
        server_path: "C:/Windows/System32/chromedriver.exe",
        port: 9515,
    },
    test_settings: {
        default: {
            screenshots: {
				enabled: true,
				on_failure: true,
				on_error: false,
				path: "screenshots"
			},
            launch_url: "https://ultimateqa.com",
            desiredCapabilities: {
                browserName: 'chrome',
            },
        },
    },

    // test_runner: {
	// 	type: "mocha",
	// 	options: {
	// 		ui: "bdd",
	// 		reporter: "spec"
    //     },
    // },
}