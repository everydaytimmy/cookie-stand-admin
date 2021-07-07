import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [question, setQuestion] = useState("Ask me anything...");
  const [reply, setReply] = useState("what?!!")

  return (
    <div>
      <Header />
      <main className="my-4">
        <CookieStand question={question} />

      </main>
      <footer className="px-8 py-6 bg-green-500">
        <p>&copy; 2021</p>
      </footer>
    </div>
  )
}

function CookieStand() {
  return (

    <div className="w-3/4 h-64 mx-auto my-8 bg-green-300 rounded-md">
      <h1 className="pt-6 text-2xl text-center">Create Cookie Stand</h1>
      <form className="w-3/4 p-2 mx-auto justiy-center ">
        <div>
          <div >
            <label className="mx-2">Location</label>
            <input name="location" className="flex-auto w-3/4" />
          </div>
          <div className='flex items-center py-10'>
            <div className="">
              <label>Minimum Customers Per hour</label>
              <input name="min" className="" />
            </div>
            <div className="">
              <label>Maximum Customers Per hour</label>
              <input name="max" className="" />
            </div>
            <div className="">
              <label>Average Cookies per Sale</label>
              <input name="avg" className="" />
            </div>
            <button className="w-64 h-20 px-6 py-2 mx-4 bg-green-500">Create</button>
          </div>
        </div>
      </form>

    </div>
  )
}

function Header() {
  return <header className="px-8 py-6 bg-green-500">
    <h1 className="text-4xl">Cookie Stand Admin</h1>
  </header>
}


function QuestionForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="flex w-1/2 p-2 mx-auto bg-gray-200">
      <input name="question" className="flex-auto pl-2" />
      <button className="px-4 py-2 bg-gray-400 text-gray-50">Ask</button>
    </form>
  )
}