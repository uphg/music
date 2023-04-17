import classNames from "classnames";

interface Props {
  name: string
  className?: string
}

const Icon: React.FC<Props> = (props) => (

  <svg className={classNames('icon', props?.className)} xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true">
    <use xlinkHref={`#icon-${props.name}`}></use>
  </svg>
)

export default Icon