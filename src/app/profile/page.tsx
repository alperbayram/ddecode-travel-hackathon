"use client"; // Mark as a client component

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import SubmitTransaction from "../components/submitTransect";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface IResponse {
  key: string | number;
  value: string | number;
}

export default function Profile() {
  const [walletId, setWalletId] = useState<string>("");
  const [attributes, setAttributes] = useState<IResponse[]>([]); // Saved key-value pairs
  const [savedAttributes, setSavedAttributes] = useState<IResponse[]>([]); // Saved attributes for the blockchain
  const [newKey, setNewKey] = useState<string>(""); // Input for new key
  const [newValue, setNewValue] = useState<string>(""); // Input for new value

  useEffect(() => {
    // Load walletId and saved key-value pairs from cookies
    const savedWalletId = Cookies.get("walletAddress");
    if (savedWalletId) {
      setWalletId(savedWalletId);
    }

    const savedAttributes = Cookies.get("attributes");
    if (savedAttributes) {
      setAttributes(JSON.parse(savedAttributes));
    }

    const loadedSavedAttributes = Cookies.get("savedAttributes");
    if (loadedSavedAttributes) {
      setSavedAttributes(JSON.parse(loadedSavedAttributes));
    }
  }, []);

  const handleSaveAttribute = () => {
    if (newKey.trim() !== "" && newValue.trim() !== "") {
      const updatedAttributes = [
        ...attributes,
        { key: newKey, value: newValue },
      ];
      setAttributes(updatedAttributes);
      Cookies.set("attributes", JSON.stringify(updatedAttributes), {
        expires: 7,
      }); // Save to cookies
      setNewKey("");
      setNewValue("");
    }
  };

  const handleDeleteAttribute = (index: any) => {
    const updatedAttributes = attributes.filter((_, i) => i !== index);
    setAttributes(updatedAttributes);
    Cookies.set("attributes", JSON.stringify(updatedAttributes), {
      expires: 7,
    }); // Save the updated list to cookies
  };

  const handleTransactionComplete = () => {
    setSavedAttributes(attributes);
    Cookies.set("savedAttributes", JSON.stringify(attributes), { expires: 7 });
    setAttributes([]); // Clear attributes after storing in saved attributes
    Cookies.remove("attributes"); // Remove the unsaved attributes from cookies
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSaveAttribute();
    }
  };

  const jsonData = {
    name: "Test Data",
    timestamp: new Date().toISOString()
  };

  const isConnected = true; // This would come from WalletConnect

  return (
    <div className="p-8 pb-20 gap-16 sm:p-20">
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>

        <div className="grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          <div
            className={classNames(
              "bg-white/60 sm:mx-8 lg:mx-0",
              "rounded-t-3xl sm:rounded-none lg:rounded-3xl lg:rounded-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              className={classNames(
                "text-indigo-600",
                "text-base/7 font-semibold"
              )}
            >
              test
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  "text-gray-900",
                  "text-sm font-semibold tracking-tight"
                )}
              >
                {walletId ? walletId : "Wallet ID"}
              </span>
              <span className={classNames("text-gray-500", "text-base")}>
                /month
              </span>
            </p>
            <p className={classNames("text-gray-600", "mt-6 text-base/7")}>
              description
            </p>
            <a
              className={classNames(
                "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Get started today
            </a>
          </div>
        </div>

        {/* Key-Value Attributes Section */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-700">Attributes:</h2>
          <ul className="list-disc pl-5 mt-2">
            {attributes.map((attribute, index) => (
              <li key={index} className="text-gray-800 flex items-center gap-2">
                <strong>{attribute.key}:</strong> {attribute.value}
                <button
                  onClick={() => handleDeleteAttribute(index)}
                  className="text-red-500 ml-2 text-sm font-semibold"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          {/* Input fields directly visible */}
          <div className="mt-4 mb-4 flex items-center gap-2">
            <input
              type="text"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              placeholder="Key"
              onKeyDown={handleKeyDown}
              className="border rounded-md p-2 w-1/4"
            />
            <input
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              placeholder="Value"
              onKeyDown={handleKeyDown}
              className="border rounded-md p-2 w-1/2"
            />
          </div>

          <SubmitTransaction
            jsonData={jsonData}
            isConnected={isConnected}
            onTransactionComplete={handleTransactionComplete}
          />

          {/* Saved Attributes Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-700">Saved Attributes:</h2>
            <ul className="list-disc pl-5 mt-2">
              {savedAttributes.map((attribute, index) => (
                <li key={index} className="text-gray-800">
                  <strong>{attribute.key}:</strong> {attribute.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}