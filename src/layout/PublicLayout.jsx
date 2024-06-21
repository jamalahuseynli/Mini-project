import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const PublicLayout = (props) => {
  return (
    <div className="layout">
        <Header />
        <main>
          {props.children}
        </main>
        <Footer />
    </div>
  )
}

export default PublicLayout