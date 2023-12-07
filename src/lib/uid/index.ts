/* eslint-disable no-bitwise */
const CHARS = 'abcdefghigklmnopqrstuvwxyz';
const NUMS = '0123456789';
const ALL = CHARS + NUMS;

// 最简单的 uid 生成器，够用就好
export function uid(n) {
  n = n || 6;
  if (n < 2) {
    throw new RangeError('n 不能小于 2');
  }

  let repeatStr = '';
  for (let i = 0; i < n - 2; i++) {
    repeatStr += 'z';
  }

  return `xx${repeatStr}`.replace(/[xz]/g, c =>
    c === 'x' ? CHARS[(Math.random() * 26) | 0] : ALL[(Math.random() * 36) | 0],
  );
}
