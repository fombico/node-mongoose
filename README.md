A node app that demonstratates [mongoose](http://mongoosejs.com/), a MongoDB ORM with express.

#### Setup

1. Install mongodb
```
brew install mongodb
```

2. Start mongodb
```
brew services start mongodb
```

3. Install the dependencies and run the app
```
npm install
node script
```

Go to `http://localhost:8080/` to see a form where you can fill in the details. Pressing submit will insert it into MongoDB.
You are redirected to a page that shows the contents of the document in MongoDB.
