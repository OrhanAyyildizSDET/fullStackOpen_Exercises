1. "npm init" install init without react-app
2. "scripts": {
    "start": "node index.js",  => add. tis script to scripts
    "test": "echo \"Error: no test specified\" && exit 1"
3. Install backhand library "npm install express"
4. "npm update" and "npm install"
5. "npm install --save-dev nodemon" it watches backhand and do if there is any changes
These development dependencies are not needed when the application is run in production mode on the production server
6. we can start our app "node_modules/.bin/nodemon index.js"
7. "dev": "nodemon index.js", add to script
8. npm install cors  (if you use same port like "3001" you hav issue about it. If you like to avoid this issue install cors.)
9. const cors = require('cors')
app.use(cors())