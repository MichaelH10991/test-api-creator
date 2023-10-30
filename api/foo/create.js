const init = (router, config, resources) => {
  const { db } = resources;
  router.post("/create", async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
      const document = await db.Question.findOneAndUpdate(
        { id: body.id },
        body
      );
      if (document) {
        res.status(200).json(document);
      } else {
        const Question = new db.Question(body);
        const saveResponse = await Question.save();
        res.status(200).json(saveResponse);
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: `There was a server error: ${error.message}` });
    }
  });
};

module.exports = { init };
