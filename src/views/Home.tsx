import { useEffect, useState } from 'react'
import ajax from '../utlis/request'
import CategoryItem from '../components/CategoryItem'

type ListItem = {
  id: number
  name: string
  description: string
  coverImgUrl: string
  updateFrequency: string
}

// 定义响应数据类型
type ResponseData = {
  list: ListItem[]
}

const Home = () => {
  const [list, setList] = useState<ListItem[]>([])
  const [myMusicCover, setMyMusicCover] = useState<string>()

  useEffect(() => {
    async function fetchData() {
      ajax.get<ResponseData>('/toplist').then((response) => {
        const newList = response.list.map(({ id, name, coverImgUrl, description, updateFrequency }) => ({ id, name, coverImgUrl, description, updateFrequency }))
        setList(newList.slice(0, 5))
      })
    }

    fetchData()
  }, [])

  return (
    <div className="home">
      <div className="home-wrap">
        <div className="recommend">
          <h2 className="title">推荐歌单</h2>
          {list.map(({ id, name, updateFrequency, coverImgUrl }) => (
            <CategoryItem key={id} {...{ name, description: updateFrequency, coverImgUrl }}/>
          ))}
        </div>
        <div className="my-music">
          <h2 className="title">我的音乐</h2>
          <div className="content">
            <CategoryItem {...{ name: '我喜欢的音乐', description: '共计 0 首', coverImgUrl: myMusicCover, icon: 'like-fill' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home