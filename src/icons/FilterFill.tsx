import Icon, { IconProps } from '../Icon'

export function FilterFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='FilterFill'
      size={size}
      className={className}
      children={
        <path d='M16 28.0002C22.627 28.0002 28 22.6272 28 16.0002C28 9.37324 22.627 4.00024 16 4.00024C9.373 4.00024 4 9.37324 4 16.0002C4 22.6272 9.373 28.0002 16 28.0002ZM9.5 12C8.94772 12 8.5 12.4477 8.5 13C8.5 13.5523 8.94772 14 9.5 14H22.5C23.0523 14 23.5 13.5523 23.5 13C23.5 12.4477 23.0523 12 22.5 12H9.5ZM10.5 17C10.5 16.4477 10.9477 16 11.5 16H20.5C21.0523 16 21.5 16.4477 21.5 17C21.5 17.5523 21.0523 18 20.5 18H11.5C10.9477 18 10.5 17.5523 10.5 17ZM13.5 20C12.9477 20 12.5 20.4477 12.5 21C12.5 21.5523 12.9477 22 13.5 22H18.5C19.0523 22 19.5 21.5523 19.5 21C19.5 20.4477 19.0523 20 18.5 20H13.5Z' />
      }
    />
  )
}