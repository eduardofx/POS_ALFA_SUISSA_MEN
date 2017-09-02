const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'Express' })
});

router.get('/teste', (req, res, next)=> {
  const data = { title : 'Titulo', course :  'Curso'} 
  res.render('index', data)
})

module.exports = router;
