const bodyParser = require('body-parser')
const app = require('express')()

// app.use(function (req, res, next) {
//   if(!res.headersSent){
//     // Send Early Hints headers
//     res.writeHead(103, {
//       Link: '</css/main.css>; rel=preload; as=style',
//     });
//   }

//   // Proceed to the next middleware or route
//   next();
// })

// app.use(bodyParser.json())
// app.all('/getJSON', (req, res) => {
//   res.json({ data: 'data' })
// })

module.exports = app