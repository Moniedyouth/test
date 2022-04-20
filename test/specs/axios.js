const axios = require('axios').default;

const config = {
  headers: {'content-type': 'application/json', 'Mailsac-Key': 'k_eugCuq1fBevjIbY5ccFi05DU85ER0akA9csa3'}
};

describe('', () =>{
it('', async () => {
  const resp = await axios.post('https://mailsac.com/api/validations/addresses',{emails: ['max1794.k@gmail.com']}, config);
  console.log('resp', resp);
});
});