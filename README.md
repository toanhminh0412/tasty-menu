Project URL: https://tasty-menu-ca.vercel.app/

# Set up development server
## Create an environment variable file
In the root directory, create a `.env.local` file. In that file, have the followings:

    NEXTAUTH_SECRET=some-secret
    APP_URL=<app_url>       # Likely is http://localhost:3000
    MONGODB_URI=<local_mongodb_url>

To get the `local_mongodb_url`, you will need to download a [MongoDB Community](https://www.mongodb.com/download-center/community/releases). You can run a local instance of MongoDB, and use that URL.

**Tips**: You can also download `mongosh` to connect and run queries in your MongoDB database.

A shell might look as follow:

    mongosh                                           
    Current Mongosh Log ID: 65d9918a14c0b0d154a315a1
    Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5
    (node:1785) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
    (Use `node --trace-deprecation ...` to show where the warning was created)
    Using MongoDB:          7.0.2
    Using Mongosh:          2.1.5

    For mongosh info see: https://docs.mongodb.com/mongodb-shell/

    ------
    The server generated these startup warnings when booting
    2024-02-23T22:49:44.879-08:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
    ------

    test> db.users.find()
    [
    {
        _id: ObjectId('65d6e30a68368847d461d12d'),
        email: 'archie@example.org',
        password: '$2b$10$fC6mdRah8WaDd4q5BHwI1OsqWH7QRUGoEWaRKKZTBn2kSc6IgyqT2',
        __v: 0
    },
    {
        _id: ObjectId('65d991e5a66340ba44c4af54'),
        email: 'admin@example.org',
        password: '$2b$10$SOdt9lsKtgIrbTDKEt2NfOxnYdfDHuzsxSP7dKWFoszrtSKTNLUNq',
        __v: 0
    }
    ]

## Start up the development server
    npm install         # Download all packages
    npm run dev         # Run the development server