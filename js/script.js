
document.querySelector('#formButton').addEventListener('click', function (e) {
    e.preventDefault(); // Evita di ricaricare la pagina se usato nel form

    let userAge = document.getElementById('userage').value;
    userAge = parseInt(userAge);
    console.log('userAge', userAge, typeof userAge);


    let userDistance = document.getElementById('userdistance').value;
    userDistance = parseInt(userDistance);
    console.log('userDistance ', userDistance, typeof userDistance);
    
    let priceKm = 0.21;
    let totalPrice = 0;


    // if(userAge = isNaN) {

    //     document.querySelector('#errorage').innerHTML = 'Inserisci età valida'

        


    // }  
    
    // if(userDistance = isNaN || userDistance < 1) {
    //     document.querySelector('#errorkm').innerHTML = 'Inserisci distanza valida'

        

    // } 




    if(userDistance >= 1) {
         totalPrice = priceKm * userDistance;

         
        } 
        
        if(userAge < 18) {
            totalPrice = totalPrice - totalPrice * 0.2;
            
        } 
        
        if(userAge >= 65) {
        totalPrice = totalPrice - totalPrice * 0.4;
    }

    document.querySelector('.age-result').innerHTML = userAge;

    document.querySelector('.price-result').innerHTML = totalPrice.toFixed(2);

    document.querySelector('.km-result').innerHTML = userDistance;







})


