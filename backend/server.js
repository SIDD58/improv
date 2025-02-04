const express = require('express') // importing express module
const http = require('http') // importing http module
const {Server} = require('socket.io') // importing socket.io server
const cors = require("cors") // to allow cross origin requests
const mongoose = require("mongoose") // to connect to mongodb database
require("dotenv").config(); // to use the environment variables in .env file
const User = require('./models/user') // importing user schema from models folder
const passport = require('passport') // importing passport module
const session = require('express-session') // importing express-session module

// creating express application , now all request will pass through this application
const app=express()
// global middleware function
app.use(cors()); // allow requests from cross origin 

app.use((req, res, next) => {
    console.log(`Request method: ${req.method}, URL: ${req.url}`);
    next();
  });

require('./routes/auth') // importing auth.js file from routes folder



// global middleware functions
app.use(express.json()); // allow to handle json data in request 
// setting up session middleware
app.use(
session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60}
  }
)
);
  
app.use(passport.initialize()); // initialize passport
app.use(passport.session()); // use passport session


// connecting to mongoose database 
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
).then(
    ()=> { 
        console.log("MongoDB connected successfully")
    }
)
.catch(
    err => console.log(err)
);







// creating server 
const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:'*' // Allow connections from all origin modify this to reflect the real things when in production
    }
});

// middleware function to check login status 

function isLoggedIn(req,res,next){
    req.user? next():res.sendStatus(401);
}

app.get('/',(req,res)=>{
    res.send("<a href='/auth/google'>Login with Google</a>")
})

app.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}))



app.get('/google/callback',passport.authenticate('google',{
    successRedirect:'/protected',
    failureRedirect:'/failure'
}))

app.get('/protected',isLoggedIn,(req,res)=>{
    console.log(req.user)
    res.status(200).json({ displayName: req.user.displayName });
    //res.send(`Welcome to the protected  ${req.user.displayName}`)
});
app.get('/failure',(req,res)=>{
    res.send("Something went wrong...")
});
app.get('/logout',(req,res)=>{
    req.logout((err) => {
        if (err) {
            console.log("Log out Error: ",err);
          return next(err); // Handle any errors that occur during logout
        }
        req.session.destroy();
        res.redirect('/'); // Redirect after successful logout
      });
});

// app.get('/logout',(req,res)=>{
//     req.logout();
//     res.redirect('/')
// })  



// app.get('/test',(req,res)=>{
//     return {
//         message:"Hello World"
//     }
// })

let player_info = {
    names: [],
    count: 0
};



// WebSocket connections
io.on('connection', (socket) => {
    console.log(`A user connected: ${socket.id}`);
  
    // Example: Listening for a message
    socket.on('sendMessage', (message) => {
      console.log(`Message from ${socket.id}: ${message}`);
      // Broadcast message to all clients
      io.emit('receiveMessage', message);
    });

    // Lilstening for new_palyer
    socket.on('new_player',(player_name)=>{
        console.log("Hello tata")

        // checking for duplicate names of same player
        // like map but returns true or false based on this
        old_player = player_info['names'].find((player)=>player.socket_id == socket.id) 
        if (old_player)
        {
                old_player['player_name']=player_name
        }
        else
        {
            player_info['names'].push({'socket_id':socket.id,'player_name':player_name})
            player_info['count']=player_info['count']+1;
        }
        
        console.log(player_info)

        io.emit('player_info',player_info)
    })
  
    // Handle disconnection
    socket.on('disconnect', () => {
        // this is necessary because there are some players which are getting disconnected but never entered their name hence 
        // never go in the player_info 
        old_player = player_info['names'].find((player)=>player.socket_id == socket.id)
        if(old_player)
        {
                // Find the index of the player in the array
            let playerIndex = player_info['names'].indexOf(old_player);

                // If the player exists, remove the player from the array
            if (playerIndex !== -1) 
                {
                    player_info['names'].splice(playerIndex, 1);
                    player_info['count'] -= 1;
                }
        }
        
        io.emit('player_info',player_info);

      console.log(`User disconnected: ${socket.id}`);
    });
  });

const PORT= 3000
server.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
});