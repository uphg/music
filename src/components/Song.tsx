import { useState } from "react"
import Button from "./Button"

const Song: React.FC = () => {

  const [song, setSong] = useState({
    title: '情深深雨蒙蒙',
    singer: '杨胖雨',
    lyrics: '情深深雨蒙蒙阿~'
  })

  const [likeStatus, setLikeStatus] = useState('like')
  const [timeBar, setTimeBar] = useState({ startTime: '00:00', endTime: '00:00' })

  return (
    <div className="song">
      <div className="song-wrap">
        <div className="song-info">
          <div className="cover">
            <img className="cover-inner" src={'./images/qssymm.jpg'} alt="cover"/>
          </div>
          <div className="title">
            <span className="text">{song.title}</span>
            <Button className="like" onClick={() => setLikeStatus(likeStatus === 'like' ? 'like-fill' : 'like')} icon={likeStatus}/>
          </div>
          <p className="singer">{song.singer}</p>
          <p className="lyrics">{song.lyrics}</p>
        </div>
        <div className="progress">
          <div className="slider">
            <div className="bar"></div>
          </div>
          <div className="time-status">
            <div className="start">{timeBar.startTime}</div>
            <div className="end">{timeBar.endTime}</div>
          </div>
        </div>
        <div className="actions">
          <Button icon="cycle"/>
          <Button icon="prev"/>
          <Button className="switch" icon="playing"/>
          <Button icon="next"/>
          <Button icon="playlist"/>
        </div>
      </div>
    </div>
  )
}

export default Song