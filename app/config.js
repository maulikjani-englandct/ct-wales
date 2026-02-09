module.exports = function (app) {

  app.use((req, res, next) => {

    if (req.query.languagePreference) {
      res.cookie('languagePreference', req.query.languagePreference, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: false
      })
    }

    const lang = req.cookies.languagePreference || 'en'

    // Only locals here – safe on every request
    res.locals.languagePreference = lang

    next()
  })
}
