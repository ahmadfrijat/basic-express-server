module.exports = (req, res, next) => {
    if (!req.query.name) {
        next('no name')
    }else{
        console.log('__validator Request__', req.query);
        next();
    };
   
  };