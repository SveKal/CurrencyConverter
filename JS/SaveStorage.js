//caching API data
async function getData(){

    let url = "https://api.exchangeratesapi.io/latest?base=SEK";
    let result = await api.getRates(url);
    sessionStorage.setItem('rates', JSON.stringify(result));
    //setInterval to limit time for storage usage to an hour
    setInterval(getData, 60*60*1000);
    fillList();
}


