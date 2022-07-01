import app from "../config/app";
import "dotenv/config";
import { MongooseConfig } from "../../infra/database/config";

MongooseConfig.connect(process.env.MONGODB_CNN!)
    .then(async () => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
            console.log("Base de datos online");
        });
    })
    .catch(console.error);
