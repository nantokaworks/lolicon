import Icon, { IconProps } from '../Icon'

export function LikeIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Like'
      size={size}
      className={className}
      children={
        <path d='M15.982 13.578l-1.414-1.414C12.876 10.473 11.364 10 10.232 10c-1.17 0-2.175.503-2.836 1.164-1.592 1.592-1.887 3.022-1.676 4.288.235 1.407 1.152 2.928 2.579 4.412 1.432 1.501 3.108 2.703 4.719 3.616.789.451 1.453.769 2.062 1.001.344.134.65.199.809.233l.093.02.092-.02c.159-.034.466-.099.81-.233.608-.232 1.273-.55 2.062-1.001 1.611-.913 3.287-2.115 4.719-3.616 1.427-1.484 2.344-3.005 2.578-4.412.211-1.266-.083-2.696-1.675-4.288A4.035 4.035 0 0 0 21.732 10c-1.132 0-2.644.473-4.336 2.164l-1.414 1.414zm0-2.828c4-4 8-3 10-1 8 8-7 17-10 17s-18-9-10-17c2-2 6-3 10 1z' />
      }
    />
  )
}