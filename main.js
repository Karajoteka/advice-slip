const api = axios.create({
  baseURL: 'https://api.adviceslip.com/advice?',
  headers: {
    'Content-Type': 'application(json;charset=utf-8)',
  },
});

const advice = document.querySelector('.advice');
const adviceNumber = document.querySelector('#advice-number');
const button = document.querySelector('.button');

button.addEventListener('click', showNewAdvice);

async function showNewAdvice() {
  try {
    const response = await api.get('/');
    const adviceData = response.data.slip;

    advice.innerText = `"${adviceData.advice}"`;
    adviceNumber.innerText = `${adviceData.id}`;
  } catch (error) {
    console.log('Ha ocurrido un error al obtener el consejo', error);
  } 
}

showNewAdvice();

