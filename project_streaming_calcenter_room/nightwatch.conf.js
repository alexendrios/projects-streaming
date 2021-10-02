module.exports = {
    src_folders: ['tests'],
    detailed_output: true,
    globals_path: "globals/globalModule",
    page_objects_path: ["pages"],
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
                on_error: true,
                path: "screenshots"
            },
            launch_url: "https://video-app-5643-3414-dev.twil.io/",
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                elementScrollBehavior: 1,
                chromeOptions: {

                    args: [

                        "start-maximized ",
                        "--allow-file-access-from-files",
                        "use-fake-device-for-media-stream",
                        "--use-fake-ui-for-media-stream",
                        "--deny-permission-prompts",
                        "--allow-file-access",
                        "allow-running-insecure-content",
                        "--no-sandbox",
                        "ignore-certificate-errors"

                    ],
                },
            },
        },
    },
}