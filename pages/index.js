import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hacker News Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2>Header</h2>
        <nav>
          <ul>
            <li>Nav List</li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Articles</h2>
        <ul>
          <li>Article List</li>
        </ul>
      </main>
    </>
  );
}
