const express = require('express')
const app = express()
const port = 7878

app.get('/helloworld/:id', function(request, response){
  response.send('helloworld ' + request.params.id);
});

app.listen(port, () => console.log(`Listening on port ${port}!`))