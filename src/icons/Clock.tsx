import Icon, { IconProps } from '../Icon'

export function ClockIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Clock'
      size={size}
      className={className}
      children={
        <g>
          <path d='M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z' />
          <path d='M15.64 17a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1z' />
          <path d='M21.702 19.502a1 1 0 0 1-1.366.366l-5.196-3a1 1 0 0 1 1-1.732l5.196 3a1 1 0 0 1 .366 1.366z' />
        </g>
      }
    />
  )
}
