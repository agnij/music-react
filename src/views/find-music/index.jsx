import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Subtitle from '../../component/subtitle/index'
import NavTab from './nab-tab/index'
import SpecialPage from './specicl-page/index'
import SongCardPage from './songcard-page/index'
import './style.styl'

function FindMusic(props) {
  const { match } = props
  const { pathname } = props.location
  const navlist = [
    {
      path: `${match.url}/specialpage`,
      text: '个性推荐',
      component: SpecialPage,
    },
    {
      path: `${match.url}/playlist`,
      text: '歌单',
      component: SongCardPage,
    }]
  return (
    <div className="findMusic">
      {pathname === '/findmusic' ? <Redirect to="/findmusic/playlist" /> : null}
      <Subtitle title="发现音乐" />
      <NavTab navlist={navlist} />
      <div className="level2-views">
        {
            navlist.map(v => (
              <Route key={v.path} path={v.path} component={v.component} />
            ))
          }
      </div>
    </div>
  )
}

export default FindMusic
