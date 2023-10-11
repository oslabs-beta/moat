const filterSortingDefs = {};

filterSortingDefs.Popular = (a, b) => {
  return b.upvotes - a.upvotes;
};
filterSortingDefs.Recent = (a, b) => {
  return Date.parse(b.date_submitted) - Date.parse(a.date_submitted);
};
filterSortingDefs.Type = (a, b) => {
  if (a.type[0] < b.type[0]) {
    return -1;
  }
  if (a.type[0] > b.type[0]) {
    return 1;
  }
  return 0;
};
// filterSortingDefs.Test = (a,b) => {
//     return
// }

export default filterSortingDefs;
