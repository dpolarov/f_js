function makeTime(hours, minutes) {
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

/**
 * @type {Object<string, Flight>} Список всех рейсов
 */
let flights = {
    BH118: {
        name: 'BH118',
        seats: 28,
        businessSeats: 4,
        registrationStarts: makeTime(10, 0),
        registartionEnds: makeTime(15, 0),
        tickets: [
            {
                id: 'BH118-B50',
                flight: 'BH118',
                fullName: 'Ivanov I. I.',
                type: 0,
                seat: 18,
                buyTime: makeTime(2, 0),
                registrationTime: null,
            }
        ],
    }
};

/**
 * Добавление рейса
 * 
 * * назначение номера рейса
 * * подготовка рейса
 *   * вычисление времени регистрации
 *   * подготовка структуры Flight
 * 
 * @param {Airliner} airliner Информация о самолете
 * @param {number} time Время вылета
 * @returns {Flight}
 */
// function createFlight(airliner, time) { }

/**
 * Поиск свободного места нужного типа
 * 
 * Гарантирует что найдет свободное место нужного типа или вернет null
 * 
 * @param {Flight} flight 
 * @param {number} type
 * @returns {number} seat
 */
function findAvailableSeat(flight, type) {
    let exists;
    let seat;
    let seatsOfType = 0;

    switch (type) {
        case 0: // standart
            const availableSeats = [];

            for (let i = flight.businessSeats + 1; i <= flight.seats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    availableSeats.push(i)

            if (availableSeats.length === 0)
                return null;

            const index = Math.floor(Math.random() * availableSeats.length);
            return availableSeats[index];
        case 1: // business
            for (let i = 1; i <= flight.businessSeats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    seatsOfType++;

            if (seatsOfType === 0)
                return null;

            do {
                seat = Math.floor(Math.random() * flight.businessSeats) + 1;
                exists = flight.tickets.find(item => item.seat === seat);
            } while (exists);

            return seat;
        default:
            throw new Error(`Unknown type`)
    }
}

/**
 * Покупка билета на самолет
 * 
 * * проверка рейса
 * * проверка возможности купить (время и наличие мест)
 * * сохранение данных билета в информации о рейсе
 * 
 * @param {string} flightName Номер рейса
 * @param {number} buyTime Время покупки
 * @param {string} fullName Имя пассажира
 * @param {number} type Тип места
 * @returns {Ticket} Возвращаем копию билета
 */
function buyTicket(flightName, buyTime, fullName, type = 0) {
    const flight = flights[flightName];

    if (!flight)
        throw new Error('Flight not found');

    if (flight.tickets.length >= flight.seats)
        throw new Error('No seats available');

    if (buyTime > flight.registartionEnds)
        throw new Error('Time away');

    const seat = findAvailableSeat(flight, type);
    if (!seat)
        throw new Error(`No seats of type ${type} available. You can choose another type`);

    let id;
    do {
        id = flight.name + '-' + Math.random().toString().substr(2, 3);
        exists = flight.tickets.find(item => item.id === id);
    } while (exists);

    /**
     * @type {Ticket}
     */
    const ticket = {
        id,
        flight: flight.name,
        buyTime,
        fullName,
        registrationTime: null,
        type,
        seat,
    }

    flight.tickets.push(ticket);

    // return Object.assign({}, ticket);
    return {
        ...ticket,
        welcome: 'Nice to choose us',
    };
}

/**
 * Функция пробует произвести электронную регистрацию пассажира
 * 
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 * 
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */
function eRegistration(ticket, fullName, nowTime) {
  let flight=ticket.split(/-/)[0]; 
  let current = flights[flight];
  if (!current) throw new Error('нет такого рейса');
  if (!current.tickets.find(item => item.id == ticket)) throw new Error('нет такого билета');
  if (!current.tickets.find(item => item.fullName == fullName )) throw new Error('не верная фамилия');
  if (nowTime < (current.registartionEnds - (60 * 60 * 5 * 1000))) throw new Error('Регистрация не началась');
  if (nowTime > (current.registartionEnds - (60 * 60 * 1000))) throw new Error('Регистрация закончилась');

  //  flights[flight].tickets[flights[flight].tickets.findIndex(item => item.id == ticket )].registrationTime=nowTime;
  // да так намного понятнее,спасибо
  current.tickets.find(itm => itm.id == ticket).registrationTime=nowTime;

  return true;


}


 /**
 * Функция генерации отчета по рейсу
 * 
 *  * проверка рейса
 *  * подсчет
 * 
 * @param {string} flight номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(flight, nowTime) {
  let report = {};
  let fl_record = {};
  if (!flights[flight]) throw new Error('нет такого рейса');
  fl_record=flights[flight];
  report.flight = fl_record.name;     
  //                        
  // report.registration = ((nowTime > fl_record.registrationStarts) & nowTime < fl_record.registartionEnds) ? true : false;
  // записывваем просто результат сравнения
  report.registration = ((nowTime > fl_record.registrationStarts) & nowTime < fl_record.registartionEnds);
  report.complete = nowTime > fl_record.registartionEnds; 
  report.countOfSeats =  fl_record.seats;
  // не совсем понял момент в ТЗ , ищем вобще билеты или билеты с датой и регистрацией до nowTime ?
  // Вариант 1 ищем все 
  report.reservedSeats = fl_record.tickets.length;
  // через филтер ?
  //report.registeredSeats = fl_record.tickets.reduce((a, b) => a + (b.registrationTime > 0),0);
  report.registeredSeats = fl_record.tickets.filter(id => id.registrationTime > 0).length;


  // Вариант 2 ищем все кто до указанного времени
  // ищем всех кто купил до 
  report.reservedSeats = fl_record.tickets.filter(ticket_id => ticket_id.buyTime <= nowTime).length;
  // ищем всех кто зарегистриволся до и вообще зарегстрировался 

  //report.registeredSeats = fl_record.tickets.filter(ticket_id => (ticket_id.registrationTime <= nowTime & ticket_id.registrationTime !== null)).reduce((a, b) => a + (b.registrationTime > 0),0);
  //упрощаем  так как уже отфильтровали по null
  report.registeredSeats = fl_record.tickets.filter(ticket_id => (ticket_id.registrationTime <= nowTime & ticket_id.registrationTime !== null)).length;

  return report;  
}


function displayFlights() {
    console.log('*** List of all flights ***');
    console.table(flights);
}


function flightDetails(flightName) {
    console.log(`*** Details of flight ${flightName} ***`);
    const flight = flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return;
    }

    console.table(flight);
    console.table(flight.tickets);
}

// console.table(flightReport('BH118',makeTime(7, 0)));

// console.table(flightReport('BH118',makeTime(11, 0)));
// console.table(flightReport('BH118',makeTime(12, 0)));
// console.table(flightReport('BH118',makeTime(16, 0)));
  let newticket = buyTicket('BH118', makeTime(5, 10), 'Petrov I. I.');
  newticket = buyTicket('BH118', makeTime(5, 10), 'Sidorov I. I.');
//  console.table(newticket);

  eRegistration('BH118-B50', 'Ivanov I. I.', makeTime(13, 0));
  eRegistration(newticket.id, newticket.fullName, makeTime(12, 0));
  console.table(flightReport('BH118',makeTime(11, 0)));
  console.table(flightReport('BH118',makeTime(16, 0)));
 
  console.table(flights);
 
//eRegistration('BH118-B50', 'Ianov I. I.', makeTime(16, 0));

