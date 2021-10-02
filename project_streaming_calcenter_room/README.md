# Streaming Test
 <b> * Script responsible for simulating the care between patient and nurse - The purpose of this is to validate the call center room referring to the Covid19 Virtual Appointment application.</b><br/>
 <u>The technologies used to build the project are as follows:</p></u>
   <ul>
     <li>NodeJS</li>
     <li>JavaScript</li>
     <li>chromedriver</li>
     <li>Nightwatch</li>
     <li>Selenium</li>
    </ul>

### GetStart
#### Environment Setting
> Download and install [NodeJS]("https://nodejs.org/en/")
> Download and install [Chromedriver]("https://chromedriver.chromium.org/downloads")
> - Chromedriver installation on [macOS]("https://www.kenst.com/2015/03/installing-chromedriver-on-mac-osx/")
>  - Chromedriver installation on [Linux]("https://www.codegrepper.com/code-examples/shell/install+chromedriver+linux")
>  - Chromedriver installation on [Win]("https://www.programmersought.com/article/47853439172/")

#### Project Configuration
> Please change the chromedriver path according to the machine's environment - referring file [nightwatch.conf.js](nightwatch.conf.js)
```js
webdriver: {
        start_process: true,
        server_path: "C:/Windows/System32/chromedriver.exe",
        port: 9515,
    },
```
<font color= "red"><b>As mentioned modify this path: - server_path: "(path)/chromedriver.exe",</b></font>
### Start
> Open the terminal and enter the project directory and type the commands below
```
npm install
```
> The above command will install the dependencies listed in the file [package.json](package.json)
```
npm test
```
> The command above will run the streaming test simulating the call center room connection between patient and nurse
### Results
> After the execution of the Test, evidences were captured and recorded in the [screnshot](./screenshot/) directory
> when entering these directories there will be two folders:
-  [nurse_simulation](./screenshot/nurse_simulation/)
-  [simulation_patient](./screenshot/simulation_patient/)
# Important Documents
## Mass Generation
> A .py file was created for Room Generation - [generation_masses.ipynb](data/generation_masses.ipynb)

## File used in the TestRTC tool
 > Js file written with Nightwatch framework, needed to perform the stress test in the TestRTC tool - [script_testRTC.js](script/script_testRTC.js) 
# Analyze
> There is a file where the database extracted from the TestRtc tool was worked. [Data_processing.ipynb](data/analyze/Data_processing.ipynb)
> The report is found in the report  [folder](report) if you want to view only the report, it is recommended to download this folder and open the index file

# Report
> To view test results [Report](https://alexendrios.github.io/testRTC-report/)

