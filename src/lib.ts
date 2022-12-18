const rustCore = import("rust-core");



export const libPromise = (async () => {

  const rustLib = await rustCore;

  const sumTwoNums = (x: number, y: number) => {
    return rustLib.sum(x, y);
  }

  const fibonnaci = (x: number) => {
    return rustLib.fibonacci(x);
  }

  return {
    sumTwoNums,
    fibonnaci
  }

})();