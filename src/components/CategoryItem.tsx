import Button from "./Button"

interface Props {
  name: string
  description: string
  coverImgUrl?: string
  icon?: string
}

const CategoryItem: React.FC<Props> = (props) => {
  const { name, description, coverImgUrl, icon } = props
  return (
    <div className="category-item">
      <div className="cover">
        {coverImgUrl ? <img className="cover-img" src={coverImgUrl}/> : null}
        {icon ? (
          <div className="shield">
            <Button icon={icon}/>
          </div>
        ) : null}
      </div>
      <div className="meta">
        <div className="name">{name}</div>
        <div className="description">{description}</div>
      </div>
      <div className="more">
        <Button icon="more"/>
      </div>
    </div>
  )
}

export default CategoryItem
