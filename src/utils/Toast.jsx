import React from "react";

export default function Toast() {
  return (
    <div
      className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
      role="alert"
    >
      <div className="flex p-4">
        <div className="flex-shrink-0">
          <svg
            className="flex-shrink-0 w-4 h-4 text-teal-500 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="ms-3">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Message sent successfully!.
          </p>
        </div>
      </div>
    </div>
  );
}
