## YnPraktikum.project12.
### Учебный проект по созданию сервера на Node.js с использованием фреймворка Express.js.

#### Цель
Создание сервера на Node.js для сервиса Mesto по размещению фотокарточек.

#### Функциональность API

1. GET-запрос на адрес localhost:3000/users вернёт всех пользователей из JSON-файла;
2. GET-запрос на адрес localhost:3000/cards вернёт все карточки из JSON-файла;
3. GET-запрос на адрес вида localhost:3000/users/8340d0ec33270a25f2413b69 вернёт конкрtтного пользователя с переданным после /users идентификатором;
4. Если пользователя с запрошенным идентификатором нет, API вернёт 404 статус ответа и JSON: { "message": "Нет пользователя с таким id"};
5. При запросе на несуществующий адрес, API вернёт 404 статус ответа и JSON: { "message": "Запрашиваемый ресурс не найден" }.

#### Установка и запуск проекта
1. Скачать сборку архивом или используя команду:  
```git clone https://github.com/Atm0Sphere94/project12.git```  
2. Запустить установку зависимостей через терминал:  
```npm i```  
3. Выбрать необходимый вариант запуска:  
##### production - запуск сервера  
```npm run start```  
##### develop - запуск сервера с hot reload  
```npm run dev```  

