const selectedCountry = document.getElementById('select-country');
const selectedCountryOpt = selectedCountry.options[selectedCountry.selectedIndex];

selectedCountry.addEventListener('change',weatherStatus);


function weatherStatus(){
    console.log('Clicked');
    
    const selectedCountry = document.getElementById('select-country');
    const selectedCountryOpt = selectedCountry.options[selectedCountry.selectedIndex];
    const selectedText = selectedCountryOpt.text;

    const hxr = new XMLHttpRequest();
    const url = `https://api.weatherapi.com/v1/current.json?key=a27da3ed66e5471f8c090438232606&q=${selectedText}`;  
    hxr.open('GET',url,true);

    hxr.onprogress = function(){
       console.log('On Progress');
    }

    hxr.onload = function(){
        if(this.status === 200){
            console.log('Responded');
            const objs = JSON.parse(this.responseText);
            const location = objs['location'];
            
            const city = document.getElementById('location');
            const cel = document.getElementById('cel');
            const far = document.getElementById('far');

            city.innerText = `${location.name} ${location.region}, ${location.country}`;
            
            const current = objs['current'];
            cel.innerText = `${current.temp_c} Degree Celsius`;
            far.innerText = `${current.temp_f} Degree Fahrenheit`;
            
            const condition = current.condition;
            const img = document.getElementById('condition-img');
            const c_text = document.getElementById('condition-text');
            c_text.innerText = condition.text;
            img.setAttribute('src',condition.icon);
        }
        else{
            console.log('Error Occured');
        }
    }
    hxr.send();
    console.log('finished');
}
weatherStatus();