import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { ReactChild, useContext, useEffect } from 'react'
import { GlobalContext } from '../../../../pages/_app'
import Header from './header/header.container'

const LayoutBody = styled.div`
  width: 100%;
  height: 100%;
`

interface IProps {
  children: ReactChild
}

export default function Layout(props: IProps) {
  const { page, setPages } = useContext(GlobalContext)

  // useEffect(() => {
  //   window.addEventListener('wheel', (e) => {
  //     e.preventDefault()
  //     console.log(e)
  //     if (e.deltaY > 0) setPages((prev) => prev + 1)
  //     if (e.deltaY < 0) setPages((prev) => prev - 1)
  //   })
  // }, [])
  // console.log('pages', pages)

  //   const HIDDEN_HEADER = ['/admin']
  //   const HIDDEN_FOOTER = [
  //     '/login/join',
  //     '/login/login',
  //     '/login/searchmembership/userconfirm',
  //     '/login/searchmembership/passwordreset',
  //     '/admin',
  //   ]

  return (
    <div>
      <Header />
      <LayoutBody>{props.children}</LayoutBody>
    </div>
  )
}
