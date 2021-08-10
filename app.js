const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors")

app.use(cors())

app.get('/products/:id', function(req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.listen(80, function() {
    console.log('CORS-enabled web server listening on port 80')
})


const { sequelize } = require("./models");
// sequelize.sync({force:true}); 
const routerUser = require("./controllers/user/userRouter");
app.use(express.json());
app.use("/users", routerUser);
const routerMyClass = require("./controllers/MyClass/MyClassRouter");
app.use(express.json());
app.use("/MyClass", routerMyClass);
const routerAuth = require("./controllers/auth/authRouter");
app.use("/auth", routerAuth);
const routerSchedule = require("./controllers/schedule/scheduleRouter");
app.use(express.json());
app.use("/schedule", routerSchedule);
const routerMaterials = require("./controllers/materials/materialRouter");
app.use(express.json());
app.use("/materials", routerMaterials);
const routerJC = require("./controllers/joinclass/joinRouter");
app.use(express.json());
app.use("/JoinClass", routerJC);

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});