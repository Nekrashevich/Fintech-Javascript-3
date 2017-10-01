/** hi there
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {

}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  if (x === undefined) {
    return 0;
  }

  return function f(newarg) { return (newarg === undefined) ? x : sum(newarg + x); };
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      return false;
    }
    second = second.substring(0, second.indexOf(first[i])).concat(second.substring(second.indexOf(first[i]) + 1));
  }
  return (second.length === 0);
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */

function getUnique(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }

  return Object.keys(obj);
}


/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  const result = [];

  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      result.push(first[i]);
      second.pop(second.indexOf(first[i]));
    }
  }

  return getUnique(result);
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */

function isIsomorphic(left, right) {
  let flag = false;

  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      if (flag === true || left.substring(i + 1).length !== right.substring(i + 1).length) { return false; }
      flag = true;
    }
  }
  return true;
}


module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
