import Icon, { IconProps } from '../Icon'

export function CommunityIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Community'
      size={size}
      className={className}
      children={
        <g fillRule='nonzero'>
          <path d='M14.821,15c0,-3 -1,-5 1,-5c2,0 1,2 1,5l0,2c0,3 1,5 -1,5c-2,0 -1,-2 -1,-5l0,-2Z' />
          <path d='M16.187,14.634c2.598,-1.5 3.83,-3.367 4.83,-1.634c1,1.732 -1.232,1.866 -3.83,3.366l-1.732,1c-2.598,1.5 -3.83,3.366 -4.83,1.634c-1,-1.733 1.232,-1.866 3.83,-3.366l1.732,-1Z' />
          <path d='M17.187,15.634c2.598,1.5 4.83,1.633 3.83,3.366c-1,1.732 -2.232,-0.134 -4.83,-1.634l-1.732,-1c-2.598,-1.5 -4.83,-1.634 -3.83,-3.366c1,-1.733 2.232,0.134 4.83,1.634l1.732,1Z' />
        </g>
      }
    />
  )
}
