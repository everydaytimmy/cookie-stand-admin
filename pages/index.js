import Head from 'next/head'
import Header from '../components/header'
import Main from '../components/main'
import ReportTable from '../components/report-table'
import { useState } from 'react'


export default function Home() {

  const [stands, setStands] = useState([])

  function createStandHandler(standInfo) {
    const newStands = [...stands, standInfo]
    setStands(newStands);
  }

  return (
    <div>
      <Head><title>Cookie Stand Admin</title></Head>
      <Header />
      <Main onStandCreate={createStandHandler}/>
      <ReportTable />
      <footer className="px-8 py-6 bg-green-500">
        <p>&copy; 2021</p>
      </footer>
    </div>
  )
}




