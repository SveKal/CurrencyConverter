getData();


let convert = document.getElementById('btn');
convert.addEventListener('click', Calc);

async function fillList()
{
    let currencies = JSON.parse(sessionStorage.getItem('rates'));
    let base = document.getElementById('base');
    let target = document.getElementById('target');

    for(const [key, values] of Object.entries(currencies.rates).sort())
    {
        let option = document.createElement('option');
        option.value = values;
        option.innerHTML = key;
        base.appendChild(option);

        let option2 = document.createElement('option');
        option2.value = values;
        option2.innerHTML = key;
        target.appendChild(option2);
    }
}

function Calc(){
    let currencyInput = document.getElementById('inputBase').value;
    let base = document.getElementById('base').value;
    let target = document.getElementById('target').value;
    
    document.getElementById('output').value = (currencyInput / base * target).toFixed(2);
}

