// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  // Ensure session.data exists
  req.session.data = req.session.data || {}

  // Prefer explicit query change, then existing session, then cookie/locals, then 'en'
  const langFromQuery = req.query.languagePreference
  const langFromSession = req.session.data.languagePreference
  const langFromLocals = res.locals.languagePreference

  const lang =
    langFromQuery ||
    langFromSession ||
    langFromLocals ||
    'en'

  // If query explicitly set, refresh cookie too
  if (langFromQuery) {
    res.cookie('languagePreference', langFromQuery, {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      httpOnly: false
    })
  }

  res.locals.languagePreference = lang

  next()
})



// ============================================================
// VERSION 1.1 ROUTES
// ============================================================

router.post('/v1-1/letusknow', function (req, res) {
    const answer = req.session.data['help']

    if (answer === "incorrect") {
        res.redirect(`/v1-1/incorrect-info`)
    } else {
        res.redirect(`/v1-1/let-us-know`)
    }
})

router.post('/v1-1/parking-check', function (req, res) {
    const answer = req.session.data['parking-type']

    if (answer === "garaging" || answer === "remote-garaging") {
        res.redirect(`/v1-1/correct/parking-spot`)
    } else if (answer === "open-parking" || answer === "carport") {
        res.redirect(`/v1-1/correct/parking-spot`)
    } else {
        res.redirect(`/v1-1/incorrect-info`)
    }
})

// ============================================================
// VERSION 1.2 ROUTES
// ============================================================

router.post('/v1-2/letusknow', function (req, res) {
    const answer = req.session.data['help']

    if (answer === "incorrect") {
        res.redirect(`/v1-2/incorrect-info`)
    } else {
        res.redirect(`/v1-2/let-us-know`)
    }
})

router.post('/v1-2/parking-check', function (req, res) {
    const answer = req.session.data['parking-type']

    if (answer === "garaging" || answer === "remote-garaging") {
        res.redirect(`/v1-2/correct/parking-spot`)
    } else if (answer === "open-parking" || answer === "carport") {
        res.redirect(`/v1-2/correct/parking-spot`)
    } else {
        res.redirect(`/v1-2/incorrect-info`)
    }
})

// ============================================================
// VERSION 1.3 ROUTES
// ============================================================

router.post('/v1-3/liable-check', function (req, res) {
    const answer = req.session.data['liability']

    if (answer === "yes" || answer === "proxy") {
        res.redirect(`/v1-3/property-details-extended`)
    } else {
        res.redirect(`/v1-3/errors/no-liable`)
    }
})

router.post('/v1-3/ata-check', function (req, res) {
    const answer = req.session.data['atacheck']

    if (answer === "yes") {
        res.redirect(`/v1-3/property-details-extended`)
    } else {
        res.redirect(`/v1-3/errors/no-ata`)
    }
})

router.post('/v1-3/propertytype', function (req, res) {
    const answer = req.session.data['type']

    if (answer === "house") {
        res.redirect(`/v1-3/correct/type/house`)
    } else if (answer === "flat") {
        res.redirect(`/v1-3/correct/type/flat`)
    } else if (answer === "maisonette") {
        res.redirect(`/v1-3/correct/type/maisonette`)
    } else if (answer === "bungalow") {
        res.redirect(`/v1-3/correct/type/bungalow`)
    } else if (answer === "other") {
        res.redirect(`/v1-3/correct/type/other`)
    }
})

router.post('/v1-3/parking-check', function (req, res) {
    const answer = req.session.data['parking-type']

    if (answer === "garaging" || answer === "remote-garaging") {
        res.redirect(`/v1-3/correct/parking-spot`)
    } else if (answer === "open-parking" || answer === "carport") {
        res.redirect(`/v1-3/correct/parking-spot`)
    } else {
        res.redirect(`/v1-3/incorrect-info`)
    }
})

router.post('/v1-3/letusknow', function (req, res) {
    const answer = req.session.data['help']

    if (answer === "incorrect") {
        res.redirect(`/v1-3/incorrect-info`)
    } else {
        res.redirect(`/v1-3/let-us-know`)
    }
})

// ============================================================
// VERSION 1.4 ROUTES
// ============================================================

router.post('/v1-4/liable-check', function (req, res) {
    const answer = req.session.data['liability']

    if (answer === "yes" || answer === "proxy") {
        res.redirect(`/v1-4/property-details-extended`)
    } else {
        res.redirect(`/v1-4/errors/no-liable`)
    }
})

router.post('/v1-4/propertytype', function (req, res) {
    const answer = req.session.data['type']

    if (answer === "house") {
        res.redirect(`/v1-4/correct/type/house`)
    } else if (answer === "flat") {
        res.redirect(`/v1-4/correct/type/flat`)
    } else if (answer === "maisonette") {
        res.redirect(`/v1-4/correct/type/maisonette`)
    } else if (answer === "bungalow") {
        res.redirect(`/v1-4/correct/type/bungalow`)
    } else if (answer === "other") {
        res.redirect(`/v1-4/correct/type/other`)
    }
})

router.post('/v1-4/parking-check', function (req, res) {
    const answer = req.session.data['parking-type']

    if (answer === "garaging" || answer === "remote-garaging") {
        res.redirect(`/v1-4/correct/parking-spot`)
    } else if (answer === "open-parking" || answer === "carport") {
        res.redirect(`/v1-4/correct/parking-spot`)
    } else {
        res.redirect(`/v1-4/incorrect-info`)
    }
})

router.post('/v1-4/letusknow', function (req, res) {
    const answer = req.session.data['help']

    if (answer === "incorrect") {
        res.redirect(`/v1-4/incorrect-info`)
    } else {
        res.redirect(`/v1-4/let-us-know`)
    }
})

// ============================================================
// VERSION 1.5 ROUTES
// ============================================================

router.post('/v1-5/liable-check', function (req, res) {
    const answer = req.session.data['liability']

    if (answer === "yes" || answer === "proxy") {
        res.redirect(`/v1-5/gov-gateway`)
    } else {
        res.redirect(`/v1-5/errors/no-liable`)
    }
})

router.post('/v1-5/propertytype', function (req, res) {
    const answer = req.session.data['type']

    if (answer === "house") {
        res.redirect(`/v1-5/correct/type/house`)
    } else if (answer === "flat") {
        res.redirect(`/v1-5/correct/type/flat`)
    } else if (answer === "maisonette") {
        res.redirect(`/v1-5/correct/type/maisonette`)
    } else if (answer === "bungalow") {
        res.redirect(`/v1-5/correct/type/bungalow`)
    } else if (answer === "other") {
        res.redirect(`/v1-5/correct/type/other`)
    }
})

router.post('/v1-5/parking-check', function (req, res) {
    const answer = req.session.data['parking-type']

    if (answer === "garaging" || answer === "remote-garaging") {
        res.redirect(`/v1-5/correct/parking-spot`)
    } else if (answer === "open-parking" || answer === "carport") {
        res.redirect(`/v1-5/correct/parking-spot`)
    } else {
        res.redirect(`/v1-5/incorrect-info`)
    }
})

// Challenge journey routes

router.post('/challenge', function (req, res) {
    const answer = req.session.data['challenge'];
    const detailsChanged = req.session.data['detailsChanged'];

    if (answer === "yes" && (detailsChanged === "true" || detailsChanged === "false")) {
        res.redirect(`/v1-5/challenge/why`);
    } else {
        res.redirect('back');
    }
})

router.post('/why-challenge', function (req, res) {
    const answer = req.session.data['why-challenge']

    if (answer === "wrong") {
        res.redirect(`/v1-5/challenge/wrong-details`)
    } else {
        res.redirect(`/v1-5/challenge/changes`)
    }
})

router.post('/howlonglived', function (req, res) {
    const answer = req.session.data['howLongLived']

    if (answer === "yes") {
        res.redirect(`/v1-5/challenge/date-payer`)
    } else {
        res.redirect(`/v1-5/challenge/notice-alteration`)
    }
})

router.post('/noticealt', function (req, res) {
    const answer = req.session.data['noticeAlteration']

    if (answer === "yes") {
        res.redirect(`/v1-5/challenge/date-notice`)
    } else {
        res.redirect(`/v1-5/challenge/contact-details`)
    }
})

router.post('/change-reason', function (req, res) {
    const answer = req.session.data['changes'];

    if (answer === "demolished_uninhabitable") {
        res.redirect('/v1-5/challenge/changes/demolished');
    } else if (answer === "part_demolished") {
        res.redirect('/v1-5/challenge/changes/part-demolished');
    } else if (answer === "split") {
        res.redirect('/v1-5/challenge/changes/split-property');
    } else if (answer === "merged") {
        res.redirect('/v1-5/challenge/changes/merge-property');
    } else if (answer === "business_use") {
        res.redirect('/v1-5/challenge/changes/business');
    } else if (answer === "domestic_use") {
        res.redirect('/v1-5/challenge/changes/domestic');
    } else if (answer === "local_area_changes") {
        res.redirect('/v1-5/challenge/changes/local-area');
    } else if (answer === "something_else") {
        res.redirect('/v1-5/challenge/changes/somethingelse');
    } else {
        res.redirect('/v1-5/challenge/changes');
    }
})

router.post('/v1-5/letusknow', function (req, res) {
    const answer = req.session.data['help']

    if (answer === "incorrect") {
        res.redirect(`/v1-5/incorrect-info`)
    } else {
        res.redirect(`/v1-5/let-us-know`)
    }
})

// ============================================================
// VERSION 1.5.1 ROUTES
// ============================================================

router.post('/v1-5-1/liable-check', function (req, res) {
    const answer = req.session.data['liability']

    if (answer === "yes" || answer === "proxy") {
        res.redirect(`/v1-5-1/gov-gateway`)
    } else {
        res.redirect(`/v1-5-1/errors/no-liable`)
    }
})

router.post('/v1-5-1/propertytype', function (req, res) {
    const answer = req.session.data['type']

    if (answer === "house") {
        res.redirect(`/v1-5-1/correct/type/house`)
    } else if (answer === "flat") {
        res.redirect(`/v1-5-1/correct/type/flat`)
    } else if (answer === "maisonette") {
        res.redirect(`/v1-5-1/correct/type/maisonette`)
    } else if (answer === "bungalow") {
        res.redirect(`/v1-5-1/correct/type/bungalow`)
    } else if (answer === "other") {
        res.redirect(`/v1-5-1/correct/type/other`)
    }
})

router.post('/v1-5-1/parking-check', function (req, res) {
    const answer = req.session.data['parking-type']

    if (answer === "garaging" || answer === "remote-garaging") {
        res.redirect(`/v1-5-1/correct/parking-spot`)
    } else if (answer === "open-parking" || answer === "carport") {
        res.redirect(`/v1-5-1/correct/parking-spot`)
    } else {
        res.redirect(`/v1-5-1/incorrect-info`)
    }
})

// Challenge journey routes

router.post('/challenge-alt', function (req, res) {
    const answer = req.session.data['challenge'];
    const detailsChanged = req.session.data['detailsChanged'];

    if (answer === "no" && detailsChanged === "false") {
        res.redirect(`/v1-5-1/confirmation/nochange-noband`);
    } else if (answer === "no" && detailsChanged === "true") {
        res.redirect(`/v1-5-1/challenge/contact-details-edits`);
    } else {
        res.redirect('back');
    }
})

router.post('/v1-5-1/why-challenge', function (req, res) {
    const answer = req.session.data['why-challenge']

    if (answer === "wrong") {
        res.redirect(`/v1-5-1/challenge/wrong-details`)
    } else {
        res.redirect(`/v1-5-1/challenge/changes`)
    }
})

router.post('/v1-5-1/howlonglived', function (req, res) {
    const answer = req.session.data['howLongLived']

    if (answer === "yes") {
        res.redirect(`/v1-5-1/challenge/date-payer`)
    } else {
        res.redirect(`/v1-5-1/challenge/notice-alteration`)
    }
})

router.post('/v1-5-1/noticealt', function (req, res) {
    const answer = req.session.data['noticeAlteration']

    if (answer === "yes") {
        res.redirect(`/v1-5-1/challenge/date-notice`)
    } else {
        res.redirect(`/v1-5-1/challenge/contact-details`)
    }
})

router.post('/v1-5-1/change-reason', function (req, res) {
    const answer = req.session.data['changes'];

    if (answer === "demolished_uninhabitable") {
        res.redirect('/v1-5-1/challenge/changes/demolished');
    } else if (answer === "part_demolished") {
        res.redirect('/v1-5-1/challenge/changes/part-demolished');
    } else if (answer === "split") {
        res.redirect('/v1-5-1/challenge/changes/split-property');
    } else if (answer === "merged") {
        res.redirect('/v1-5-1/challenge/changes/merge-property');
    } else if (answer === "business_use") {
        res.redirect('/v1-5-1/challenge/changes/business');
    } else if (answer === "domestic_use") {
        res.redirect('/v1-5-1/challenge/changes/domestic');
    } else if (answer === "local_area_changes") {
        res.redirect('/v1-5-1/challenge/changes/local-area');
    } else if (answer === "something_else") {
        res.redirect('/v1-5-1/challenge/changes/somethingelse');
    } else {
        res.redirect('/v1-5-1/challenge/changes');
    }
})

// ============================================================
// VERSION 1.5.2 ROUTES
// ============================================================

router.post('/v1-5-2/liable-check', function (req, res) {
    const answer = req.session.data['liability']

    if (answer === "yes" || answer === "proxy") {
        res.redirect(`/v1-5-2/gov-gateway`)
    } else {
        res.redirect(`/v1-5-2/errors/no-liable`)
    }
})

router.post('/v1-5-2/propertytype', function (req, res) {
    const answer = req.session.data['type']

    if (answer === "house") {
        res.redirect(`/v1-5-2/correct/type/house`)
    } else if (answer === "flat") {
        res.redirect(`/v1-5-2/correct/type/flat`)
    } else if (answer === "maisonette") {
        res.redirect(`/v1-5-2/correct/type/maisonette`)
    } else if (answer === "bungalow") {
        res.redirect(`/v1-5-2/correct/type/bungalow`)
    } else if (answer === "other") {
        res.redirect(`/v1-5-2/correct/type/other`)
    }
})

router.post('/v1-5-2/parking-check', function (req, res) {
    const answer = req.session.data['parking-type']

    if (answer === "garaging" || answer === "remote-garaging") {
        res.redirect(`/v1-5-2/correct/parking-spot`)
    } else if (answer === "open-parking" || answer === "carport") {
        res.redirect(`/v1-5-2/correct/parking-spot`)
    } else {
        res.redirect(`/v1-5-2/incorrect-info`)
    }
})

// Challenge journey routes

router.post('/challenge-alt2', function (req, res) {
    const answer = req.session.data['challenge'];
    const detailsChanged = req.session.data['detailsChanged'];

    if (answer === "no" && detailsChanged === "false") {
        res.redirect(`/v1-5-2/confirmation/nochange-noband`);
    } else if (answer === "no" && detailsChanged === "true") {
        res.redirect(`/v1-5-2/challenge/contact-details-edits`);
    } else if (answer === "yes") {
        res.redirect(`/v1-5-2/challenge/why`);
    } else {
        res.redirect('back');
    }
});

router.post('/v1-5-2/why-challenge', function (req, res) {
    const answer = req.session.data['why-challenge']

    if (answer === "wrong") {
        res.redirect(`/v1-5-2/challenge/wrong-details`)
    } else {
        res.redirect(`/v1-5-2/challenge/changes`)
    }
})

router.post('/v1-5-2/howlonglived', function (req, res) {
    const answer = req.session.data['howLongLived']

    if (answer === "yes") {
        res.redirect(`/v1-5-2/challenge/date-payer`)
    } else {
        res.redirect(`/v1-5-2/challenge/notice-alteration`)
    }
})

router.post('/v1-5-2/noticealt', function (req, res) {
    const answer = req.session.data['noticeAlteration']

    if (answer === "yes") {
        res.redirect(`/v1-5-2/challenge/date-notice`)
    } else {
        res.redirect(`/v1-5-2/challenge/contact-details`)
    }
})

router.post('/v1-5-2/change-reason', function (req, res) {
    const answer = req.session.data['changes'];

    if (answer === "demolished_uninhabitable") {
        res.redirect('/v1-5-2/challenge/changes/demolished');
    } else if (answer === "part_demolished") {
        res.redirect('/v1-5-2/challenge/changes/part-demolished');
    } else if (answer === "split") {
        res.redirect('/v1-5-2/challenge/changes/split-property');
    } else if (answer === "merged") {
        res.redirect('/v1-5-2/challenge/changes/merge-property');
    } else if (answer === "business_use") {
        res.redirect('/v1-5-2/challenge/changes/business');
    } else if (answer === "domestic_use") {
        res.redirect('/v1-5-2/challenge/changes/domestic');
    } else if (answer === "local_area_changes") {
        res.redirect('/v1-5-2/challenge/changes/local-area');
    } else if (answer === "something_else") {
        res.redirect('/v1-5-2/challenge/changes/somethingelse');
    } else {
        res.redirect('/v1-5-2/challenge/changes');
    }
})

// ============================================================
// VERSION 1.6 ROUTES
// ============================================================

router.post('/v1-6/liable-check', function (req, res) {
    const answer = req.session.data['liability']
    const languagePreference = req.session.data['languagePreference'] || 'en'

    if (answer === "yes" || answer === "proxy") {
        res.redirect(`/v1-6/self-cert/selfcert-way?languagePreference=${languagePreference}`)
    } else {
        res.redirect(`/v1-6/errors/no-liable?languagePreference=${languagePreference}`)
    }
})


router.post('/v1-6/verification-method', function (req, res) {
    const answer = req.session.data['verification-method']
    const languagePreference = req.session.data['languagePreference'] || 'en'

    if (answer === "enter-number") {
        res.redirect(`/v1-6/self-cert/verify-liability?languagePreference=${languagePreference}`)
    } else if (answer === "upload-bill") {
        res.redirect(`/v1-6/self-cert/upload-bill?languagePreference=${languagePreference}`)
    } else {
        res.redirect('back')
    }
})

router.post('/v1-6/formal-informal/scenario', function (req, res) {
    const answer = req.session.data['challenge-type']
    const languagePreference = req.session.data['languagePreference'] || 'en'

    if (answer === 'option1') {
        res.redirect(`/v1-6/formal-informal/option1?languagePreference=${languagePreference}`)
    } else if (answer === 'option2') {
        res.redirect(`/v1-6/formal-informal/option2?languagePreference=${languagePreference}`)
    } else if (answer === 'option3') {
        res.redirect(`/v1-6/formal-informal/option3?languagePreference=${languagePreference}`)
    } else if (answer === 'option4') {
        res.redirect(`/v1-6/formal-informal/option4?languagePreference=${languagePreference}`)
    } else {
        res.redirect('back')
    }
})

// ============================================================
// VERSION 1.6.1 ROUTES
// ============================================================

// Evidence journey - upload choice routing
router.post('/v1-6-1/evidence-upload-router', function (req, res) {
    const answer = req.session.data['has-documents']

    if (answer === "yes") {
        res.redirect(`/v1-6-1/evidence-upload`)
    } else {
        res.redirect(`/v1-6-1/evidence-complete`)
    }
})

// ============================================================
// VERSION 1.7 ROUTES
// ============================================================
// Main service journey with bilingual support (EN/CY)
// Includes: Property search, view details, challenge journey
// Accessibility fixes applied: Jan 2026 (WCAG 2.1 AA compliant)
// ============================================================

// Liability check route
// Determines if user can access extended property details
// Uses Government Gateway authentication for verified access
router.post('/v1-7/liable-check', function (req, res) {
    const answer = req.session.data['liability']

    if (answer === "yes" || answer === "proxy") {
        // User is liable or acting on behalf - proceed to authentication
        res.redirect(`/v1-7/gov-gateway`)
    } else {
        // User not liable - show error page
        res.redirect(`/v1-7/errors/no-liable`)
    }
})

// Property type routing for correction journey
// Routes to type-specific pages for property details updates
router.post('/v1-7/propertytype', function (req, res) {
    const answer = req.session.data['type']

    if (answer === "house") {
        res.redirect(`/v1-7/correct/type/house`)
    } else if (answer === "flat") {
        res.redirect(`/v1-7/correct/type/flat`)
    } else if (answer === "maisonette") {
        res.redirect(`/v1-7/correct/type/maisonette`)
    } else if (answer === "bungalow") {
        res.redirect(`/v1-7/correct/type/bungalow`)
    } else if (answer === "other") {
        res.redirect(`/v1-7/correct/type/other`)
    }
})

// Parking type routing
// Determines next step based on parking type selected
router.post('/v1-7/parking-check', function (req, res) {
    const answer = req.session.data['parking-type']

    if (answer === "garaging" || answer === "remote-garaging") {
        // Has garage parking - collect number of spaces
        res.redirect(`/v1-7/correct/parking-spot`)
    } else if (answer === "open-parking" || answer === "carport") {
        // Has open parking - collect number of spaces
        res.redirect(`/v1-7/correct/parking-spot`)
    } else {
        // No parking - continue to next step
        res.redirect(`/v1-7/incorrect-info`)
    }
})

// ============================================================
// CHALLENGE JOURNEY ROUTES (v1.7)
// ============================================================
// User can challenge their Council Tax band through multiple paths
// Based on whether details were changed and if formal challenge is needed
// ============================================================

// Main challenge decision router
// Three possible outcomes based on user answers:
// 1. No challenge + no changes = Simple confirmation
// 2. No challenge + changes made = Collect contact details for updates
// 3. Yes to challenge = Enter formal/informal scenario selection
router.post('/v1-7/challenge-router', function (req, res) {
    const answer = req.session.data['challenge'];
    const detailsChanged = req.session.data['detailsChanged'];

    if (answer === "no" && detailsChanged === "false") {
        // User confirmed details correct and doesn't want to challenge
        res.redirect(`/v1-7/confirmation/nochange-noband`);
    } else if (answer === "no" && detailsChanged === "true") {
        // User updated details but doesn't want to challenge band
        // Collect contact details for the property detail edits
        res.redirect(`/v1-7/challenge/contact-details-edits`);
    } else if (answer === "yes") {
        // User wants to challenge - show scenario selection
        res.redirect(`/v1-7/challenge/scenario`);
    } else {
        // No valid answer - return to previous page
        res.redirect('back');
    }
});

// Why are you challenging?
// Routes based on reason for challenge:
// - "wrong" = Band is incorrect based on wrong property details
// - "changes" = Physical/material changes to property or area
router.post('/v1-7/why-challenge', function (req, res) {
    const answer = req.session.data['why-challenge']

    if (answer === "wrong") {
        // Challenge based on incorrect details
        res.redirect(`/v1-7/challenge/wrong-details`)
    } else {
        // Challenge based on changes to property
        res.redirect(`/v1-7/challenge/changes`)
    }
})

// Evidence upload choice router
// Routes based on whether user has documents to upload
router.post('/v1-7/challenge/evidence-upload-router', function (req, res) {
    const answer = req.session.data['has-documents']

    if (answer === "yes") {
        // User has evidence to upload
        res.redirect(`/v1-7/challenge/evidence-upload`)
    } else {
        // User has no evidence - continue to band selection
        res.redirect(`/v1-7/challenge/which-band`)
    }
})

// How long have you lived at the property?
// Determines eligibility and next steps in challenge
router.post('/v1-7/howlonglived', function (req, res) {
    const answer = req.session.data['howLongLived']

    if (answer === "yes") {
        // Lived there since band was set - ask when became payer
        res.redirect(`/v1-7/challenge/date-payer`)
    } else {
        // Moved in after band set - check if received alteration notice
        res.redirect(`/v1-7/challenge/notice-alteration`)
    }
})

// Did you receive a notice of alteration?
// Required for certain challenge types
router.post('/v1-7/noticealt', function (req, res) {
    const answer = req.session.data['noticeAlteration']

    if (answer === "yes") {
        // Has notice - collect date for time limits
        res.redirect(`/v1-7/challenge/date-notice`)
    } else {
        // No notice - proceed to wrong details
        res.redirect(`/v1-7/challenge/wrong-details`)
    }
})

// What type of change has occurred?
// Routes to specific change type forms
// Each change type has different evidence requirements
router.post('/v1-7/change-reason', function (req, res) {
    const answer = req.session.data['changes'];

    if (answer === "demolished_uninhabitable") {
        // Property demolished or made uninhabitable
        res.redirect('/v1-7/challenge/changes/demolished');
    } else if (answer === "part_demolished") {
        // Part of property demolished
        res.redirect('/v1-7/challenge/changes/part-demolished');
    } else if (answer === "split") {
        // Property split into multiple dwellings
        res.redirect('/v1-7/challenge/changes/split-property');
    } else if (answer === "merged") {
        // Multiple properties merged into one
        res.redirect('/v1-7/challenge/changes/merge-property');
    } else if (answer === "business_use") {
        // Changed from domestic to business use
        res.redirect('/v1-7/challenge/changes/business');
    } else if (answer === "domestic_use") {
        // Changed from business to domestic use
        res.redirect('/v1-7/challenge/changes/domestic');
    } else if (answer === "local_area_changes") {
        // Changes to local area affecting value
        res.redirect('/v1-7/challenge/changes/local-area');
    } else if (answer === "something_else") {
        // Other reason not listed
        res.redirect('/v1-7/challenge/changes/somethingelse');
    } else {
        // No valid selection - return to changes page
        res.redirect('/v1-7/challenge/changes');
    }
})
// Scenario router for formal/informal challenge selection
// Routes based on user's situation:
// option1 = Less than 6 months liable (Formal review)
// option2 = More than 6 months liable (Informal review)
// option3 = Band changed by VOA in last 6 months (Formal review)
// option4 = Property or local area changes
router.post('/v1-7/challenge/scenario-router', function (req, res) {
    const answer = req.session.data['challenge-type']
    const languagePreference = req.session.data['languagePreference'] || 'en'

    if (answer === 'option1') {
        // Formal review - less than 6 months
        res.redirect(`/v1-7/challenge/option1?languagePreference=${languagePreference}`)
    } else if (answer === 'option2') {
        // Informal review - more than 6 months
        res.redirect(`/v1-7/challenge/option2?languagePreference=${languagePreference}`)
    } else if (answer === 'option3') {
        // Formal review - band changed recently
        res.redirect(`/v1-7/challenge/option3?languagePreference=${languagePreference}`)
    } else if (answer === 'option4') {
        // Property changes path
        res.redirect(`/v1-7/challenge/option4?languagePreference=${languagePreference}`)
    } else {
        res.redirect('back')
    }
})

router.post('/1.7/challenge', function (req, res) {
    const answer = req.session.data['challenge'];
    const detailsChanged = req.session.data['detailsChanged'];

    if (answer === "no" && detailsChanged === "false") {
        res.redirect(`/v1-7/confirmation/nochange-noband`);
    } else if (answer === "no" && detailsChanged === "true") {
        res.redirect(`/v1-7/challenge/contact-details-edits`);
    } else if (answer === "yes") {
        res.redirect(`/v1-7/challenge/scenario`);
    } else {
        res.redirect('back');
    }
});


// ////////////////////////// 1.7.1 //////////////////////////////////////////////////////

// ============================================================
// VERSION 1.7.1 ROUTES
// ============================================================


// Double check why this is here if has route below??
router.post('/v1-7-1/challenge', function (req, res) { res.redirect('/v1-7-1/challenge'); });

// Liability check route
// Determines if user can access extended property details
// Uses Government Gateway authentication for verified access
router.post('/v1-7-1/liable-check', function (req, res) {
    const answer = req.session.data['liability']

    if (answer === "yes" || answer === "proxy") {
        // User is liable or acting on behalf - proceed to authentication
        res.redirect(`/v1-7-1/gov-gateway`)
    } else {
        // User not liable - show error page
        res.redirect(`/v1-7-1/errors/no-liable`)
    }
})

// Property type routing for correction journey
// Routes to type-specific pages for property details updates
router.post('/v1-7-1/propertytype', function (req, res) {
    const answer = req.session.data['type']

    if (answer === "house") {
        res.redirect(`/v1-7-1/correct/type/house`)
    } else if (answer === "flat") {
        res.redirect(`/v1-7-1/correct/type/flat`)
    } else if (answer === "maisonette") {
        res.redirect(`/v1-7-1/correct/type/maisonette`)
    } else if (answer === "bungalow") {
        res.redirect(`/v1-7-1/correct/type/bungalow`)
    } else if (answer === "other") {
        res.redirect(`/v1-7-1/correct/type/other`)
    }
})

// Parking type routing
// Determines next step based on parking type selected
router.post('/v1-7-1/parking-check', function (req, res) {
    const answer = req.session.data['parking-type']

    if (answer === "garaging" || answer === "remote-garaging") {
        // Has garage parking - collect number of spaces
        res.redirect(`/v1-7-1/correct/parking-spot`)
    } else if (answer === "open-parking" || answer === "carport") {
        // Has open parking - collect number of spaces
        res.redirect(`/v1-7-1/correct/parking-spot`)
    } else {
        // No parking - continue to next step
        res.redirect(`/v1-7-1/incorrect-info`)
    }
})

// ============================================================
// CHALLENGE JOURNEY ROUTES (v1.7.1)
// ============================================================
// User can challenge their Council Tax band through multiple paths
// Based on whether details were changed and if formal challenge is needed
// ============================================================

// Main challenge decision router
// Three possible outcomes based on user answers:
// 1. No challenge + no changes = Simple confirmation
// 2. No challenge + changes made = Collect contact details for updates
// 3. Yes to challenge = Enter formal/informal scenario selection
router.post('/v1-7-1/challenge-router', function (req, res) {
    const answer = req.session.data['challenge'];
    const detailsChanged = req.session.data['detailsChanged'];

    if (answer === "no" && detailsChanged === "false") {
        // User confirmed details correct and doesn't want to challenge
        res.redirect(`/v1-7-1/confirmation/nochange-noband`);
    } else if (answer === "no" && detailsChanged === "true") {
        // User updated details but doesn't want to challenge band
        // Collect contact details for the property detail edits
        res.redirect(`/v1-7-1/challenge/contact-details-edits`);
    } else if (answer === "yes") {
        // User wants to challenge - show scenario selection
        res.redirect(`/v1-7-1/challenge/scenario`);
    } else {
        // No valid answer - return to previous page
        res.redirect('back');
    }
});

// Why are you challenging?
// Routes based on reason for challenge:
// - "wrong" = Band is incorrect based on wrong property details
// - "changes" = Physical/material changes to property or area
router.post('/v1-7-1/why-challenge', function (req, res) {
    const answer = req.session.data['why-challenge']

    if (answer === "wrong") {
        // Challenge based on incorrect details
        res.redirect(`/v1-7-1/challenge/wrong-details`)
    } else {
        // Challenge based on changes to property
        res.redirect(`/v1-7-1/challenge/changes`)
    }
})

// Evidence upload choice router
// Routes based on whether user has documents to upload
router.post('/v1-7-1/challenge/evidence-upload-router', function (req, res) {
    const answer = req.session.data['has-documents']

    if (answer === "yes") {
        // User has evidence to upload
        res.redirect(`/v1-7-1/challenge/evidence-upload`)
    } else {
        // User has no evidence - continue to band selection
        res.redirect(`/v1-7-1/challenge/which-band`)
    }
})

// How long have you lived at the property?
// Determines eligibility and next steps in challenge
router.post('/v1-7-1/howlonglived', function (req, res) {
    const answer = req.session.data['howLongLived']

    if (answer === "yes") {
        // Lived there since band was set - ask when became payer
        res.redirect(`/v1-7-1/challenge/date-payer`)
    } else {
        // Moved in after band set - check if received alteration notice
        res.redirect(`/v1-7-1/challenge/notice-alteration`)
    }
})

// Did you receive a notice of alteration?
// Required for certain challenge types
router.post('/v1-7-1/noticealt', function (req, res) {
    const answer = req.session.data['noticeAlteration']

    if (answer === "yes") {
        // Has notice - collect date for time limits
        res.redirect(`/v1-7-1/challenge/date-notice`)
    } else {
        // No notice - proceed to wrong details
        res.redirect(`/v1-7-1/challenge/wrong-details`)
    }
})

// What type of change has occurred?
// Routes to specific change type forms
// Each change type has different evidence requirements
router.post('/v1-7-1/change-reason', function (req, res) {
    const answer = req.session.data['changes'];

    if (answer === "demolished_uninhabitable") {
        // Property demolished or made uninhabitable
        res.redirect('/v1-7-1/challenge/changes/demolished');
    } else if (answer === "part_demolished") {
        // Part of property demolished
        res.redirect('/v1-7-1/challenge/changes/part-demolished');
    } else if (answer === "split") {
        // Property split into multiple dwellings
        res.redirect('/v1-7-1/challenge/changes/split-property');
    } else if (answer === "merged") {
        // Multiple properties merged into one
        res.redirect('/v1-7-1/challenge/changes/merge-property');
    } else if (answer === "business_use") {
        // Changed from domestic to business use
        res.redirect('/v1-7-1/challenge/changes/business');
    } else if (answer === "domestic_use") {
        // Changed from business to domestic use
        res.redirect('/v1-7-1/challenge/changes/domestic');
    } else if (answer === "local_area_changes") {
        // Changes to local area affecting value
        res.redirect('/v1-7-1/challenge/changes/local-area');
    } else if (answer === "something_else") {
        // Other reason not listed
        res.redirect('/v1-7-1/challenge/changes/somethingelse');
    } else {
        // No valid selection - return to changes page
        res.redirect('/v1-7-1/challenge/changes');
    }
})
// Scenario router for formal/informal challenge selection
// Routes based on user's situation:
// option1 = Less than 6 months liable (Formal review)
// option2 = More than 6 months liable (Informal review)
// option3 = Band changed by VOA in last 6 months (Formal review)
// option4 = Property or local area changes
router.post('/v1-7-1/challenge/scenario-router', function (req, res) {
    const answer = req.session.data['challenge-type']

    if (answer === 'option1') {
        // Formal review - less than 6 months
        res.redirect('/v1-7-1/challenge/option1')
    }
    else if (answer === 'option2') {
        // Informal review - more than 6 months
        res.redirect('/v1-7-1/challenge/option2')
    }
    else if (answer === 'option3') {
        // Formal review - band changed recently
        res.redirect('/v1-7-1/challenge/option3')
    }
    else if (answer === 'option4') {
        // Property changes path
        res.redirect('/v1-7-1/challenge/option4')
    }
    else {
        res.redirect('back')
    }
})

router.post('/v1-7-1/challenge', function (req, res) {
    const answer = req.session.data['challenge'];
    const detailsChanged = req.session.data['detailsChanged'];

    if (answer === "no" && detailsChanged === "false") {
        res.redirect(`/v1-7-1/confirmation/nochange-noband`);
    } else if (answer === "no" && detailsChanged === "true") {
        res.redirect(`/v1-7-1/challenge/contact-details-edits`);
    } else if (answer === "yes") {
        res.redirect(`/v1-7-1/challenge/scenario`);
    } else {
        res.redirect('back');
    }
});