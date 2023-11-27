/**
1. {1,2,3,4}

2. 'ref'

3. 
0
: 
{Array(3) => true}
1
: 
{Array(3) => false}

4. const hasDuplicate = arr => new Set (arr).size !== arr.length

5.function vowelCount(str) {
  const vowels = 'aeiou';
  const vowelMap = new Map();

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }

  return vowelMap;
}


*/