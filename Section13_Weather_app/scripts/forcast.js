const key = 'NgkgMcjHJvhXwXyMfeDg5wAqkuAPldm7';

// function to get city 
const getCity = async(city) => {
    const base_url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query_parameter = `?apikey=${key}&q=${city}`;

    let response = await fetch(base_url + query_parameter);
    let data = await response.json();

    return data[0];
}

getCity('Adelaide').then(data => {
    console.log(data);
}).catch(err => {
    console.log('Error to fetch data', err)
})