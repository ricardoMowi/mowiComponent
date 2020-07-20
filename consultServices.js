import fetch from 'node-fetch';

export default function * consultServices(source,method,data) {
  const headers = {
    'Content-Type': 'application/json',
  };
  let options;
  if(data && method!='GET'){
    options = {
      method: method,
      credentials: 'same-origin',
      headers,
      body: JSON.stringify(data),
    }
  }else{
    options = {
      method: 'GET',
    }
  }
  console.log('consultServices',data);
  const result = yield fetch(`${process.env.API_BASE_URL}/${source}`, options)
    .then(res => res.json())
    .then(data => data)
    .catch(function error(error) {
        console.log('request failed', error); // error could either be a network or a runtime error
        return null;
    });
  return result;
}
