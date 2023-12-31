import Icon, { IconProps } from '../Icon'

export function EmailIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Email'
      size={size}
      className={className}
      children={
        <path d='M25.709,21.048c0.241,-1.212 0.291,-2.792 0.291,-5.048c0,-2.256 -0.05,-3.836 -0.291,-5.048c-0.216,-1.11 -0.533,-1.577 -0.864,-1.853c-0.384,-0.32 -1.094,-0.641 -2.597,-0.844c-1.531,-0.209 -3.522,-0.255 -6.248,-0.255c-2.725,0 -4.717,0.046 -6.248,0.255c-1.503,0.203 -2.213,0.524 -2.597,0.844c-0.331,0.276 -0.648,0.743 -0.864,1.853c-0.241,1.212 -0.291,2.792 -0.291,5.048c0,2.256 0.05,3.836 0.291,5.048c0.216,1.11 0.533,1.577 0.864,1.853c0.384,0.32 1.094,0.641 2.597,0.843c1.531,0.21 3.523,0.256 6.248,0.256c2.726,0 4.717,-0.046 6.248,-0.256c1.503,-0.202 2.213,-0.523 2.597,-0.843c0.331,-0.276 0.648,-0.743 0.864,-1.853Zm-9.709,4.952c11,0 12,-0.833 12,-10c0,-9.167 -1,-10 -12,-10c-11,0 -12,0.833 -12,10c0,9.167 1,10 12,10Zm-8.651,-14.774c0.411,-0.344 1.023,-0.289 1.366,0.124c1.335,1.601 5.617,5.318 7.285,6.592c1.696,-1.296 5.931,-4.963 7.285,-6.592c0.343,-0.413 0.955,-0.468 1.366,-0.124c0.412,0.344 0.467,0.957 0.124,1.37c-0.695,0.838 -2.02,2.129 -3.429,3.404c1.409,1.275 2.734,2.566 3.429,3.404c0.343,0.412 0.288,1.026 -0.124,1.37c-0.411,0.344 -1.023,0.289 -1.366,-0.124c-0.662,-0.798 -2.015,-2.083 -3.422,-3.339c-1.102,0.95 -2.137,1.789 -2.841,2.291c-0.302,0.213 -0.644,0.398 -1.022,0.398c-0.378,0 -0.72,-0.185 -1.021,-0.398c-0.691,-0.492 -1.728,-1.335 -2.835,-2.292c-1.414,1.264 -2.775,2.556 -3.429,3.34c-0.343,0.413 -0.955,0.468 -1.366,0.124c-0.411,-0.344 -0.467,-0.957 -0.124,-1.37l0.001,-0.001c0.683,-0.822 2.018,-2.119 3.436,-3.403c-1.418,-1.284 -2.753,-2.582 -3.436,-3.403l-0.001,-0.001c-0.343,-0.413 -0.287,-1.026 0.124,-1.37Z' />
      }
    />
  )
}