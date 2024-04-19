import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import {connectToDB} from "@/lib/utils";
import {User} from "@/lib/models";
import bcrypt from "bcryptjs";
import {authConfig} from "@/lib/auth.config";


const login = async (credentials) => {
   try {
       connectToDB();
       const user = await User.findOne({email: credentials.email})
       if (!user) {
           return {error: "User not found"}
       }

       const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

       if (!isPasswordValid) {
           return {error: "Invalid password"}
       }

       return user
   }
    catch (err) {
        console.log(err)
    }
}

export const {handlers, auth, signIn, signOut} =
    NextAuth({
        ...authConfig,
    providers: [GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider ({
         async authorize(credentials) {
            try {
                return await login(credentials)
            }
             catch (err) {
                 return null;
             }
        }
    })
    ],
    callbacks: {
        async signIn({account, profile}) {
            if (account.provider === "github") {
                connectToDB();
                try {
                    const user = await User.findOne({email: profile.email})
                    if (!user) {
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            profilePicture: profile.avatar_url
                        })

                        await newUser.save();
                    }

                } catch (err) {
                    console.log(err)
                    return false;
                }
            }
            return true
        },
            ...authConfig.callbacks,
    },
})