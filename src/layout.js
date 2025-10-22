import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
})

export const metadata = {
  title: "Google Ambassador Program",
  description: "Empowering innovation with Google Gemini",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: poppins.style.fontFamily }}>{children}</body>
    </html>
  )
}
