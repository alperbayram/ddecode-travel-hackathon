import React from "react";

const teams = [
  {
    name: "Aybars Göktuğ Ayan",
    title: "Software Developer",
  },
  {
    name: "Alper Bayram",
    title: "Software Developer",
  },
  {
    name: "Burak Akça",
    title: "Software Developer",
  },
  {
    name: "Kaan",
    title: "Software Developer",
  },
  {
    name: "Kemal Barış",
    title: "Software Developer",
  },
  {
    name: "Kemal Barış",
    title: "Software Developer",
  },
];
export default function Team() {
  return (
    <div className="flex flex-col justify-center lg:flex-row p-8 pb-20 gap-16 sm:p-18 mx-auto max-w-7xl pt-20">
      <div className="grid grid-cols-1 gap-y-8 items-center lg:items-center lg:gap-x-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {teams.map((team) => {
            return (
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold text-gray-900">{team.name}</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
