import { MouseEventHandler, ReactNode } from "react";
import Icon from "./Icon";
import classNames from "classnames";

interface Props {
  icon?: string
  className?: string
  onClick?: MouseEventHandler
  children?: ReactNode
}

const Button: React.FC<Props> = (props) => {
  const { onClick, icon, className, children } = props

  return (
    <button className={classNames('button', className)} onClick={onClick}>
      {icon ? <Icon name={icon}/> : null}
      {children ? <span className="text">{children}</span> : null}
    </button>
  )
}

export default Button