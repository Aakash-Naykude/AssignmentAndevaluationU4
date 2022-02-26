// const EventEmitter = require('events')
// const emitter = new EventEmitter()

// emitter.emit('messageLogged')
// emitter.on('messageLogged', function(){
//     console.log("Logged");
// })

router.get("/", logger, function (req, res, next) {
  console.log("firts");
  res.send("hello");
  next();
});
function logger(req, res, next) {
  console.log("helloer");
  next();
}
//next()

function print(i) {
  console.log(i);
  return new Promise((resolve) => {
    setTimeout((i) => {
      resolve(i);
    }, 1000);
  });
}

async function callAbove() {
  for (let i = 1; i < 5; i++) {
    let res = await print(i);
    //console.log(res);
  }
}
callAbove();
