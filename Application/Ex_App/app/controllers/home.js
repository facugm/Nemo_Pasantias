const express = require('express');
const router = express.Router();
const db = require('../models');
const Sequelize = require('sequelize');
module.exports = (app) => {
  app.use('/', router);

};
/*
router.get('/', (req, res, next) => {

  db.Article.findAll().then((articles) => {
    res.render('index', {
      title: "HOLA",
      text: "blabalbdlabdasl",
      articles: articles
    });

});
});
*/

router.get('/faqtag/', (req, res, err) => {
  res.render('landing_page',{
      
  });
});

router.get('/faqtag/:pattern', (req, res, err) => {

 /*
  db.FAQ_FILE.findAll({attributes: ['ARTICLE_NAME'], order: "VISITS"}).then((list_articles) => {


    res.render('landing_page', {
      list_articles : list_articles
    });

});*/

var pattern = req.params.pattern;
db.FAQ_FILE.findAll({attributes: ['ARTICLE_NAME', 'FAQ_FILE_ID'], where: { ARTICLE_NAME:/*{ [Sequelize.Op.like]: '%'+*/ pattern/* +'%'}*/}}).then((response)=>{
  // PROCESAR PARA RETORNAR LO QUE SE DESEA
  var list = response.map(function(ele){
    return { id: ele.FAQ_FILE_ID, name: ele.ARTICLE_NAME };
  })
  res.json(list);
});

});



router.get('/', (req, res, next) => {
  res.render('landing_page', {
    titulo: "BIENVENIDO"
  });
});
