// IMPORTAÇÕES
const express = require('express')
const { engine } = require ('express-handlebars')
const session  = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require('./db/conn')

const app = express()

//MODELS
const Thought = require('./models/Thoughts')
const User = require('./models/User')

// IMPORT ROUTES
const thoughtsRoutes = require('./routes/thoughtsRoutes')
const authRoutes = require('./routes/authRoutes')


//IMPORT CONTROLLER
const ThoughtController = require('./controllers/thoughtController')

// TEMPLATE ENGINE
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// RECEBE RESPOSTA DO BODY
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

// SESSION MIDDLEWARE
app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () {},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    }),
)

// FLASH MESSAGES
app.use(flash())

// PUBLIC PATH
app.use(express.static('public'))

// SET SESSION TO RES
app.use((req, res, next) => {
    if(req.session.userid) {
        res.locals.session = req.session
    }

    next()
})

// ROUTES
app.use('/thoughts', thoughtsRoutes)
app.use('/', authRoutes)


app.get('/', ThoughtController.showThoughts)


conn
    //.sync({ force: true })
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))