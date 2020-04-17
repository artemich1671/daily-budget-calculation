"use strict";

let money = prompt("Ваш бюджет на месяц?", ''),
	  time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	  question2 = prompt("Во сколько обойдется?", ''),
	  question3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	  question4 = prompt("Во сколько обойдется?", '');

appData.expenses[question1] = question2;
appData.expenses[question3] = question4;

// Важно! В последних версиях браузеров поведение работы со свойствами объектов поменялось. 
// Теперь синтаксис через точку может не работать. Поэтому выше я использовал квадратные скобки. 
// Если вы это читаете - то в скором времени обновится и видео в самом курсе. Спасибо за внимание!

alert(appData.budget / 30);