import app from "./app.js";
import { EnvVars } from "./config/env.js";



const port = EnvVars.PORT || 5000;

async function main() {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    })
  } catch (error) {
    console.log("Server connection lost");
  }
}


main();