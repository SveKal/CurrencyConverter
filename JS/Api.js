const api = (function () {

    async function getRates(url)
    {
        let promise = await fetch(url);
        let data = await promise.json();
        return data;        
    }

    return {
        getRates: getRates
    };
})();
