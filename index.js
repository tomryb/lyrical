const app = require("./server/server");
const PORT = process.env.PORT || 5000;

// app.listen(4001, () => {
//   console.log("Listening on port 4001");
// });

app.listen(PORT, () => {
  console.log("Listening on port 4001");
});