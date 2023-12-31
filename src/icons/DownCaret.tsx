import Icon, { IconProps } from '../Icon'

export function DownCaretIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='DownCaret'
      size={size}
      className={className}
      children={
        <path
          d='M 0.359841 9.01822C 0.784113 9.37178 1.41467 9.31446 1.76823 8.8902C 3.14518 7.2451 6.52975 3.42464 8.25002 2.11557C 9.99919 3.44663 13.335 7.21555 14.7318 8.8902C 15.0854 9.31446 15.7159 9.37178 16.1402 9.01822C 16.5645 8.66466 16.6215 8.03371 16.2679 7.60943C 14.7363 5.76983 11.2749 1.80977 9.30351 0.408618C 8.99227 0.190441 8.64018 0 8.25002 0C 7.85987 0 7.50778 0.190441 7.19654 0.408618C 5.26486 1.78153 1.73514 5.80788 0.232849 7.60856L 0.231804 7.60982C -0.12176 8.03409 -0.0644362 8.66466 0.359841 9.01822Z'
          transform='translate(7.12506 20.6251) scale(1 -1)'
        />
      }
    />
  )
}
