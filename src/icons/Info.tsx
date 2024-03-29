import Icon, { IconProps } from '../Icon'

export function InfoIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Info'
      size={size}
      className={className}
      children={
        <g>
          <path d='M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z' />
          <path d='M16 12.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 22.25c-.552 0-1-.392-1-.875v-6.25c0-.483.448-.875 1-.875s1 .392 1 .875v6.25c0 .483-.448.875-1 .875z' />
        </g>
      }
    />
  )
}
