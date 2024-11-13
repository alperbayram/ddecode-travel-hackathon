function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Profile() {
  return (
    <div className="p-8 pb-20 gap-16 sm:p-20">
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
                "text-5xl font-semibold tracking-tight"
              )}
            >
              Wallet ID
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
    </div>
  );
}
