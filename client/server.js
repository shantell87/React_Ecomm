const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds161890.mlab.com:61890/heroku_5m2hprn8",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});