import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-Montserrat antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
