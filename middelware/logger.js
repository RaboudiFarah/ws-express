const date =new Date ();
const currentHour =date.getHours();
console.log ("currentHour",currentHour);
const currentDay =date.getDay()

function logger (req,res,next){
    if (currentHour >8 && currentHour <17 && currentDay >0 && currentDay <6) {
    next ()
    } else {
        res.send ("<h1>Closed !</h1>")
    }
}
module.exports = logger ;