const init = (router, config, resources) => {
  const { db } = resources;
  router.get("/read", async (req, res) => {
    try {
      const BlogPosts = await db.BlogPost.find();
      res.status(200).json(BlogPosts);
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
      const BlogPost = await db.BlogPost.findById(id);
      res.status(200).json(BlogPost);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: `There was a server error: ${error.message}` });
    }
  });
};

module.exports = { init };
