"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Rajdhani } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import HeaderFooterLayout from "./HeaderFooterLayout";
import ProviderQuery from "./ProviderQuery";
import ReduxProvider from "./ReduxProvider/ReduxProvider";
import AuthProvider from "./Services/AuthProvider/AuthProvider";
import ProductProvider from "./Services/ProductProvider/ProductProvider";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: "600" });

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>
        <Elements stripe={stripePromise}>
          <ReduxProvider>
            <ProviderQuery>
              <AuthProvider>
                <ProductProvider>
                  <HeaderFooterLayout>{children}</HeaderFooterLayout>
                  <Toaster />
                </ProductProvider>
              </AuthProvider>
            </ProviderQuery>
          </ReduxProvider>
        </Elements>
      </body>
    </html>
  );
}
