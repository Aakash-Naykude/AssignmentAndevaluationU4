// const EventEmitter = require('events')
// const emitter = new EventEmitter()


// emitter.emit('messageLogged')
// emitter.on('messageLogged', function(){
//     console.log("Logged");
// })


router.get('/', logger, function(req, res,next){
    console.log("firts");
    res.send("hello")
    next()
})
function logger(req, res, next) {
    console.log("helloer")
    next()
}
//next()