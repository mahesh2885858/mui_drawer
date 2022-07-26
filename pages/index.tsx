import type { NextPage } from 'next'
import SideBar from '../components/SideBar'
import GetData from "../components/GetData"
import PasswordChecking from '../components/PasswordChecking'
const Home: NextPage = () => {
  return (
    <>
      {/* <SideBar /> */}
      {/* <GetData /> */}
      <PasswordChecking />
    </>

  )
}

export default Home
