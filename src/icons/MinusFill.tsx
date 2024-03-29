import Icon, { IconProps } from '../Icon'

export function MinusFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='MinusFill'
      size={size}
      className={className}
      children={
        <path d='M16,4c10,0 12,2 12,12c0,10 -2,12 -12,12c-10,0 -12,-2 -12,-12c0,-10 2,-12 12,-12Zm-4,11c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l8,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-8,0Z' />
      }
    />
  )
}
