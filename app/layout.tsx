import '@/styles/globals.css'
import Sidebar from "@/components/Sidebar";
import SessionProvider from "@/components/SessionProvider";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default async function RootLayout({children,}: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);
    console.log(session)
  return (
    <html lang="en">
      <body>
      <SessionProvider session={session}>
          {!session ? (
              <Login/>
          ): (
              <div className={'flex w-full'}>
                  <div className={'bg-[#202020] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'}>
                      <Sidebar/>
                  </div>
                  <ClientProvider/>
                  <div className={'bg-[#161616] flex-1'}>
                      {children}
                  </div>
              </div>
          )}
      </SessionProvider>
      </body>
    </html>
  )
}
