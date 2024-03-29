import Icon, { IconProps } from '../Icon'

export function MoreFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='MoreFill'
      size={size}
      className={className}
      children={
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.5 28c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1.232-11a2 2 0 1 0 3.463-1.999A2 2 0 0 0 15.267 17zM11 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 11 18zm10.267-1a2 2 0 1 0 3.464-1.999A2 2 0 0 0 21.267 17z'
        />
      }
    />
  )
}
