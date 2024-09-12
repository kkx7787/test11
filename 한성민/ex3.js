Array.prototype.sortBy = function (sortProp = '') {
  const props = sortProp.split(','); // 정렬 요소 split

  return this.slice().sort((a, b) => {
    for (const prop of props) {
      const [sortKey, order] = prop.split(':');
      const direction = order === 'desc' ? -1 : 1;

      if (a[sortKey] > b[sortKey]) return direction;
      if (a[sortKey] < b[sortKey]) return -direction;
    }
    return 0; // 모든 정렬 기준이 동일하면 0 반환
  });
};

const hong = { id: 1, name: 'Hong', city: 'Busan', dept: 1 };
const kim = { id: 2, name: 'Kim', city: 'Seoul', dept: 2 };
const lee = { id: 3, name: 'Lee', city: 'Daegu', dept: 2 };
const users = [lee, hong, kim];
console.log(users.sortBy('name:desc,id:,dept:desc'));

