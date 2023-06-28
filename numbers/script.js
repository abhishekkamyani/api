numValue.addEventListener('change', handleApi);

async function handleApi(){
    const num = this.value;
    desc.innerText = 'Loading!...';
    const response = await fetch(`http://numbersapi.com/${num}`);
    const data = await response.text();
    desc.innerText = data;
}