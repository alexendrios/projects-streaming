const fistName = "hon"
const midllename = "pierre"
const lastName = "smith"
const email = "ns.test.script2@yopmail.com"
const passWord = "12345678"
const birthdate = "12/30/1980"
const mobile = "6478811607"
const insuranceMemberNumber = "ABVD12345678"
const mailingSuite = "309"
const street = "Rue des Jardins"
const city = "Abidjan"
const province = "Quebec"
const postalCode = "G1R4S9"
const arrivalDate = "08/09/2021"
const arrivelCanNumber = "ABC123"
const travelDocumentNumber = "CA123456"
const btnNext = '.button-container button'

describe('Carrying out the service simulating patient and nurse', () => {

    it('Simulating patient access in the call center room' , (client) =>{
        client
            .windowHandles((results) => {
                var newWindow = results.value[0];
                client.switchWindow(newWindow)
            })
        client    
        .url('https://dev.dynacare.nursesimple.com/en/login/signin')
        .useXpath()
        .waitForElementVisible('/html/body/app-root/app-login/div/div/div/app-federal-testing-signin/form/div/a',500000)
        .click('/html/body/app-root/app-login/div/div/div/app-federal-testing-signin/form/div/a')
        
        // screen 1 Enter Your Login Information
        .useCss()
        .waitForElementVisible("input[formcontrolname='Email']",500000)
        .waitForElementVisible("input[formcontrolname='ConfirmEmail']",500000)
        .waitForElementVisible("input[formcontrolname='Password']",500000)
        .waitForElementVisible("input[formcontrolname='ConfirmPassword']",500000)
        .setValue("input[formcontrolname='Email']", email)
        .setValue("input[formcontrolname='ConfirmEmail']", email)
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
        .setValue("input[formcontrolname='FirstName']",fistName)   
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
        .pause(1000)
        
        
        client.url(function(result){
           var url_room  = result.value;
           client
           .openNewWindow('tab')
           .windowHandles((results) => {
                   var newWindow = results.value[1];
                   client.switchWindow(newWindow)
           });
   
           client
           .url(url_room) 
           .useXpath()
           .waitForElementVisible("//*[@id='root']/div/div/div/div/div[2]/div/div[2]/div/div[2]/button", 5000000)
           .pause(9000)
           .click("//*[@id='root']/div/div/div/div/div[2]/div/div[2]/div/div[2]/button")
        })

        client
        .windowHandles((results) => {
            var newWindow = results.value[0];
            client.switchWindow(newWindow)
        });

        client
        .useXpath()
        .waitForElementVisible("//*[@id='root']/div/div/div/div/div[2]/div/div[2]/div/div[2]/button", 5000000)
        .click("//*[@id='root']/div/div/div/div/div[2]/div/div[2]/div/div[2]/button")
        .pause(10000)

      
    })

});