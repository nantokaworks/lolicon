import Icon, { IconProps } from '../Icon'

export function PlusFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='PlusFill'
      size={size}
      className={className}
      children={
        <path d='M16,4c10,0 12,2 12,12c0,10 -2,12 -12,12c-10,0 -12,-2 -12,-12c0,-10 2,-12 12,-12Zm-1,8c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1l0,3l3,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-3,0l0,3c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1l0,-3l-3,0c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1l3,0l0,-3Z' />
      }
    />
  )
}
