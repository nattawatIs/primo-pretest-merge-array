const mergeTwoSortedArrays = (a: number[], b: number[]): number[] => {
  let i = 0;
  let j = 0;
  let result: number[] = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i++;
  }

  while (j < b.length) {
    result.push(b[j]);
    j++;
  }
  return result;
};

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let merge12 = mergeTwoSortedArrays(collection_1.reverse(), collection_2);
  let merge123 = mergeTwoSortedArrays(merge12, collection_3);

  return merge123;
}
