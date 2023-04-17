import classNames from "classnames";
import { useState } from "react";
import Button from "../components/Button";
import Song from "../components/Song";
import Lyrics from "../components/Lyrics";

interface Props {
  visible: boolean
  setVisible: (value: boolean) => void
}

const Drawer: React.FC<Props> = (props) => {
  const tabs = [
    { id: 'song', label: '歌曲', component: <Song/> },
    { id: 'lyrics', label: '歌词', component: <Lyrics/> }
  ];
  const [activeTab, setActiveTab] = useState('lyrics')

  return (
    <div className={classNames('drawer', { active: props.visible })}>
      <div className="tabs-nav">
        {tabs.map((item, index) => [
          <Button className={classNames('tabs-item', { active: activeTab === item.id })} key={item.id}>{item.label}</Button>,
          index < tabs.length - 1 ? <div className="divider" key={`${item.id}.divider`}></div> : null
        ])}
        <Button className="close" icon="arrow-down" onClick={() => props.setVisible(false)}/>
      </div>
      <div className={classNames('tabs-content', { 'show-lyrics': activeTab === 'lyrics' })}>
        {tabs.map((item) => (
          <div key={item.id} className="tab-pane">{item.component}</div>
        ))}
      </div>
    </div>
  )
}

export default Drawer