const init = (router, config, resources) => {
  const { db } = resources;
  router.get("/read", async (req, res) => {
    try {
      // group the questions by language and then group
      const Questions = await db.Question.aggregate([
        {
          $group: {
            _id: { language: "$language", group: "$group" },
            questions: { $push: "$$ROOT" },
          },
        },
        {
          $group: {
            _id: "$_id.language",
            language: {
              $first: "$_id.language",
            },
            groups: {
              $push: {
                name: "$_id.group",
                questions: "$questions",
              },
            },
          },
        },
        // { $group: { _id: "$questions.group", questions: { $push: "$$ROOT" } } },
      ]);

      const processed = Questions.reduce((acc, question) => {
        return {
          ...acc,
          [question._id]: question.groups.reduce((acc, group) => {
            return { ...acc, [group.name]: group.questions };
          }, {}),
        };
      }, {});

      res.status(200).json(processed);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: `There was a server error: ${error.message}` });
    }
  });

  router.get("/read/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const Question = await db.Question.findById(id);
      res.status(200).json(Question);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: `There was a server error: ${error.message}` });
    }
  });
};

module.exports = { init };
