import Icon, { IconProps } from '../Icon'

export function CompassIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Compass'
      size={size}
      className={className}
      children={
        <g>
          <path d='M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z' />
          <path d='M21.657 10.343a1 1 0 0 1 .167 1.193L18.288 17.9a1 1 0 0 1-.388.388l-6.364 3.536a1 1 0 0 1-1.36-1.36l3.536-6.364a1 1 0 0 1 .388-.388l6.364-3.536a1 1 0 0 1 1.193.167zm-6.336 4.978l-1.697 3.055 3.055-1.697 1.697-3.055-3.055 1.697z' />
        </g>
      }
    />
  )
}
