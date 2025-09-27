import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-Montserrat antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{ style: { background: "#000000", color: "#ffffff" } }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
