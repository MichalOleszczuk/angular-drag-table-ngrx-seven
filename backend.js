const express = require("express");
const app = express();
const port = 3000;

const results = mockResult({ amount: 231 });

app.get("/resources", async (req, res, next) => {
  try {
    const itemCount = results.length;
    const limit = req.query.limit || 10;

    const pageCount = Math.ceil(itemCount / limit);

    let page = parseInt(req.query.page);

    if (!page) {
      page = 1;
    }

    if (page > pageCount) {
      page = pageCount;
    }

    res.json({
      page: page,
      pageCount: pageCount,
      count: itemCount,
      data: results.slice(page * limit - limit, page * limit),
    });
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`Example backend listening at http://localhost:${port}`);
});

function mockResult({ amount }) {
  const result = [];

  for (let i = 0; i < amount; i += 1) {
    result.push({
      position: i + 1,
      name: getRandomString(3),
      weight: 1 + Math.random(),
      symbol: getRandomString(1).toUpperCase(),
    });
  }

  return result;
}

function getRandomString(length) {
  var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}
