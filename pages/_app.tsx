import { createContext, Dispatch, SetStateAction, useState } from 'react'
import Layout from '../src/components/commons/layout'
import '../styles/globals.css'

interface IGlobalContext {
  page?: string
  setPages?: Dispatch<SetStateAction<string>>
}

export const GlobalContext = createContext<IGlobalContext>({})

function Baemin({ Component, pageProps }) {
  const [pages, setPages] = useState('')
  const value = {
    pages,
    setPages,
  }
  return (
    <GlobalContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  )
}

export default Baemin
