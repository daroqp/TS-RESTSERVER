import mongoose, { Collection } from "mongoose";

export const MongooseConfig = {
    // uri: "null",
    // collection: Collection,
    async connect(uri: string): Promise<void> {
        mongoose.connect(
            uri,
            {
                autoIndex: true,
                autoCreate: true,
            },
            (err) => {
                if (err) {
                    console.log(err.message);
                }
            }
        );
    },
};
