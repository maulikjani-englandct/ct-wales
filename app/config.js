module.exports = function (app) {

  app.use((req, res, next) => {

    if (req.query.languagePreference) {
      res.cookie('languagePreference', req.query.languagePreference, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: false
      })
    }

    const lang = req.cookies.languagePreference || 'en'

    // Make available to templates
    res.locals.languagePreference = lang

    // Make available to data['languagePreference']
    req.session.data.languagePreference = lang

    next()
  })
}
