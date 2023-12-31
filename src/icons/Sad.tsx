import Icon, { IconProps } from '../Icon'

export function SadIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Sad'
      size={size}
      className={className}
      children={
        <g>
          <path d='M26 15.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-17.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM23 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
          <path d='M21.015 20.5c-.466-2.285-2.55-4-5-4-2.452 0-4.535 1.715-5 4-.26 1.269 3 1.5 5 1.5s5.232-.36 5-1.5zM14 19s.896.5 2 .5c1.105 0 2-.5 2-.5s-.895-1-2-1c-1.104 0-2 1-2 1z' />
        </g>
      }
    />
  )
}
