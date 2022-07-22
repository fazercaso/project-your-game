const tems = require('express').Router();
const {Topic, Question } = require('../db/models');
const game = require('../db/models/game');

tems.get('/', async (req,res) =>{
    try {
        const findtems = await Topic.findAll({
            include: [{model:Question} ],
        });
        // console.log(findtems);
        res.json(findtems);  
    } catch (error) {
        console.log(error.message)
    }
});

tems.post('/question', async (req, res)=>{
    try {
    const { id } = req.body;
    // console.log(id);
  const findQuestion = await Question.findOne({
    where: { id },
  });
//   console.log(findQuestion);
  res.json(findQuestion);
    } catch (error) {
        console.log(error.message)
    }
})


tems.post('/points', async (req, res)=> {
    try {
        // const { state, score, user_id } = req.body;
        console.log(req.body);
        // console.log(state);
        // console.log(score);
        // console.log(user_id);
        

    } catch (error) {
        console.log(error.message)
    }
})
// tems.post('/addlike/:key', async (req, res) => {
//     const { user } = req.session;
//     const findlike = await Like.findOne({
//       where: {
//         post_id: req.params.key,
//         user_id: user.id,
//       },
//       // raw: true,
//       // nest: true,
//     });
//     if (findlike) {
//       return;
//     }
  
//     const findPost = await Post.findOne({
//       where: { id: req.params.key },
//       // raw: true,
//       // nest: true,
//     });
//     //   console.log(findPost);
//     await findPost.update({
//       likes: findPost.likes + 1,
//     });
  
//     await findPost.save();
  
//     const newlike = await Like.create({
//       post_id: req.params.key,
//       user_id: user.id,
//     });
  
//     // console.log(findPost);
//     res.json({ findPost });
//     //   console.log(newlike);
  
//     //   await Product.save();
//   });
  
  module.exports = tems;