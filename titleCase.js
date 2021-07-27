const titleCase = function (text) {
  // Your code in here ...
  if (text.length > 1) {
    let words = text.split(" ");
    let result = words.map(
      (e) =>
        e.toLowerCase().split("").shift().toUpperCase() +
        e.slice(1).toLowerCase()
    );

    return result.join(" ");
  }

  if (text.length === 1) {
    return text.toUpperCase();
  }

  return "";
};

module.exports = titleCase;
