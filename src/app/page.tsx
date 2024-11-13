"use client"; // Bu satırı ekleyin

import Image from "next/image";
import WalletConnect from "./components/WalletConnect";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import SectionComponent from "./components/section/section";
import SectionTwoComponent from "./components/sectiontwo/sectiontwo";

export default function Home() {
  const [walletId, setWalletId] = useState("");

  useEffect(() => {
    // Çerezden walletAddress değerini alçdmdddfukfboıbobkufku
    const savedWalletId = Cookies.get("walletAddress");
    if (savedWalletId) {
      setWalletId(savedWalletId);
    }
  }, []);

  return (
    <div className="gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* <WalletConnect /> */}
      <SectionTwoComponent />
      <div className="">
        <SectionComponent />
      </div>
      {/* Wallet ID Gösterimi
      {walletId ? (
        <p>
          Connected Wallet ID: {walletId.slice(0, 6)}...{walletId.slice(-4)}
        </p>
      ) : (
        <p>No Wallet Connected</p>
      )} */}
    </div>
  );
}
