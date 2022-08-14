const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:6060', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
export {cors, corsOptions}