Given('access to the Dynacare application') do
    visit ''
    @nav =  Structure_register_data.new
    @user_information = []
end

When('choosing the Sign up option') do
    @nav.nav_sign_up
end

When('by filling in the first screen of the form with the following information email {string}, email confirmation {string}, password {string} and confirm password {string}') do |email, 
                                                                                                                                                confirm_email, password, conform_password|
    @user_information << email
    @user_information << confirm_email
    @user_information << password
    @user_information << conform_password
    @nav.fill_form_screen_1  @user_information
    @nav.btnext
end

When('fill in the data for the second screen enter Your Personal Information first name {string}, middle name {string}, last name {string}, date of birth {string}, country {string} and cell number {string},') do |fist_name, 
    middle_name, last_name, date_of_birth, country, cell_number|

    @user_information << fist_name
    @user_information << middle_name
    @user_information << last_name
    @user_information << date_of_birth
    @user_information << country
    @user_information << cell_number
    @nav.fill_form_screen_2  @user_information
    @nav.btnext
end

When('fill in the data referring to the third key enter Your Provincial Health Information sex {string}, provincial {string}, insurance member number {string}') do |sex, 
    provincial, insurance_member_number|

    @user_information << sex
    @user_information << provincial
    @user_information << insurance_member_number
    @nav.fill_form_screen_3  @user_information
    @nav.btnext
end

When('fill in the form on the fourth screen, enter Your Address Information, field street {string}, city {string}, property number {string}, country {string}, province {string} and postal code {string}') do |street, 
    city, number, country, province, postal_code|
    
    @user_information << street
    @user_information << city
    @user_information << number
    @user_information << country
    @user_information << province
    @user_information << postal_code
    @nav.fill_form_screen_4 @user_information
    @nav.btnext
end

When('being on the fifth Personal Information screen to confirm the information') do
    @nav.btnext
end

When('the sixth screen, the registration term Register Your Account is displayed, making it necessary to accept the terms to continue the process') do
    @nav.i_agree
end

When('accepting the terms in the seventh screen Enter Border Crossing Details, it is necessary to indicate the location {string}') do |location|
    @user_information << location
    @nav.fill_form_screen_7 @user_information
    @nav.btnext
 end

When('the eighth screen fill in the fields referring to Your Travel Information? as it will be necessary to inform some options, where is it arriving {string}. which port of entry {string}, which airport arrived {string} and arrival date {string}') do |ariving, 
    port_of_entry, airport_arrived, arrival_date|                                                                                                                                     
                                
    @user_information << ariving
    @user_information << port_of_entry
    @user_information << airport_arrived
    @user_information << arrival_date
    @nav.fill_form_screen_8 @user_information
    @nav.btnext
end                                                                                                                                         
                                                                                                                                            
When('being on the ninth screen, confirmation of address is required for quarantine requirement of Government of Canada') do                
    @nav.existing_home_address  
    @nav.btnext 
    @nav.confirm_details                                                  
end                                                                                                                                         
                                                                                                                                            
When('on the tenth screen, confirmation of the documents, receipt number {string}, travel document type {string}, travel document number {string} and the issuing country {string} is required') do |receipt_number, 
    documen_type, document_number, country|  

    @user_information << receipt_number
    @user_information << documen_type
    @user_information << document_number
    @user_information << country
    @nav.fill_form_screen_10 @user_information 
    @nav.btnext                                                     
end                                                                                                                                         
                                                                                                                                            
When('on the eleventh screen it is necessary to review the details, where the imputed data being correct confirms the details') do          
    @nav.confirm_details                                                             
end                                                                                                                                         
                                                                                                                                            
When('on the twelfth screen of the application display the trip details continue to follow the flow') do                                    
    @nav.continue                                                             
end 

When('on the thirteenth screen of the application referring to the filling out of the form, the location where the filling in home is being carried out') do
    @nav.filling_form_location_home
end
                                                                                                                                            
When('being on the registration confirmation screen when choosing the dashboard option') do
   @nav.dashboard
end

When('while on the dashboard screen, a virtual service will be provided informing the language option {string}') do |language|
    @user_information << language
    @nav.enter_the_room_for_care @user_information 

end
   
                                                                                                                                   