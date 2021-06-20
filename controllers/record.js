const mockData = require("./mockData");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the first post!" }],
  });
};

exports.createPost = (request, response, next) => {
  console.log("request", request);

  const consumeType = request.body.body.consumeType;
  const newRecords = !!consumeType
    ? mockData.records.filter((record) => record.tag === consumeType)
    : mockData.records;

  console.log("newRecords", newRecords);

  response.status(200).json({
    message: "Post created successfully!",
    data: { records: newRecords, total: newRecords.length },
  });
};
