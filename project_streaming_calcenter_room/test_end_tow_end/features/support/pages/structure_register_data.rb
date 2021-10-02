class Structure_register_data < SitePrism::Page

    def initialize
       # mapping of form elements
       #inputs
       @input_email = "input[formcontrolname='Email']"
       @input_confirm_email = "input[formcontrolname='ConfirmEmail']"
       @input_password = "input[formcontrolname='Password']"
       @input_confirm_password = "input[formcontrolname='ConfirmPassword']"
       @input_fist_name = "input[formcontrolname='FirstName']"
       @input_middle_name = "input[formcontrolname='MiddleName']"
       @input_last_name = "input[formcontrolname='LastName']"
       @input_birthdate = "input[formcontrolname='Birthdate']"
       @input_mobile_phone = "input[formcontrolname='MobilePhone']" 
       @input_insurance_member_number = "input[formcontrolname='Insurance_Member_Number__c']"
       @input_mailing_suite_number = "input[formcontrolname='Mailing_Suite__c']"
       @input_street = "input[formcontrolname='MailingStreet']"
       @input_city =  "input[formcontrolname='MailingCity']"
       @input_mailing_postal_code = "input[formcontrolname='MailingPostalCode']"
       @input_arrival_date = "input[formcontrolname='Arrival_Date__c']"
       @input_arriveCan_receipt_number = "input[formcontrolname='ArriveCan_Receipt_Number__c']"
       @input_travel_document_number = "input[formcontrolname='Travel_Document_Number__c']"
         
       #button select
       @select_button_country = "div[role='combobox']"
       @select_button_country_screen_4 = "/html/body/app-root/app-registration-side-buttons/div/div/form/mat-form-field[5]/div/div[1]/div[3]/mat-select/div/div[1]/span"
       @select_button_sex = "//*[@id='mat-select-0']/div/div[2]"
       @select_button_provicial = "//*[@id='mat-select-2']/div/div[2]"
       @select_button_provicial_screen_4 = "//*[@id='Address']/form/mat-form-field[6]/div/div[1]/div[3]"
       @select_button_location = "/html/body/app-root/app-main-token-refresh-check/app-add-trip-side-buttons/div/div[2]/form/mat-form-field/div/div[1]/div[3]"
       @select_button_arriving_from = "/html/body/app-root/app-main-token-refresh-check/app-add-trip-side-buttons/div/div[2]/form/mat-form-field[1]/div/div[1]/div[3]"  
       @select_button_port_entry = "/html/body/app-root/app-main-token-refresh-check/app-add-trip-side-buttons/div/div[2]/form/mat-form-field[2]/div/div[1]/div[3]/mat-select/div/div[1]" 
       @select_button_airport = "#mat-select-14 > div > div.mat-select-arrow-wrapper.ng-tns-c109-33"
       @select_button_document_type = "#mat-select-18 > div > div.mat-select-arrow-wrapper.ng-tns-c109-44"
       @select_button_country_screen_10 = "#mat-select-20 > div > div.mat-select-arrow-wrapper.ng-tns-c109-46"
       @select_button_language = "/html/body/app-root/app-main-token-refresh-check/app-video-setup/div/div[2]/form/mat-form-field[1]/div/div[1]/div[3]/mat-select/div/div[2]"


       #button
       @button_filling_form_location_home = 'div.next-options-container div:nth-child(3)'
       @begin_your_virtual_appointment ="/html/body/app-root/app-main-token-refresh-check/app-main-dashboard/div/div[1]/div[3]/span" 
    end

    # navigation methods - button
    def nav_sign_up
        click_link 'Sign up'
    end

    def btnext
        click_button "Next"
    end

    def i_agree 
        click_button "I Agree"
    end

    def existing_home_address
        click_button "Yes, use this address."
    end

    def confirm_details
        click_button "Confirm Details"
    end

    def confirm
        click_button "Confirm"
    end

    def continue 
        click_button "Continue"
    end

    def filling_form_location_home
        find( @button_filling_form_location_home).click
    end

    def i_have
        click_button "I have everything I need"
    end

    def dashboard
        find('#Continue div:nth-child(2) span a').click
    end

    def complete_checkin
        click_button "Complete Virtual Check-in"
    end

    def join_now
        click_button "Join Now"
    end
    
    # selection methods 
    def option_sex option
        find(:xpath,@select_button_sex).click  
        case option
            when  'Male'
                find("#mat-option-1").click
            when  'Female'
                find("#mat-option-2").click
            when  'Non-binary'
                find("#mat-option-3").click
        end

    end

    def option_country option
        option = option.downcase
        find(@select_button_country).click
        find("#iti-0__item-#{option[0,2]}-preferred").click
    end

    def option_country_screen_4 option
        option = option.downcase
        find(:xpath, @select_button_country_screen_4).click
        find(:xpath,'/html/body/div[2]/div[2]/div/div/div/mat-option[1]/span').click
    end

    def option_country_screen_10 option
        option = option.downcase
        find(@select_button_country_screen_10).click
        find('#mat-option-551').click
    end

    def option_provicial option
        find(:xpath,@select_button_provicial).click
        find("#mat-option-14").click
    end

    def option_location option
        find(:xpath,@select_button_location).click
        find(:xpath,"/html/body/div[2]/div[2]/div/div/div/mat-option[1]/span").click
    end

    def option_provicial_screen_4 option
        find(:xpath,@select_button_provicial_screen_4).click
        find("#mat-option-279 > span").click
    end

    def option_arriving_from  option
        find(:xpath, @select_button_arriving_from).click
        find(:xpath, "/html/body/div[2]/div[2]/div/div/div/mat-option[1]/span").click
    end

    def option_port_entry option 
        find(:xpath, @select_button_port_entry).click
        find("div[role='listbox'] #mat-option-535").click
    end

    def option_airport option
        find(@select_button_airport).click
        find( "div[role='listbox'] #mat-option-536").click
    end

    def option_document_type option
        find(@select_button_document_type).click
        find("#mat-option-553").click
    end

    def option_language option
        find(:xpath, @select_button_language).click
        find(:xpath,"/html/body/div[2]/div[2]/div/div/div/mat-option[1]/span").click
    end

    # application interaction methods
    def fill_form_screen_1 user_information
        find(@input_email).set user_information[0]
        find(@input_confirm_email).set user_information[1]
        find(@input_password).set user_information[2]
        find(@input_confirm_password).set user_information[3]    
    end

    def fill_form_screen_2 user_information 
        find(@input_fist_name).set user_information[4] 
        find(@input_middle_name).set user_information[5] 
        find(@input_last_name).set user_information[6] 
        find(@input_birthdate).set user_information[7] 
        option_country user_information[8] 
        find(@input_mobile_phone).set user_information[9] 
    end

    def fill_form_screen_3 user_information 
        option_sex user_information[10] 
        option_provicial user_information[11] 
        find(@input_insurance_member_number).set user_information[12] 
    end

    def fill_form_screen_4 user_information 
      find(@input_mailing_suite_number).set user_information[15]  
      find(@input_street).set user_information[13] 
      find(@input_city).set user_information[14]
      option_country_screen_4 user_information[16]
      option_provicial_screen_4 user_information[17] 
      find(@input_mailing_postal_code).set user_information[18] 
     end

     def fill_form_screen_7 user_information
        option_location user_information[19] 
     end

     def fill_form_screen_8 user_information
        option_arriving_from user_information[20] 
        option_port_entry user_information[21]
        option_airport user_information[22]
        find(@input_arrival_date).set user_information[23]
     end

     def fill_form_screen_10 user_information
        find(@input_arriveCan_receipt_number).set user_information[24]
        option_document_type user_information[25]
        find(@input_travel_document_number).set user_information[26]
        option_country_screen_10 user_information[27]
     end

    def enter_the_room_for_care user_information

        find(:xpath, @begin_your_virtual_appointment).hover
        sleep 5
        find(:xpath, @begin_your_virtual_appointment).click
        btnext
        i_have
        confirm
        confirm
        option_language user_information[22]
        btnext
        complete_checkin
        sleep 5       
    end

     def capture_room
        return current_url
     end

end