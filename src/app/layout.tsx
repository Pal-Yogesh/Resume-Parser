import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Resume Parser",
  description:
"Resume Parser"};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <TopNavBar /> */}
        <div  className="mt-10"></div>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
