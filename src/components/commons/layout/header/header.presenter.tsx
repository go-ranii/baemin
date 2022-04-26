import * as B from './header.styles'
import {
  YoutubeFilled,
  InstagramOutlined,
  FacebookFilled,
  DownloadOutlined,
} from '@ant-design/icons'

export default function HeaderUI() {
  return (
    <B.Wrapper>
      <div className="contents">
        <div className="title">배달의 민족</div>
        <div className="rightWrapper">
          <div className="download">
            앱 다운로드
            <DownloadOutlined />
          </div>
          <div className="logo">
            <FacebookFilled />
            <InstagramOutlined />
            <YoutubeFilled />
          </div>
        </div>
      </div>
      <img className="scroll" src="/scroll.png" />
    </B.Wrapper>
  )
}
