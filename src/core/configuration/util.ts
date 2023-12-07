const reEscapeChar = /\\(\\)?/g;
const rePropName =
  /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

export const stringToPath = string => {
  const result: string[] = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(
      quote ? subString.replace(reEscapeChar, '$1') : number || match,
    );
  });

  return result;
};

export const nextTick = callback => {
  const timer = setTimeout(() => {
    callback();
  }, 1000 / 60);
  return timer;
};
