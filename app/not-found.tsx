import React from "react";
import Link from "next/link";
import Head from "next/head";

const notFound = () => {
  return (
    <>
    <Head>
      <title>404 Error</title>
    </Head>
      <div className="error-page">
        <h1 className="error-Heading">
          This Page is Not Available Brother 404 ERROR
        </h1>
        <button className="error-Button parallelogram px-4 py-2 text-sm border border-white hover:border-brand hover:text-brand transition-all duration-300 mr-2">
          <Link href="/">Go to Main Website</Link>
        </button>
      </div>
    </>
  );
};

export default notFound;
