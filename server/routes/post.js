const router = require('express').Router();
const access = require('../middlewares/access');
const formCreate = require('../views/Post/Create');
const formUpdate = require('../views/Post/Update');

const { Post } = require('../db/models');
router.route('/create')
  // Build form
  .get(access('user'), async (req, res) => {
    res.renderComponent(formCreate);
  })
  // Get form data
  .post(access('user'), async (req, res) => {
    try {
      const { text, image_url } = req.body;
      const post = await Post.create({ user_id:res.locals.user.id, text, image_url });
      await post.save();
      res.redirect('/profile');
      return;
    } catch (error) {
      res.status(500).json(error.message);
    }
  });

router.route('/:id/read')
  .get(access('user'), async (req, res) => {
    try {
      const posts = await Post.findAll({
        where: {
          user_id: res.locals.user.id
        }
      });
      res.renderComponent(Profile, {posts});
      return;
    } catch (error) {
      res.status(500).json(error.message);
    }
  });

router.route('/:id/edit')
  // Build form
  .get(access('user'), async (req, res) => {
    try {
      const post = await Post.findOne({ where: { id:req.params.id } });

      // Есть ли пост и авторизованный пользователь является ли автором поста.
      if (!post || res.locals.user.id !== post.user_id) {
        res.redirect('/profile');
        return;
      }

      res.renderComponent(formUpdate, { post });
    } catch (error) {
      res.status(500).json(error.message);
    }
  })
  // Get form data
  .post(access('user'), async (req, res) => {
    try {
      const { text, image_url } = req.body;
      const post = await Post.findOne({ where: { id:req.params.id } });

      // Есть ли пост и авторизованный пользователь является ли автором поста.
      if (!post || res.locals.user.id !== post.user_id) {
        res.redirect('/profile');
        return;
      }

      // Updating post fields
      post.text = text;
      post.image_url = image_url;

      // Save changes
      await post.save();
      res.redirect('/profile');
      return;
    } catch (error) {
      res.status(500).json(error.message);
    }
  });

router.route('/:id/delete')
  .get(access('user'), async (req, res) => {
    try {
      const post = await Post.findOne({ where: { id:req.params.id } });

      // Есть ли пост и авторизованный пользователь является ли автором поста.
      if (!post || res.locals.user.id !== post.user_id) {
        res.redirect('/profile');
        return;
      }

      await post.destroy();
      res.redirect('/profile');
      return;
    } catch (error) {
      res.status(500).json(error.message);
    }
  });

module.exports = router;
