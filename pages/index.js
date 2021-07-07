import Head from 'next/head'
import { useState } from 'react'

export default function Home() {



  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="my-4">
        <CookieStand />

      </main>
      <footer className="px-8 py-6 bg-green-500">
        <p>&copy; 2021</p>
      </footer>
    </div>
  )
}

function CookieStand() {

  const [stand, setStand] = useState({ "status": "pending" })

  function submitHandler(event) {
    event.preventDefault();
    const standInfo = {};
    standInfo.location = event.target.location.value;
    standInfo.minCustomers = parseInt(event.target.minCustomers.value);
    standInfo.maxCustomers = parseInt(event.target.maxCustomers.value);
    standInfo.avgCookies = parseFloat(event.target.avgCookies.value);

    setStand(standInfo);

  }
  return (
    <main className="mx-auto h-96">
      <div className="mx-auto h-88">
        <form className="justify-center p-2 mx-10 my-5 bg-green-300 rounded h-168" onSubmit={submitHandler}>
          <div>
            <h2 className="min-w-full p-2 mx-auto my-2 text-2xl text-center fonr-semibold">
              Create Cookie Stand
            </h2>
            <div className="flex mx-10">
              <label className="mx-2">Location</label>
              <input id="location" name="location" type="text" className="flex-auto" />
            </div>
            <div className="flex items-center w-3/4 py-10 mx-20">

              <div className="justify-items-start">
                <label className="py-10">Minimum Customers Per Hour</label>
                <input id="min-customers" name="minCustomers" type="number" className="mx-1" />
              </div>
              <div className="justify-items-start">
                <label className="py-10">Maximum Customers Per Hour</label>
                <input id="max-customers" name="maxCustomers" type="number" className="mx-1" />
              </div>
              <div className="justify-items-start">
                <label className="py-10">Average Cookies Per Sale</label>
                <input id="avg-cookies" name="avgCookies" type="number" step=".1" className="mx-1" />
              </div>
              <button type="submit" className="w-48 h-20 mx-auto bg-green-500">Create</button>
            </div>
          </div>
        </form>
        <pre className="text-center">
          <code>
            {JSON.stringify(stand)}
          </code>
        </pre>
      </div>
    </main>
  )
}

function Header() {
  return <header className="px-8 py-6 bg-green-500">
    <h1 className="text-4xl">Cookie Stand Admin</h1>
  </header>
}
