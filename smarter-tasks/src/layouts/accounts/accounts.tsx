// import * as React from "react"
import Appbar from "../account/appbar"
import { Outlet } from "react-router-dom"


const AccountLayout = () => {
  return (
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {/*Route specific contents will come here*/}
		<Appbar />
		<main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      </div>
    </main>
  )
}

export default AccountLayout