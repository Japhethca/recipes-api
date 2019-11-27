import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import oauthConfig from './config/oauth';


passport.use(new GoogleStrategy({
  clientID: oauthConfig.google.clientID,
  clientSecret: oauthConfig.google.clientSecret,
  callbackURL: '/api/auth/redirect',
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));
