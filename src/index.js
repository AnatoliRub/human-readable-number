module.exports = function toReadable(number) {
    let nunber = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '0': 'zero',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    }

    return number.toString().split('').reverse().reduce((answer, item, index, array) => {
        if (nunber.hasOwnProperty(item)) {

            switch (index) {

                case 0:
                    return item == 0 && array.length > 1 || array[1] == 1 ?
                        answer = answer + ''
                        :
                        answer = nunber[item] + answer

                case 1:
                    return item == 0 ? answer = '' + answer : item == 1 ?
                    answer = nunber[item * 10 + parseInt(array[0])] + ' ' + answer
                    :
                    answer = nunber[item * 10] + ' ' + answer

                case 2:
                    return answer = nunber[item] + ' hundred ' + answer;

            }
        }
    }, '').toString().trim()
}
