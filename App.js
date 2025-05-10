// import logo from './logo.svg'

// function Btn(){
//     return(
//         <button>Я кнопка</button>
//     );
// }

// export default function myApp(){
//     return(
//         <div>
//         <h1>Я заголовок!</h1>

//         <Btn/>
//         </div>
//     );
// }






// Создаем элементы
const createElement = (tag, className, innerHTML) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
};

// Создаем заголовок
const header = createElement('header');
header.appendChild(createElement('h1', null, 'Моана'));
header.appendChild(createElement('p', null, 'Титул: Хранительница океана. Первопроходец'));

// Создаем карточки
const createCard = (imgSrc, title, text) => {
    const card = createElement('div', 'card');
    card.style.width = '18rem';

    const img = createElement('img', 'card-img-top');
    img.src = imgSrc;
    img.alt = title;

    const cardBody = createElement('div', 'card-body');
    cardBody.appendChild(createElement('h5', 'card-title', title));
    cardBody.appendChild(createElement('p', 'card-text', text));

    card.appendChild(img);
    card.appendChild(cardBody);
    
    return card;
};

// Создаем основной контент
const main = document.createElement('main');
main.appendChild(createCard('./Без названия (4).jpg', 'Моана', 'Девушка перешедщая океан, чтобы спасти свой народ.'));
main.appendChild(createCard('./moana wallpaper.jpg', 'Хей-хей и бекончик', 'Верные друзья и спутники Моаны. Они путешествуют вместе с ней по морям.'));
main.appendChild(createCard('./Maui (1).jpg', 'Мауви', 'Полубог ветров и морей, создал мир тёплым раем, из любви к людям.'));


// Краткое описание
const descriptionSection = createElement('section', 'description');
descriptionSection.appendChild(createElement('h2', null, 'Краткое описание'));
descriptionSection.appendChild(createElement('p', null, 'Моана - смелая и решительная девушка, которая отправляется в опасное путешествие, чтобы спасти свой народ. Она обладает связью с океаном и ищет свое предназначение.'));

// Особенности персонажа
const featuresSection = createElement('section', 'features');
featuresSection.appendChild(createElement('h2', null, 'Особенности персонажа'));
const featuresList = createElement('ul');
featuresList.innerHTML = `
    <li>Оружие: Весло</li>
    <li>Скиллы: Управление океаном, навигация по звёздам, поддержка Мауви во всём</li>
    <li>Суперспособность: Восстановление природы, силы полубогини</li>
`;
featuresSection.appendChild(featuresList);

// Добавляем секции в основной контент
main.appendChild(descriptionSection);
main.appendChild(featuresSection);

// Создаем подвал
const footer = document.createElement('footer');
footer.appendChild(createElement('p', null, "“Слушай свой внутренний голос, и ты найдешь свой путь.”"));
const toggleBtn = createElement('button', 'button theme-toggle', 'Сменить тему');
footer.appendChild(toggleBtn);


document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);


const body = document.body;


if(localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if(body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
  } else {
      localStorage.removeItem('theme');
  }
});

const style = document.createElement('style');
style.textContent = `
  body {
  font-family: 'Arial', sans-serif;
  background-color: #e0f7fa;
  margin: 0;
  padding: 0 20px 40px;
  color: #004d40;
}

header {
  text-align: center;
  padding: 30px 0 20px;
  background-color: #00695c;
  color: #e0f2f1;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
}

header h1 {
  margin: 0;
  font-size: 2.8rem;
}

header p {
  margin: 8px 0 0;
  font-size: 1.1rem;
  font-style: italic;
}


main {
  max-width: 1200px;
  margin: 20px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}


.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-8px);
}

.card-img-top {
  width: 100%;
  display: block;
  object-fit: cover;
  height: 180px;
}

.card-body {
  padding: 15px 20px;
}

.card-title {
  margin: 0 0 8px;
  font-size: 1.25rem;
  font-weight: bold;
  color: #00796b;
}

.card-text {
  font-size: 1rem;
  line-height: 1.4;
  color: #333333;
}

/* Раздел описания и особенностей */
.description, .features {
  max-width: 800px;
  background-color: #b2dfdb;
  border-radius: 12px;
  padding: 20px 30px;
  margin: 30px auto;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

.description h2, .features h2 {
  font-size: 1.8rem;
  color: #004d40;
  margin-bottom: 15px;
  border-bottom: 2px solid #00796b;
  padding-bottom: 5px;
}

.description p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #004d40;
}

.features ul {
  list-style: inside disc;
  color: #004d40;
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0;
  padding-left: 0;
}

footer {
  text-align: center;
  padding: 25px 10px;
  background-color: #004d40;
  color: #a7ffeb;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.15);
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}
.button {
    background-color:rgb(61, 141, 79); /* Зеленый цвет фона */
    color: white; /* Цвет текста */
    border: none; /* Без рамки */
    padding: 15px 32px; /* Отступы внутри кнопки */
    text-align: center; /* Выравнивание текста по центру */
    text-decoration: none; /* Без подчеркивания текста */
    display: inline-block; /* Отображение в строке */
    font-size: 16px; /* Размер шрифта */
    margin: 4px 2px; /* Отступы вокруг кнопки */
    cursor: pointer; /* Указатель при наведении */
    border-radius: 4px; /* Закругленные углы */
    transition: background-color 0.3s, transform 0.2s; /* Плавный переход для фона и трансформации */
}

.button:hover {
    background-color: #45a049; /* Более темный зеленый при наведении */
    transform: scale(1.05); /* Увеличение кнопки при наведении */
}

.button:active {
    transform: scale(0.95); /* Уменьшение кнопки при нажатии */
}

footer p {
  margin: 0 0 12px 0;
  font-size: 1.1rem;
  font-style: italic;
}

#theme-toggle {
  background-color: #00796b;
  color: #e0f2f1;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#theme-toggle:hover {
  background-color: #004d40;
}

/* Адаптивность */
@media(max-width: 768px) {
  main {
      flex-direction: column;
      align-items: center;
  }

  .card {
      width: 90% !important;
  }

  .description, .features {
      width: 90%;
      padding: 15px 20px;екп
  }

  footer {
      position: static;
      padding: 20px 10px;
  }
}
  




body.dark-theme {
  background-color: #121212;
  color: #e0e0e0;
}

body.dark-theme header {
  background-color: #1f1f1f;
  color: #b2dfdb;
  box-shadow: 0 2px 5px rgba(0,0,0,0.8);
}

body.dark-theme .card {
  background-color: #1e1e1e;
  box-shadow: 0 4px 8px rgba(0,0,0,0.7);
  color: #e0e0e0;
}

body.dark-theme .card-title {
  color: #80cbc4;
}

body.dark-theme .card-text {
  color: #cccccc;
}

body.dark-theme .description,
body.dark-theme .features {
  background-color: #263238;
  box-shadow: 0 3px 6px rgba(0,0,0,0.8);
  color: #b2dfdb;
}

body.dark-theme .description h2,
body.dark-theme .features h2 {
  color: #80cbc4;
  border-color: #4db6ac;
}

body.dark-theme footer {
  background-color: #1f1f1f;
  color: #80cbc4;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.8);
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}

body.dark-theme #theme-toggle {
  background-color: #80cbc4;
  color: #004d40;
}

body.dark-theme #theme-toggle:hover {
  background-color: #4db6ac;
}
`;
document.head.appendChild(style);
