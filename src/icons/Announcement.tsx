import Icon, { IconProps } from '../Icon'

export function AnnouncementIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Announcement'
      size={size}
      className={className}
      children={
        <g>
          <path d='M25.6581 10.5613C26.0345 10.3103 26.1925 9.83076 26.0039 9.4195C24.2665 5.63117 20.4405 3 16 3C11.5595 3 7.73351 5.63117 5.99611 9.4195C5.80749 9.83077 5.96545 10.3103 6.34191 10.5613C6.88084 10.9206 7.61467 10.6606 7.8973 10.0778C9.35485 7.07228 12.4354 5 16 5C19.5646 5 22.6451 7.07228 24.1027 10.0778C24.3853 10.6606 25.1191 10.9206 25.6581 10.5613Z' />
          <path d='M22.3049 12.7967C22.6196 12.5869 22.7778 12.2027 22.6613 11.8429C21.7519 9.03244 19.1133 7 16 7C12.8867 7 10.2481 9.03244 9.33867 11.8429C9.22223 12.2027 9.38038 12.5869 9.69507 12.7967C10.2797 13.1865 11.0964 12.79 11.3582 12.138C12.0967 10.2987 13.8967 9 16 9C18.1033 9 19.9033 10.2987 20.6418 12.138C20.9036 12.79 21.7203 13.1865 22.3049 12.7967Z' />
          <path d='M16 15C16.5523 15 17 14.5523 17 14C17 13.4477 16.5523 13 16 13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15ZM16 17C17.6569 17 19 15.6569 19 14C19 12.3431 17.6569 11 16 11C14.3431 11 13 12.3431 13 14C13 15.6569 14.3431 17 16 17Z' />
          <path d='M19.2447 17.8043C18.3714 18.5499 17.2383 19 16 19C14.7618 19 13.6287 18.5499 12.7554 17.8044L9.0637 27.6489C8.86978 28.166 9.13178 28.7424 9.6489 28.9363C10.166 29.1302 10.7424 28.8682 10.9364 28.3511L12.0655 25.3401C13.2981 25.7676 14.6219 25.9999 16 25.9999C17.3781 25.9999 18.702 25.7676 19.9345 25.34L21.0637 28.3511C21.2576 28.8682 21.834 29.1302 22.3512 28.9363C22.8683 28.7424 23.1303 28.166 22.9364 27.6489L19.2447 17.8043ZM12.7682 23.4662L13.8225 20.6546C14.5079 20.8788 15.2398 20.9999 16 20.9999C16.7602 20.9999 17.4922 20.8788 18.1775 20.6546L19.2318 23.4662C18.2181 23.8122 17.1309 23.9999 16 23.9999C14.8691 23.9999 13.782 23.8122 12.7682 23.4662Z' />
        </g>
      }
    />
  )
}