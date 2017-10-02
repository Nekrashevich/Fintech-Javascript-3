/** hi there
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
/* ---first---

function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
} */

/* ---second---

function timer(logger = console.log) {
  for (var i = 0; i < 10; i++) {
    setTimeout((x => () => logger(x))(i), 100);
  }
} */

// ---thrid---

function timer(logger = console.log) {
  const arr = {};

  for (var i = 0; i < 10; i++) {
    arr[i] = 1000;
    type(i);
  }
  function type(key) {
    setTimeout(() => { logger(key); }, arr[key]);
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
  return function f(...newarg) { return func.apply(context, args.concat(newarg)); };
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
    const elpointer = second.indexOf(first[i]);

    if (elpointer === -1) {
      return false;
    }
    second = second.substring(0, elpointer).concat(second.substring(elpointer + 1));
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
  let unicArr = [];

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  unicArr = Object.keys(obj);
  return unicArr.sort((a, b) => a - b);
}


/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  const result = first.filter(elem => second.indexOf(elem) !== -1);

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

  if (right.length !== left.length) { return false; }

  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      if (flag === true) { return false; }
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
