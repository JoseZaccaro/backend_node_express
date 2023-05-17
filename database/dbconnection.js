const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB
    , {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}
).then(() => console.log("DB is ready")).catch((err) => {
    console.error(err)
})

module.exports = mongoose;