export const reorder = <Type>(
  list: Type[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  console.log('result', result);

  const [removed] = result.splice(startIndex, 1);
  console.log('removed', removed);

  result.splice(endIndex, 0, removed);

  return result;
};
