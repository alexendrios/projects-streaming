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
            launch_url: "https://staging-plataforma-saude.nexadigital.com.br",
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
                        // ' - use-file-for-fake-video-capture=massa/livia-8baf20f5-a33e-44fa-a2bc-70b91e57d629.mp4',
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