/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */

function getMinMax(string) {
  var min = Infinity,
    max = -Infinity;

  while (string.length > 0) {
    while (isNaN(parseFloat(string))) {
      string = string.slice(1);

      if (string.length === 0) {
        return { min, max };
      }
    }

    min = Math.min(parseFloat(string), min);
    max = Math.max(parseFloat(string), max);

    while (parseFloat(string) || string[0] === '0') {
      string = string.slice(1);
      if (string.length === 0) {
        return { min, max };
      }
      if (string[0] === ' ') { break; }
    }
  }

  return { min, max };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */

function fibonacciSimple(x) {
  if (x === 1) {
    return 1;
  }

  if (x === 0) {
    return 0;
  }

  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */

function fibonacciWithCache(x) {
  if (arr[x] !== undefined) {
    return arr[x];
  }

  arr[x] = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);

  return arr[x];
}

var arr = [0, 1];


/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */

function printNumbers(max, cols) {
  let result = '',
    rows,
    x;

  // if ((max + 1) % cols === 0) { rows = (max + 1) / cols; } else { rows = 1 + Math.floor((max + 1) / cols); }
  rows = ((max + 1) % cols === 0) ? (max + 1) / cols : 1 + Math.floor((max + 1) / cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; i + j * rows < max + 1; j++) {
      x = i + j * rows;

      result += (x < 10) ? ' ' : '';
      result += (j > 0) ? ' ' : '';
      result += x;
    }

    if (i < rows - 1) { result += '\n'; }
  }

  return result;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */


function rle(input) {
  let count = 0,
    result = '',
    early = input[0];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === early) {
      count += 1;

      if (i === input.length - 1) {
        result += early;
        result += count;
      }
    } else if (i === input.length - 1) {
      if (input[i] !== early) {
        add(count, early);
        result += input[i];
      }
    } else {
      add(count, early);
      count = 1;
      early = input[i];
    }
  }

  function add(count, early) {
    result += early;

    if (count !== 1) {
      result += count;
    }
  }

  return result;
}


module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
