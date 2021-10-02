var agentId = Number(process.env.RTC_IN_SESSION_ID);
var agentName = process.env.RTC_AGENT_NAME;
var index = (Number(process.env.RTC_SESSION_IDX));
var agentSession = Number(process.env.RTC_SESSION_IDX);
var agentSessionName = process.env.RTC_SESSION_NAME;
var agentNumber = process.env.RTC_AGENT_NUM;
var sec = 1000;
var roomUrl = process.env.RTC_SERVICE_URL;
index = index - 1;
const fistName = ['Jhon_1', 'Jhon_2', 'Jhon_3', 'Jhon_4', 'Jhon_5', 'Jhon_6', 'Jhon_7', 'Jhon_8', 'Jhon_9', 'Jhon_10', 'Jhon_11', 'Jhon_12', 'Jhon_13', 'Jhon_14', 'Jhon_15', 'Jhon_16', 'Jhon_17', 'Jhon_18', 'Jhon_19', 'Jhon_20', 'Jhon_21', 'Jhon_22', 'Jhon_23', 'Jhon_24', 'Jhon_25', 'Jhon_26', 'Jhon_27', 'Jhon_28', 'Jhon_29', 'Jhon_30', 'Jhon_31', 'Jhon_32', 'Jhon_33', 'Jhon_34', 'Jhon_35', 'Jhon_36', 'Jhon_37', 'Jhon_38', 'Jhon_39', 'Jhon_40', 'Jhon_41', 'Jhon_42', 'Jhon_43', 'Jhon_44', 'Jhon_45', 'Jhon_46', 'Jhon_47', 'Jhon_48', 'Jhon_49', 'Jhon_50', 'Jhon_51', 'Jhon_52', 'Jhon_53', 'Jhon_54', 'Jhon_55', 'Jhon_56', 'Jhon_57', 'Jhon_58', 'Jhon_59', 'Jhon_60', 'Jhon_61', 'Jhon_62', 'Jhon_63', 'Jhon_64', 'Jhon_65', 'Jhon_66', 'Jhon_67', 'Jhon_68', 'Jhon_69', 'Jhon_70', 'Jhon_71', 'Jhon_72', 'Jhon_73', 'Jhon_74', 'Jhon_75', 'Jhon_76', 'Jhon_77', 'Jhon_78', 'Jhon_79', 'Jhon_80', 'Jhon_81', 'Jhon_82', 'Jhon_83', 'Jhon_84', 'Jhon_85', 'Jhon_86', 'Jhon_87', 'Jhon_88', 'Jhon_89', 'Jhon_90', 'Jhon_91', 'Jhon_92', 'Jhon_93', 'Jhon_94', 'Jhon_95', 'Jhon_96', 'Jhon_97', 'Jhon_98', 'Jhon_99', 'Jhon_100'];
const midllename = "pierre";
const lastName = "smith";
const email = ['ns.test.test.1@yopmail.com', 'ns.test.test.2@yopmail.com', 'ns.test.stress.3@yopmail.com', 'ns.test.stress.4@yopmail.com', 'ns.test.stress.5@yopmail.com', 'ns.test.stress.6@yopmail.com', 'ns.test.stress.7@yopmail.com', 'ns.test.stress.8@yopmail.com', 'ns.test.stress.9@yopmail.com', 'ns.test.stress.10@yopmail.com', 'ns.test.stress.11@yopmail.com', 'ns.test.stress.12@yopmail.com', 'ns.test.stress.13@yopmail.com', 'ns.test.stress.14@yopmail.com', 'ns.test.stress.15@yopmail.com', 'ns.test.stress.16@yopmail.com', 'ns.test.stress.17@yopmail.com', 'ns.test.stress.18@yopmail.com', 'ns.test.stress.19@yopmail.com', 'ns.test.stress.20@yopmail.com', 'ns.test.stress.21@yopmail.com', 'ns.test.stress.22@yopmail.com', 'ns.test.stress.23@yopmail.com', 'ns.test.stress.24@yopmail.com', 'ns.test.stress.25@yopmail.com', 'ns.test.stress.26@yopmail.com', 'ns.test.stress.27@yopmail.com', 'ns.test.stress.28@yopmail.com', 'ns.test.stress.29@yopmail.com', 'ns.test.stress.30@yopmail.com', 'ns.test.stress.31@yopmail.com', 'ns.test.stress.32@yopmail.com', 'ns.test.stress.33@yopmail.com', 'ns.test.stress.34@yopmail.com', 'ns.test.stress.35@yopmail.com', 'ns.test.stress.36@yopmail.com', 'ns.test.stress.37@yopmail.com', 'ns.test.stress.38@yopmail.com', 'ns.test.stress.39@yopmail.com', 'ns.test.stress.40@yopmail.com', 'ns.test.stress.41@yopmail.com', 'ns.test.stress.42@yopmail.com', 'ns.test.stress.43@yopmail.com', 'ns.test.stress.44@yopmail.com', 'ns.test.stress.45@yopmail.com', 'ns.test.stress.46@yopmail.com', 'ns.test.stress.47@yopmail.com', 'ns.test.stress.48@yopmail.com', 'ns.test.stress.49@yopmail.com', 'ns.test.stress.50@yopmail.com', 'ns.test.stress.51@yopmail.com', 'ns.test.stress.52@yopmail.com', 'ns.test.stress.53@yopmail.com', 'ns.test.stress.54@yopmail.com', 'ns.test.stress.55@yopmail.com', 'ns.test.stress.56@yopmail.com', 'ns.test.stress.57@yopmail.com', 'ns.test.stress.58@yopmail.com', 'ns.test.stress.59@yopmail.com', 'ns.test.stress.60@yopmail.com', 'ns.test.stress.61@yopmail.com', 'ns.test.stress.62@yopmail.com', 'ns.test.stress.63@yopmail.com', 'ns.test.stress.64@yopmail.com', 'ns.test.stress.65@yopmail.com', 'ns.test.stress.66@yopmail.com', 'ns.test.stress.67@yopmail.com', 'ns.test.stress.68@yopmail.com', 'ns.test.stress.69@yopmail.com', 'ns.test.stress.70@yopmail.com', 'ns.test.stress.71@yopmail.com', 'ns.test.stress.72@yopmail.com', 'ns.test.stress.73@yopmail.com', 'ns.test.stress.74@yopmail.com', 'ns.test.stress.75@yopmail.com', 'ns.test.stress.76@yopmail.com', 'ns.test.stress.77@yopmail.com', 'ns.test.stress.78@yopmail.com', 'ns.test.stress.79@yopmail.com', 'ns.test.stress.80@yopmail.com', 'ns.test.stress.81@yopmail.com', 'ns.test.stress.82@yopmail.com', 'ns.test.stress.83@yopmail.com', 'ns.test.stress.84@yopmail.com', 'ns.test.stress.85@yopmail.com', 'ns.test.stress.86@yopmail.com', 'ns.test.stress.87@yopmail.com', 'ns.test.stress.88@yopmail.com', 'ns.test.stress.89@yopmail.com', 'ns.test.stress.90@yopmail.com', 'ns.test.stress.91@yopmail.com', 'ns.test.stress.92@yopmail.com', 'ns.test.stress.93@yopmail.com', 'ns.test.stress.94@yopmail.com', 'ns.test.stress.95@yopmail.com', 'ns.test.stress.96@yopmail.com', 'ns.test.stress.97@yopmail.com', 'ns.test.stress.98@yopmail.com', 'ns.test.stress.99@yopmail.com', 'ns.test.stress.100@yopmail.com'];
const birthdate = "12/30/1980"
const mobile = "6478811607";
const insuranceMemberNumber = "ABVD12345678";
const mailingSuite = "309";
const street = "Rue des Jardins";
const city = "Abidjan";
const province = "Quebec";
const postalCode = "G1R4S9";
const arrivalDate = "08/09/2021";
const arrivelCanNumber = "ABC123";
const travelDocumentNumber = "CA123456";
const btnNext = '.button-container button';
var pace = (3000 * (agentId-1));

client
    .pause(pace+1)
    .resizeWindow(1280, 720)
    .rtcInfo("testRTC agent start - agent: %s room: %s", agentName, roomUrl)
    .url(roomUrl )
    .pause(5 * sec)  
    .waitForElementVisible('button[data-cy-join-now="true"]:enabled', 60 * sec)
    .pause(3 * sec)
    .click('button[data-cy-join-now="true"]')
    .rtcProgress("In  " + (roomUrl)

    // Give some time to collect media stats
    .pause(60 * sec)
     .useXpath()
        .waitForElementVisible('/html/body/app-root/app-login/div/div/div/app-federal-testing-signin/form/div/a',500000)
        .click('/html/body/app-root/app-login/div/div/div/app-federal-testing-signin/form/div/a')
        
        // screen 1 Enter Your Login Information
        .useCss()
        .waitForElementVisible("input[formcontrolname='Email']",500000)
        .waitForElementVisible("input[formcontrolname='ConfirmEmail']",500000)
        .waitForElementVisible("input[formcontrolname='Password']",500000)
        .waitForElementVisible("input[formcontrolname='ConfirmPassword']",500000)
        .setValue("input[formcontrolname='Email']", email[index])
        .setValue("input[formcontrolname='ConfirmEmail']", email[index])
        .setValue("input[formcontrolname='Password']", passWord)
        .setValue("input[formcontrolname='ConfirmPassword']", passWord)
        .waitForElementVisible(btnNext )
        .click(btnNext)
        

        // screen 2 Enter Your Personal Information
        .waitForElementVisible("input[formcontrolname='FirstName']",500000)
        .waitForElementVisible("input[formcontrolname='MiddleName']",500000)
        .waitForElementVisible("input[formcontrolname='LastName']",500000)
        .waitForElementVisible("input[formcontrolname='Birthdate']",500000)
        .waitForElementVisible("input[formcontrolname='MobilePhone']",500000)
        .setValue("input[formcontrolname='FirstName']",fistName[index])   
        .setValue("input[formcontrolname='MiddleName']",midllename)
        .setValue("input[formcontrolname='LastName']",lastName) 
        .setValue("input[formcontrolname='Birthdate']",birthdate)  
        .click("div[role='combobox']") 
        .click("#iti-0__item-ca-preferred")  
        .setValue("input[formcontrolname='MobilePhone']" , mobile) 
        .click(btnNext) 
         
        
        // screen 3 Enter Your Provincial Health Information
        .useXpath()
        .waitForElementVisible("//*[@id='mat-select-0']/div/div[2]",500000)
        .click("//*[@id='mat-select-0']/div/div[2]") 
        .useCss()
        .click("#mat-option-1") 
        .useXpath()
        .click("//*[@id='mat-select-2']/div/div[2]")
        .useCss()
        .pause(1000)
        .click("#mat-option-14") 
        .waitForElementVisible("input[formcontrolname='Insurance_Member_Number__c']", 50000)
        .setValue("input[formcontrolname='Insurance_Member_Number__c']", insuranceMemberNumber)
        .click(btnNext) 

        //screen 4 Enter Your Address Information  
        .waitForElementVisible("input[formcontrolname='Mailing_Suite__c']", 50000)
        .waitForElementVisible("input[formcontrolname='MailingStreet']", 50000)
        .waitForElementVisible("input[formcontrolname='MailingCity']", 50000)
        .waitForElementVisible("input[formcontrolname='MailingPostalCode']", 50000)
        .setValue("input[formcontrolname='Mailing_Suite__c']", mailingSuite)
        .setValue("input[formcontrolname='MailingStreet']", street)
        .setValue("input[formcontrolname='MailingCity']", city)
        .useXpath()
        .click("/html/body/app-root/app-registration-side-buttons/div/div/form/mat-form-field[5]/div/div[1]/div[3]/mat-select/div/div[1]/span")
        .pause(1000)  
        .click('/html/body/div[2]/div[2]/div/div/div/mat-option[1]/span') 
        .click("//*[@id='Address']/form/mat-form-field[6]/div/div[1]/div[3]")
        .pause(1000)
        .useCss() 
        .click("#mat-option-279 > span")
        .setValue("input[formcontrolname='MailingPostalCode']", postalCode)
        .click(btnNext) 
          
        //screen 5 Review Details
        .waitForElementVisible(btnNext, 50000)
        .click(btnNext)  
        
        //screen 6 Disclaimer
        .waitForElementVisible("button.mat-focus-indicator.mat-flat-button.mat-button-base.mat-primary", 50000)
        .click("button.mat-focus-indicator.mat-flat-button.mat-button-base.mat-primary")
        

        //screen 7 Enter Border Crossing Details
        .useXpath()
        .waitForElementVisible("/html/body/app-root/app-main-token-refresh-check/app-add-trip-side-buttons/div/div[2]/form/mat-form-field/div/div[1]/div[3]",50000)
        .click("/html/body/app-root/app-main-token-refresh-check/app-add-trip-side-buttons/div/div[2]/form/mat-form-field/div/div[1]/div[3]")
        .pause(1000)
        .click("/html/body/div[2]/div[2]/div/div/div/mat-option[1]/span")
        .useCss()
        .click(btnNext)  

        //screen 8 Your Travel Information?
        .useXpath()
        .waitForElementVisible("/html/body/app-root/app-main-token-refresh-check/app-add-trip-side-buttons/div/div[2]/form/mat-form-field[1]/div/div[1]/div[3]", 500000)
        .click("/html/body/app-root/app-main-token-refresh-check/app-add-trip-side-buttons/div/div[2]/form/mat-form-field[1]/div/div[1]/div[3]")
        .pause(1000)
        .click("/html/body/div[2]/div[2]/div/div/div/mat-option[1]")
        .click("/html/body/app-root/app-main-token-refresh-check/app-add-trip-side-buttons/div/div[2]/form/mat-form-field[2]/div/div[1]/div[3]/mat-select/div/div[2]")
        .pause(1000)
        .click("/html/body/div[2]/div[2]/div/div/div/mat-option[2]")
        .click("/html/body/app-root/app-main-token-refresh-check/app-add-trip-side-buttons/div/div[2]/form/mat-form-field[3]/div/div[1]/div[3]/mat-select/div/div[2]")    
        .pause(1000)
        .click("/html/body/div[2]/div[2]/div/div/div/mat-option[1]/span")
        .useCss()
        .waitForElementVisible("input[formcontrolname='Arrival_Date__c']",50000)
        .setValue("input[formcontrolname='Arrival_Date__c']", arrivalDate)
        .click(btnNext)
        
        //screen 9
        .useXpath()
        .waitForElementVisible("//*[@id='Quarantine Address']/div[2]/div[3]/button", 500000)
        .click("//*[@id='Quarantine Address']/div[2]/div[3]/button")
        .useCss()
        .click(btnNext) 

        //screen 10
        .useXpath()
        .waitForElementVisible("//*[@id='Review']/div[2]/button[1]", 500000)
        .click("//*[@id='Review']/div[2]/button[1]")

        //screen 11 Travel Documents
        .useCss()
        .waitForElementVisible("input[formcontrolname='ArriveCan_Receipt_Number__c']", 500000)
        .setValue("input[formcontrolname='ArriveCan_Receipt_Number__c']", arrivelCanNumber)
        .useXpath()
        .click("/html/body/app-root/app-main-token-refresh-check/app-add-traveller-side-buttons/div/div[2]/form/mat-form-field[2]/div/div[1]/div[3]/mat-select/div/div[2]")
        .pause(1000)
        .click("/html/body/div[2]/div[2]/div/div/div/mat-option[1]")
        .useCss()
        .waitForElementVisible("input[formcontrolname='Travel_Document_Number__c']", 500000)
        .setValue("input[formcontrolname='Travel_Document_Number__c']", travelDocumentNumber)
        .useXpath()
        .click("/html/body/app-root/app-main-token-refresh-check/app-add-traveller-side-buttons/div/div[2]/form/mat-form-field[4]/div/div[1]/div[3]")
        .pause(1000)
        .click('/html/body/div[2]/div[2]/div/div/div/mat-option[1]') 
        .useCss()
        .click(btnNext) 
        
        //screen 12
        .useXpath()
        .waitForElementVisible("//*[@id='Review']/div[2]/button[1]", 500000)
        .click("//*[@id='Review']/div[2]/button[1]")

         //screen 13
         .waitForElementVisible("//*[@id='Add Travellers']/div[3]/button[1]", 500000)
         .click("//*[@id='Add Travellers']/div[3]/button[1]")

         //screen 14
         .waitForElementVisible("//*[@id='Choose Location']/div[3]/div[3]", 500000)
         .click("//*[@id='Choose Location']/div[3]/div[3]")

         //screen 15
         .waitForElementVisible("//*[@id='Continue']/div[2]/span/a", 500000)
         .click("//*[@id='Continue']/div[2]/span/a")

         //screen 16
         .waitForElementVisible("/html/body/app-root/app-main-token-refresh-check/app-main-dashboard/div/div[1]/div[3]/span", 500000)
         .moveToElement("/html/body/app-root/app-main-token-refresh-check/app-main-dashboard/div/div[1]/div[3]/span", 50, 50)
         .pause(1000)
         .mouseButtonClick('left')
         


        //screen 17 
        .useCss()
        .waitForElementVisible(btnNext, 50000)
        .click(btnNext) 

        //screen 18
        .useXpath()
        .waitForElementVisible("//*[@id='Call Checklist']/div[3]/button[1]", 50000)
        .click("//*[@id='Call Checklist']/div[3]/button[1]")

        //screen 19
        .waitForElementVisible("//*[@id='Confirm Test Kits']/div/button[1]", 50000)
        .click("//*[@id='Confirm Test Kits']/div/button[1]")

        //screen 20
        .waitForElementVisible("//*[@id='Confirm Address']/div[5]/button[1]", 50000)
        .click("//*[@id='Confirm Address']/div[5]/button[1]")

        //screen 21
        .waitForElementVisible("/html/body/app-root/app-main-token-refresh-check/app-video-setup/div/div[2]/form/mat-form-field[1]/div/div[1]/div[3]/mat-select/div/div[2]")
        .click("/html/body/app-root/app-main-token-refresh-check/app-video-setup/div/div[2]/form/mat-form-field[1]/div/div[1]/div[3]/mat-select/div/div[2]")
        .pause(1000)
        .click("/html/body/div[2]/div[2]/div/div/div/mat-option[1]/span")
        .useCss()
        .click(btnNext) 

        //screen 21
        .useXpath()
        .waitForElementVisible("//*[@id='Join Waiting Room']/div[2]/button[1]", 50000)
        .click("//*[@id='Join Waiting Room']/div[2]/button[1]")

        //screen 22
        .waitForElementVisible("//*[@id='root']/div/div/div/div/div[2]/div/div[1]/div[1]/div/div[1]/video",500000) 
        .pause(60 * sec)      