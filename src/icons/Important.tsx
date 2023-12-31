import Icon, { IconProps } from '../Icon'

export function ImportantIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Important'
      size={size}
      className={className}
      children={
        <g>
          <path d='M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z' />
          <path d='M16 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 19c1.5 0 2-5 2-7.5C18 10 17.5 9 16 9s-2 1-2 2.5c0 2.5.5 7.5 2 7.5z' />
        </g>
      }
    />
  )
}
