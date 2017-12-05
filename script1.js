
// Event
var alphaExp = /[a-zA-Z]/;
         { do {var person_name= prompt('What is your name?', 'Someone');
              }
                while (!person_name.match(alphaExp));
        }

            {
                do {
                    var time = prompt('What time will you be free today?', '7pm');
                }
                while (time === null);
            }


                        {do {
                            var event = prompt('What event do you want to have today?', 'party');
                        }
                            while(event === null);
                        }



                                {do {
                                    var place = prompt ('Where do you wanna have a ' + event + ' ?','John`s house');
                                }
                                while(place === null);
                                }


                                    var confirm_event_place = confirm ('Are you ready visit' +' a ' + event + ' in ' + place + '?');


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


// Currency exchange
{
    do{
        alert("Currency converter! Must input only the  numbers");
        var USD = prompt ('Please enter the appropriate dollar amount',100);}

    while(isNaN(USD)||USD === null);
}


{
    do { alert("Currency converter! Must input only the  numbers");
        var EUR = prompt('Please enter the appropriate euro amount', 50);}

    while (isNaN(EUR)||EUR === null);
}

var OneDollar = 27.2;
var OneEuro = 32.2;
var USDtoUAN = (USD * OneDollar).toFixed(2);
var EURtoUAN = (EUR * OneEuro).toFixed(2);
var EURtoUSD = 1.1858 ;

alert(EUR + ' euros are equal ' + EURtoUAN + ' grns '+ ',' + USD + ' dollars are equal ' + USDtoUAN +
    ' grns '+ ',' + 'one euro is equal ' + EURtoUSD + ' dollars' );



