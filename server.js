const express = require('express');
const app  = express();
var cors = require('cors');
var path = require('path');
const axios = require('axios');

var http = require('http').Server(app);

//FOR DEPLOY USE mongodb+srv://ben:myxboxname1996@cluster0-wjntd.mongodb.net/store


//enable cors for dev
app.use(cors());


//lets  our routes accept JSON
app.use(express.json());





//serve static index file for all routes
app.use( express.static( __dirname + `/build` ) );
 app.get('/:id', async(req, res)=>{

    var id = req.params.id;
    var key = 'AIzaSyDf8XHWuaQErkeZG7mUex59BDW7tHyWoUM';
    
    var data = await axios.get('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + id + '&key=' + key);
    console.log(data);
    return res.json({data:data.data});
}); 

http.listen(process.env.PORT || 3000  , () => console.log('Server started'));