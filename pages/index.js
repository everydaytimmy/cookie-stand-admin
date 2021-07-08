import Head from 'next/head'
import Header from '../components/header'
import Main from '../components/main'
import ReportTable from '../components/report-table'
import { useState } from 'react'


export default function Home() {

  const [stands, setStands] = useState([])
  const [isEmpty, setIsEmpty] = useState(true)

  function createStandHandler(standInfo) {
    setStands([...stands, standInfo]);
    setIsEmpty(false);
  }

  return (
    <div>
      <Head><title>Cookie Stand Admin</title></Head>
      <Header />
      <Main onStandCreate={createStandHandler}/>
      <ReportTable stands={stands} isEmpty={isEmpty}/>
      <footer className="px-8 py-6 bg-green-500">
        <p>&copy; 2021</p>
        <p>{stands.length} Locations Worldwide</p>
      </footer>
    </div>
  )
}




