import Icon, { IconProps } from '../Icon'

export function CheckBoxIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='CheckBox'
      size={size}
      className={className}
      children={
        <path d='M22.586,22.586c0.864,-0.864 1.414,-2.572 1.414,-6.586c0,-4.014 -0.55,-5.722 -1.414,-6.586c-0.864,-0.864 -2.572,-1.414 -6.586,-1.414c-4.014,0 -5.722,0.55 -6.586,1.414c-0.864,0.864 -1.414,2.572 -1.414,6.586c0,4.014 0.55,5.722 1.414,6.586c0.864,0.864 2.572,1.414 6.586,1.414c4.014,0 5.722,-0.55 6.586,-1.414Zm-6.586,3.414c8,0 10,-2 10,-10c0,-8 -2,-10 -10,-10c-8,0 -10,2 -10,10c0,8 2,10 10,10Z' />
      }
    />
  )
}
