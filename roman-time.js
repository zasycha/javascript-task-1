'use strict';

function convertToRoman(hours, minutes, halfTime) {
    var rightNumbers = { '0': '', '1': 'I', '2': 'II', '3': 'III', '4': 'IV',
    '5': 'V', '6': 'VI', '7': 'VII', '8': 'VIII', '9': 'IX' };
    var leftNumbers = { '0': '', '1': 'X', '2': 'XX', '3': 'XXX', '4': 'XL', '5': 'L' };
    halfTime[0] = halfTime[0] === '00' ? 'N' : leftNumbers[hours[0]] + rightNumbers[hours[1]];
    halfTime[1] = halfTime[1] === '00' ? 'N' : leftNumbers[minutes[0]] + rightNumbers[minutes[1]];

    return (halfTime);
}

function isCorrectNumbers(hours, minutes) {
    try {
        if (Number(hours[0]) >= 0 && Number(hours[0]) <= 2 &&
        Number(hours[1]) >= 0 && Number(hours[1]) <= 9 &&
        Number(minutes[0]) >= 0 && Number(minutes[0]) <= 5 &&
        Number(minutes[1]) >= 0 && Number(minutes[1]) <= 9 &&
        !isNaN(hours[0]) && !isNaN(hours[1]) &&
        !isNaN(minutes[0]) && !isNaN(minutes[1])) {

            return true;
        }

        return false;
    } catch (e) {
        return false;
    }
}

function isCorrectTime(halfTime, time) {
    try {
        if ((time.length === 5 && halfTime.length === 2) &&
            (Number(halfTime[0]) >= 0 && Number(halfTime[0]) <= 23 &&
            Number(halfTime[1]) >= 0 && Number(halfTime[1]) <= 59 &&
            !isNaN(halfTime[0]) && !isNaN(halfTime[1]))) {

            return true;
        }

        return false;
    } catch (e) {
        return false;
    }
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
function romanTime(time) {
    var halfTime = time.split(':');
    var hours;
    var minutes;
    if (isCorrectTime(halfTime, time)) {
        hours = halfTime[0].split('');
        minutes = halfTime[1].split('');
        if (isCorrectNumbers(hours, minutes)) {
            time = convertToRoman(hours, minutes, halfTime).join(':');
        } else {
            throw new TypeError('Неверный формат времени');
        }
    } else {
        throw new TypeError('Неверный формат времени');
    }

    return time;
}

module.exports = romanTime;
