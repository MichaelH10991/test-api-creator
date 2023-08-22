const init = (router, config, resources) => {
  const { db } = resources;
  router.post("/create", async (req, res) => {
    const body = req.body;
    console.log(body);
    const BlogPost = new db.BlogPost(body);
    try {
      const saveResponse = await BlogPost.save();
      res.status(200).json(saveResponse);
    } catch (error) {
      res.status(500).json({ message: "There was a server error", error });
    }
  });
};

module.exports = { init };
