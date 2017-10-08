/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
/* function promiseAll(promises) {
  return Promise.resolve(null);
} */

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let arr = [],
      finish = promises.length;

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(result => { arr[i] = result; finish--; }, reject)
        .then(() => { if (!finish) { resolve(arr); } });
    }
  });
}

module.exports = promiseAll;
