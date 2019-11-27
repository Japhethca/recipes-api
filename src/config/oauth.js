import dotenv from 'dotenv';

dotenv.config();
export default {
  google: {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
};
