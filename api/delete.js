const init = (router, config, resources) => {
  const { db } = resources;
  router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const deleteResponse = await db.BlogPost.deleteOne({ _id: id });
      res.status(200).json(deleteResponse);
    } catch (error) {
      res
        .status(500)
        .json({ message: `There was a server error: ${error.message}` });
    }
  });

  router.delete("/delete", async (req, res) => {
    try {
      const deleteResponse = await db.BlogPost.deleteMany();
      res.status(200).json(deleteResponse);
    } catch (error) {
      res
        .status(500)
        .json({ message: `There was a server error: ${error.message}` });
    }
  });
};

module.exports = { init };
