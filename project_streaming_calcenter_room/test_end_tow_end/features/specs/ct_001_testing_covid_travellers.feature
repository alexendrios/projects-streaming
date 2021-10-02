#language:en

Feature: CT- 01 register - COVID-19 Testing for Travellers
  
Scenario: COVID-19 Testing for Travellers with the supervision of a Dynacare healthcare worker - register - making an appointment
  Given access to the Dynacare application
  When choosing the Sign up option
  And by filling in the first screen of the form with the following information email "ns.test.scripy126@yopmail.com", email confirmation "ns.test.scripy126@yopmail.com", password "12345678" and confirm password "12345678"
  And fill in the data for the second screen enter Your Personal Information first name "jhon", middle name "smith", last name "snider", date of birth "12/30/1980", country "Canada" and cell number "6478811607",
  And fill in the data referring to the third key enter Your Provincial Health Information sex "Male", provincial "Quebec", insurance member number "ABVD12345678"
  And fill in the form on the fourth screen, enter Your Address Information, field street "Rue des Jardins", city "Abidjan", property number "300", country "Canada", province "Quebec" and postal code "G1R4S9"
  And being on the fifth Personal Information screen to confirm the information
  And the sixth screen, the registration term Register Your Account is displayed, making it necessary to accept the terms to continue the process
  And accepting the terms in the seventh screen Enter Border Crossing Details, it is necessary to indicate the location "Canadian Airport"
  And the eighth screen fill in the fields referring to Your Travel Information? as it will be necessary to inform some options, where is it arriving "United States of America". which port of entry "Quebec", which airport arrived "Pierre Elliott Trudeau de Montreal International Airport" and arrival date "08/06/2021"
  And being on the ninth screen, confirmation of address is required for quarantine requirement of Government of Canada
  And on the tenth screen, confirmation of the documents, receipt number "ABC123", travel document type "Passport", travel document number "CA123456" and the issuing country "Canada" is required
  And on the eleventh screen it is necessary to review the details, where the imputed data being correct confirms the details
  And on the twelfth screen of the application display the trip details continue to follow the flow
  And on the thirteenth screen of the application referring to the filling out of the form, the location where the filling in home is being carried out
  And being on the registration confirmation screen when choosing the dashboard option
  And while on the dashboard screen, a virtual service will be provided informing the language option "english"
 #Then the Maker is asked to score
