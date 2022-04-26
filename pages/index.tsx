import { useContext } from 'react'
import { Slide } from 'react-full-page/lib'
import { FullPage } from 'react-full-page/lib'
import Header from '../src/components/commons/layout/header/header.container'
import FifthPage from './fifthPage'
import FirstPage from './firstPage'
import FourthPage from './fourthPage'
import SecondPage from './secondPage'
import SeventhPage from './seventhPage'
import SixthPage from './sixthPage'
import ThirdPage from './thirdPage'
import { GlobalContext } from './_app'

export default function Home() {
  const { page, setPages } = useContext(GlobalContext)
  return (
    <FullPage>
      <Slide>
        <FirstPage />
      </Slide>
      <Slide>
        <SecondPage />
      </Slide>
      <Slide>
        <ThirdPage />
      </Slide>
      <Slide>
        <FourthPage />
      </Slide>
      <Slide>
        <FifthPage />
      </Slide>
      <Slide>
        <SixthPage />
      </Slide>
      <Slide>
        <SeventhPage />
      </Slide>
    </FullPage>
  )
}
