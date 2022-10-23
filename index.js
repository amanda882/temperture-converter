let calculateBtn = document.getElementById('calculateBtn');
            console.log(calculateBtn);
            calculateBtn.addEventListener('click', getTemperature);


            function getTemperature() {
                console.log('calculateBtn was clicked');
                let fInput = document.getelementbyid('fahrenheit').value;
	            let celsius = (fInput -32) * 5 /9
	            console.log(typeof celsius);
	            console.log(celsius);
	            document.getelementbyid('Celsius').value = celsius;	
            } 
}