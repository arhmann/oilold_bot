'use strict'

let TelegramBot = require('node-telegram-bot-api'); // Подключаем библиотеку для работы с Telegram API в переменную

let token = '1332341373:AAGusqUdmwO2TctQXE7LzY-PyCFnOqs6oSg'; // Устанавливаем токен, который выдавал нам бот

let bot = new TelegramBot(token, { polling: true }); // Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию

const keyboardStart = [
  [
    {
      text: 'Рассчитать моточасы', // текст на кнопке
      callback_data: 'chekOilTime' // данные для обработчика событий
    }
  ],
  [
    {
      text: 'Узнать о важности правильного рассчета.',
      callback_data: 'haveInfo'
    }
  ],
  [
    {
      text: 'Внести новые показания моточас.',
      callback_data: 'newMeaning'
    }
  ]
];

const variablesOil = [
  [
    {
      text: 'Синтетика',
      callback_data: 'syntetic'
    }
  ],
  [
    {
      text: 'Полусинтетика',
      callback_data: 'halfsyntetic'
    }
  ],
  [
    {
      text: 'Минеральное масло', 
      callback_data: 'mineralOil'
    }
  ],
  [
    {
      text: 'Я не знаю, как определить?',
      url: 'https://rallysale.ru/raznoe/kak-otlichit-maslo-sintetiku-ot-polusintetiki-osnovnye-razlichiya-mezhdu-sinteticheskim-maslom-5w40-i-polusintikoj-10w40.html#:~:text=%D0%A0%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%B8%D1%8F%20%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%20%D1%81%D0%B8%D0%BD%D1%82%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B8%20%D0%BF%D0%BE%D0%BB%D1%83%D1%81%D0%B8%D0%BD%D1%82%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC%20%D0%BC%D0%B0%D1%81%D0%BB%D0%BE%D0%BC&text=%D0%9F%D0%BE%D1%8D%D1%82%D0%BE%D0%BC%D1%83%20%D1%81%D0%B8%D0%BD%D1%82%D0%B5%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BD%D0%B0%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BC%D0%B5%D0%BD%D1%8C%D1%88%D0%B5%2C%20%D1%87%D0%B5%D0%BC,%D0%B1%D0%BE%D0%B8%D1%82%D1%81%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B3%D1%80%D0%B5%D0%B2%D0%B0%20%D0%B8%20%D0%BD%D0%B8%D0%B7%D0%BA%D0%B8%D1%85%20%D1%82%D0%B5%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80.&text=%D0%9F%D0%BE%D0%BB%D1%83%D1%81%D0%B8%D0%BD%D1%82%D0%B5%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%B0%D0%B4%D0%B0%D0%B5%D1%82%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B5%D0%B9%20%D1%81%D1%82%D0%B0%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D1%8E%2C%20%D1%87%D0%B5%D0%BC,%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%D1%85%20%D0%B5%D0%B3%D0%BE%20%D1%81%D1%82%D0%BE%D0%B8%D1%82%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D0%BE%D1%87%D0%B5%D1%81%D1%82%D1%8C%20%D1%81%D0%B8%D0%BD%D1%82%D0%B5%D1%82%D0%B8%D0%BA%D0%B5.'
    }
  ],
];

const comeBackVar = [
  [
    {
      text: 'Вернуться в начало',
      callback_data: 'comeBackStart' 
    }
  ]
];

const speedVar = [
  [
    {
      text: '10',
      callback_data: 'ten' 
    }
  ],
  [
    {
      text: '15',
      callback_data: 'fifteen' 
    }
  ],
  [
    {
      text: '20',
      callback_data: 'twenty' 
    }
  ],
  [
    {
      text: '25',
      callback_data: 'twenty-five' 
    }
  ],
  [
    {
      text: '30',
      callback_data: 'thirty' 
    }
  ],
  [
    {
      text: '35',
      callback_data: 'thirty-five' 
    }
  ],
  [
    {
      text: '40',
      callback_data: 'forty' 
    }
  ],
  [
    {
      text: '50',
      callback_data: 'fifty' 
    }
  ],
];

const varYesOrNo = [
  [
    {
      text: 'Yes',
      callback_data: 'yes' 
    }
  ],
  [
    {
      text: 'No',
      callback_data: 'no' 
    }
  ],

];

let qualityOilTime = 0; //quality Oil from information motor hours from the manufacturer 350\330\300 or other!
let averageSpeed = 0; //average speed for long time!
let overallResult = 0; // overal result from change oil in motor.


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Привет, я твой карманный авто-помощник и расскажу по твоей средней скорости, когда тебе нужно заменить масло! Смогу записать моточасы и при регулярном заполнении часов напомню об инспекции! :З' ,{ // прикрутим клаву
    reply_markup: {
        inline_keyboard: keyboardStart
      }
    });
});

// Обработчик нажатий на клавиатуру
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;

  if (query.data === 'chekOilTime') {
    bot.sendMessage(chatId, 'OK! Настало время проверки, прежде чем произойдет магия, выберите ваш тип масла.', {
      reply_markup: {
        inline_keyboard: variablesOil
      }
    });

  } else if (query.data === 'syntetic'){ //Синтетика
    qualityOilTime = 330;

    bot.sendMessage(chatId, 'Супер! Среднее, допустимое значение для синтетического масла - это 330ч.Теперь проверьте свой бортовой копьютер и посмотрите среднюю скорость за длительный период (+- 5км)', {
      reply_markup: {
        inline_keyboard: speedVar
      }
    });
  } else if (query.data === 'ten') {
    averageSpeed = 10;
    overallResult = averageSpeed * qualityOilTime;

    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'fifteen') { 
    averageSpeed = 15;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'twenty') { 
    averageSpeed = 20;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'twenty-five') { 
    averageSpeed = 25;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'thirty') { 
    averageSpeed = 30;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'thirty-five') { 
    averageSpeed = 35;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'forty') { 
    averageSpeed = 40;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'fifty') { 
    averageSpeed = 50;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 

  } else if (query.data === 'halfsyntetic'){ //Полусинтетика
    qualityOilTime = 260;
    overallResult = averageSpeed * qualityOilTime;

    bot.sendMessage(chatId, 'Супер! Среднее, допустимое значение для синтетического масла - это 260ч.Теперь проверьте свой бортовой копьютер и посмотрите среднюю скорость за длительный период (+- 5км)', {
      reply_markup: {
        inline_keyboard: speedVar
      }
    });
  } else if (query.data === 'ten') {
    averageSpeed = 10;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'fifteen') { 
    averageSpeed = 15;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'twenty') { 
    averageSpeed = 20;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'twenty-five') { 
    averageSpeed = 25;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'thirty') { 
    averageSpeed = 30;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'thirty-five') { 
    averageSpeed = 35;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'forty') { 
    averageSpeed = 40;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'fifty') { 
    averageSpeed = 50;
    overallResult = averageSpeed * qualityOilTime;
    bot.sendMessage(chatId, overallResult); 
     
  } else if (query.data === 'mineralOil'){ //Минеральное масло
    qualityOilTime = 150;

    bot.sendMessage(chatId, 'Супер! Среднее, допустимое значение для синтетического масла - это 150ч.Теперь проверьте свой бортовой копьютер и посмотрите среднюю скорость за длительный период (+- 5км)' , {
      reply_markup: {
        inline_keyboard: speedVar
      }
    });

   } else if (query.data === 'ten') {
      averageSpeed = 10;
      overallResult = averageSpeed * qualityOilTime;
      bot.sendMessage(chatId, overallResult); 
       
    } else if (query.data === 'fifteen') { 
      averageSpeed = 15;
      overallResult = averageSpeed * qualityOilTime;
      bot.sendMessage(chatId, overallResult); 
       
    } else if (query.data === 'twenty') { 
      averageSpeed = 20;
      overallResult = averageSpeed * qualityOilTime;
      bot.sendMessage(chatId, overallResult); 
       
    } else if (query.data === 'twenty-five') { 
      averageSpeed = 25;
      overallResult = averageSpeed * qualityOilTime;
      bot.sendMessage(chatId, overallResult); 
       
    } else if (query.data === 'thirty') { 
      averageSpeed = 30;
      overallResult = averageSpeed * qualityOilTime;
      bot.sendMessage(chatId, overallResult); 
       
    } else if (query.data === 'thirty-five') { 
      averageSpeed = 35;
      overallResult = averageSpeed * qualityOilTime;
      bot.sendMessage(chatId, overallResult); 
       
    } else if (query.data === 'forty') { 
      averageSpeed = 40;
      overallResult = averageSpeed * qualityOilTime;
      bot.sendMessage(chatId, overallResult); 
       
    } else if (query.data === 'fifty') { 
      averageSpeed = 50;
      bot.sendMessage(chatId, overallResult); 
       
    } else if (query.data === 'haveInfo') {
     bot.sendMessage(chatId, 'Ok, я расскажу вам почему важно отслеживать интервал замены масла по моточасам. В современных мегаполисах большую часть времени авто проводят в пробках, но ваш киллометраж стоит на месте. Ваше моторное масло стареет раньше чем наступает инспекция по его замене (среднее 15 000км), обращаясь к пробегу как к основному способу измерения интервала вы подвергаете свои двигатель колосальным нагрузкам, и приближаете возможные проблемы и ремонту агрегата. В момент, когда ваш одометр показал 15 000, ваше масло давно перешагнуло за отметку 20, в летний и зимний сезон нагрузка на ДВС растет и мотору работать все тяжелее, появляется расход масла и наступает большая вероятность перегрева и дальнейшего дорогостоящего ремонта. К тому-же ваше масло оставляет за собой шлам и лаковые отложения, которые в будущем негативно откладываются в моторе и приближают вас к дорогостоящему ремонту. Как этого избежать? Рассчет по моточасам снизит риск возникновения проблем минимум на 70%. Мы научим и посчитаем за вас ваш интервал смены мотоного масла! :З Если у вас остались вопросы напишите @IUII2', { // прикрутим клаву
      reply_markup: {
        inline_keyboard: comeBackVar
      }
    });

   } else if (query.data === 'comeBackStart') {
    bot.sendMessage(chatId, 'OK! Настало время проверки, прежде чем произойдет магия, выберите ваш тип масла.',{ 
      reply_markup: {
        inline_keyboard: variablesOil
      }
    });

   } else {
    bot.sendMessage(chatId, 'Если что-то пошло не так напишите мне @IUII2');
   }
  
});
