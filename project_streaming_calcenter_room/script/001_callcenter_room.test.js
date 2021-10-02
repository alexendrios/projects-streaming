const romm = '?room=stress-001';

describe('Carrying out the service simulating patient and nurse', () => {

    it('Simulating patient access in the call center room' , (client) =>{
        client
            .windowHandles((results) => {
                var newWindow = results.value[0];
                client.switchWindow(newWindow)
            })
        client    
        .url(client.launch_url+romm)
        .saveScreenshot('./screenshot/simulation_patient/access_creation.png')
    }),

    it("Simulating the nurse's access in the call center room", (client) =>{
        client
            .openNewWindow('tab')
            .windowHandles((results) => {
                var newWindow = results.value[1];
                client.switchWindow(newWindow)
            });

        client    
        .url(client.launch_url+romm) 
        .saveScreenshot('./screenshot/nurse_simulation/access_creation.png')
        .pause(5000) 
        .element('css selector', 'div[class="jss97" ] button', function (result) {
            if (result.status === 0) {
                client
                    .click('div[class="jss97"] button')
            };
        });      
        client
        .pause(3000)
        .saveScreenshot('./screenshot/nurse_simulation/entering_the_service room.png')
        .windowHandles((results) => {
            var newWindow = results.value[0];
            client.switchWindow(newWindow)
        });

        client
        .element('css selector', 'div[class="jss97" ] button', function (result) {
            if (result.status === 0) {
                client
                    .click('div[class="jss97"] button')
            };
        });      
        client
        .saveScreenshot('./screenshot/simulation_patient/entering_the_service room.png')
        .pause(50000)
    })
});