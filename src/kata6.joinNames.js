const joinNames = names => {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0].name;
  let result = names.map(value => value.name);
  let lastName = result.pop();
  return `${result.join(", ")} & ${lastName}`;
};

module.exports = joinNames;
