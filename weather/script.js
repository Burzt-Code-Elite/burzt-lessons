document.querySelector('button').addEventListener('click', async ()=>{
    const city = document.querySelector('input').value
    const url = `https://api.weatherapi.com/v1/current.json?key=333db0046b1e44018cc131847230209&q=${city}&aqi=no`
    const res = await fetch(url)
    const data = await res.json()
    const {current} = data
    const temp = current.temp_c
    const condition = current.condition.text
    const icon = current.condition.icon
    const wind = current.wind_kph

    document.querySelector('#result').innerHTML = `
        <div class="card">
            <img src="${icon}" alt="icon">
            <h1>${temp}°C</h1>
            <p>${condition}</p>
            <p>Wind: ${wind} kph</p>
        </div>
    `
})
