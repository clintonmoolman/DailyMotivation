import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  // console.log(day);

  //setting the default values
  let type = "a weekday";
  let adv = "It's time to work hard";

  // setting the condition to validate if it is weekend, and if true to change the default values
  if (day === 0 || day === 6) {
    let type = "the weekend";
    let adv = "It's time to relax";
  };

  //passing the data to the index.ejs file
  res.render("index.ejs", {
     dayType: type,
      advice: adv });
});

//setting up the server to listen at port 3000
app.listen(port, () => {
  console.log(`Server is running on port:${port}.`);
});
