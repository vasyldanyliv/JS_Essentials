
        // Event
        // regular expressions
        var alphaExp1 = /^[a-zA-Z ]+$/;
        var alphaExp2 = /^[0-9]+$/;
        var alphaExp3 = /^[a-zA-Z ]+$/;


         { do {var person_name= prompt('What is your name?', 'Someone');
              }
                while (!person_name.match(alphaExp1) || person_name ==='' || person_name=== null );
        }

                                         // choose of time
                                    {
                                        function myFunction() {
                                            var today = new Date();
                                            var realTime = today.getHours();
                                            var time = prompt('Now it`s ' + today.getHours() + ' o`clock .' + ' What time will you be free today after ' + realTime + ' ?', realTime);
                                            // time.toDateString();
                                            this.time=time;
                                            if (time === null || time === '' || !time.match(alphaExp2) || time > 24 || time < 0 || time == realTime) {
                                                alert('Please, enter correct time again, 0-24');
                                                myFunction();
                                            }

                                            else {
                                                alert("Congratulations! You have chosen a time as: " + time);
                                            }
                                        }

                                        myFunction();
                                    }

                                    // choose an event

                                                {do {
                                                    var event = prompt('What event do you want to have today?', 'party');
                                                }
                                                    while(event === null || event ==='' || !event.match(alphaExp1));
                                                }


                                                        // choose a place
                                                        {do {
                                                            var place = prompt ('Where do you wanna have a ' + event + ' ?','Johns house');
                                                        }
                                                        while(place === null || place ===null || !place.match(alphaExp3));
                                                        }


                                                        // confirm an event
                                var confirm_event_place = confirm ('Are you ready visit' +' a ' + event + ' in ' + place + ' at ' + time +  '?');

                                if (confirm_event_place){
                                    alert(person_name + ' '+ ' will have a ' + event + " " +  time + ' ' + ' in ' + ' ' + place);
                                    console.log(person_name + ' '+ ' will have a ' + event + " " +  time + ' ' + ' in ' + ' ' + place);
                                }

                                        else {
                                            var DoubleConfirm_place = confirm('Are you sure ?');


                                                if (DoubleConfirm_place) {
                                                    alert('Have a nice day,body!!!');
                                                    console.log('Have a nice day,body!!!');
                                                }

                                                        else {
                                                            alert(person_name + ' ' + ' will have a ' + event + " " + time + ' ' + ' in ' + ' ' + place);
                                                            console.log(person_name + ' ' + ' will have a ' + event + " " + time + ' ' + ' in ' + ' ' + place);

                                                        }
                                                    }


                                                     //Currency exchange
                                {
                                    do{
                                        alert("Currency converter! Must input only the  numbers");
                                        var USD = prompt ('Please enter the appropriate dollar amount',100);}

                                    while(isNaN(USD)||USD === null || USD==='');
                                }


                                            {
                                                do { alert("Currency converter! Must input only the  numbers");
                                                    var EUR = prompt('Please enter the appropriate euro amount', 50);}

                                                while (isNaN(EUR)||EUR === null ||EUR==='');
                                            }

                                                var OneDollar = 27.2;
                                                var OneEuro = 32.2;
                                                var USDtoUAN = (USD * OneDollar).toFixed(2);
                                                var EURtoUAN = (EUR * OneEuro).toFixed(2);
                                                var EURtoUSD = 1.1858 ;

                                                alert(EUR + ' euros are equal ' + EURtoUAN + ' grns '+ ',' + USD + ' dollars are equal ' + USDtoUAN +
                                                    ' grns '+ ',' + 'one euro is equal ' + EURtoUSD + ' dollars' );



