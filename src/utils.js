export const arr = [
  { name: "New York", offset: -5 },
  { name: "San Francisco", offset: -8 },
  { name: "Paris", offset: +1 },
  { name: "London", offset: 0 },
  { name: "Tel Aviv", offset: +2 },
  { name: "Warsaw", offset: +1 },
  { name: "New Delhi", offset: +5.5 }
];

export const getFilteredData = (filter, data) => {
  if (!filter) {
    return data;
  }

  return data.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};
