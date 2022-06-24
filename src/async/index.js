const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async success'), 2000)
      : reject(new Error('Async error'))
  });
}

const anotheFn = async () => {
  const result = await fnAsync();
  console.log(result);
  console.log("Hello")
}

console.log('Before');
anotheFn();
console.log('After');