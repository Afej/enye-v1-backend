const getDate = () => {
  const date = new Date();

  // var options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };

  // return date.toLocaleDateString("en-GB", options);

  const day = date.getDate(),
    month = 1 + date.getMonth(),
    year = date.getFullYear();

  return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
};

module.exports = { getDate };
