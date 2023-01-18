import express from "express";
import { getAnswers } from "./AnswerFunctions.js";
import db from "./db.js";
import { getLoggedInUser } from "./UserFunctions.js";

const AnswerRoutes = express.Router();

AnswerRoutes.post('/answers', ((req, res) => {
  const {content,postId} = req.body;
  getLoggedInUser(req.cookies.token).then(user => {
    db('posts').insert({
      title:null,
      content,
      parent_id:postId,
      author_id:user.id,
    }).then(() => {
          getAnswers([postId]).then(answers => res.json(answers).send());
    }).catch(e => console.log(e));
  });

}));

// official one for now
// AnswerRoutes.get('/posts/answers', ((req, res) => {
//   // const postIds = req.params.postIds.split(',');
//   const token = req.cookies.token;
//   getLoggedInUser(token).then(user => {
//     getAnswers(user.id).then(answers => res.json(answers).send());
//   });
// }));

AnswerRoutes.get('/posts/answers/:postIds', ((req, res) => {
  const postIds = req.params.postIds.split(',');
  const token = req.cookies.token;
  getLoggedInUser(token).then(() => {
    db.select(
      'posts.*',
      'users.email',
    )
      .from('posts')
      .join('users', 'users.id', '=', 'posts.author_id')
      .groupBy('posts.id')
      .whereIn('parent_id', postIds)
      .then(answers => res.send(answers));
  });
}));

export default AnswerRoutes;