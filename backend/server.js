const app = require("./src/app");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Hotel PMS API running on http://localhost:${PORT}`);
});
// touch 
// restart 
