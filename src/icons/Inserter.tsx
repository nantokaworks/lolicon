import Icon, { IconProps } from '../Icon'

export function InserterIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Inserter'
      size={size}
      className={className}
      children={
        <path d='M28,16c0,-10.5 -1.5,-12 -12,-12c-10.5,0 -12,1.5 -12,12c0,10.5 1.5,12 12,12c10.5,0 12,-1.5 12,-12Zm-14.89,4.482c-0.424,0.353 -0.482,0.984 -0.128,1.408c0.353,0.424 0.984,0.482 1.408,0.128l0.001,-0.001c0.26,-0.216 0.524,-0.433 0.79,-0.652c1.581,-1.299 3.235,-2.658 4.41,-4.311c0.219,-0.312 0.409,-0.664 0.409,-1.054c0,-0.39 -0.19,-0.742 -0.409,-1.053c-1.192,-1.679 -2.79,-2.988 -4.374,-4.285c-0.277,-0.226 -0.553,-0.452 -0.826,-0.68c-0.425,-0.353 -1.056,-0.296 -1.409,0.128c-0.354,0.424 -0.296,1.055 0.128,1.408c0.254,0.213 0.511,0.423 0.768,0.635c1.434,1.178 2.878,2.364 4.007,3.847c-1.109,1.457 -2.584,2.673 -4.009,3.847c-0.258,0.213 -0.514,0.424 -0.766,0.635Z' />
      }
    />
  )
}
