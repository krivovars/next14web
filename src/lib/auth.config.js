import {NextResponse} from "next/server";

export const authConfig = {
    pages: {
        signIn: '/login'
    },

    providers: [],

    callbacks: {
        async jwt({token, user}) {
            if (user)  {
                token.user = user;
                token.isAdmin = user.isAdmin;
            }

            return token;
        },
        async session({session, token}) {
            if (token) {
            session.user.id = token.id;
            session.user.isAdmin = token.isAdmin;
            return session;
            }
        },
        authorized: async ({auth, request}) => {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin');
            const isOnBLogPage = request.nextUrl?.pathname.startsWith('/blog');
            const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

            //ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

            if(isOnAdminPanel && !user?.isAdmin) {
                return false
            }

            //ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE

            if (isOnBLogPage && !user) {
                return false
            }

            //ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

            if (isOnLoginPage && user) {
                return NextResponse.redirect(new URL('/', request.url))
            }
            
            return true;

        }
    }
}