require("dotenv").config();

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../Schema/user");


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ["profile", "email"]
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await User.findOne({
                provider:"Google",
                providerId: profile.id
            });
            if (user) {
                user.lastLogin=Date.now();
                await user.save();
                return done(null, user);
            }
            user = await User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                provider: "Google",
                providerId: profile.id,
                lastLogin: Date.now(),
                avatar:profile.photos[0].value
            });
            return done(null,user);
        } catch (err) {
            return done(err, null);
        }
    }
));


// Github
passport.use(new GitHubStrategy({
    clientID:process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
},
    async(accessToken,refreshToken,profile,done)=>{
       
        try{
            let user=await User.findOne({
                provider:"Github",
                providerId:profile.id
            });
            if(user){
                user.lastLogin=Date.now();
                await user.save();
                return done(null, user);
            }
            user=await User.create({
                name:profile.displayName,
                email: profile.emails[0].value,
                provider:"Github",
                providerId:profile.id,
                lastLogin:Date.now(),
                avatar:profile._json.avatar_url
            })
            return done(null,user);
        }catch(err){
            return done(err, null);
        }
    }
))
