import { reorder } from '../../lib/Functions';

describe('reorder array', () => {
  it('call a function', () => {
    const array = [1, 2, 3, 4];
    expect(reorder(array, 3, 2)).toEqual([1, 2, 4, 3]);
  });
});
