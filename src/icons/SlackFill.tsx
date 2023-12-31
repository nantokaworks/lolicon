import Icon, { IconProps } from '../Icon'

export function SlackFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='SlackFill'
      size={size}
      className={className}
      children={
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16 4c10 0 12 2 12 12s-2 12-12 12S4 26 4 16 6 4 16 4zm-2.746 4.122a1.605 1.605 0 0 1 1.745.347 1.6 1.6 0 0 1 .468 1.131v1.6h-1.6a1.603 1.603 0 0 1-1.48-2.212 1.598 1.598 0 0 1 .867-.866zM9.6 12.267h4.267a1.604 1.604 0 0 1 1.478.988A1.596 1.596 0 0 1 15 14.997a1.602 1.602 0 0 1-1.132.47H9.6a1.605 1.605 0 0 1-1.479-.989 1.595 1.595 0 0 1 .347-1.742 1.601 1.601 0 0 1 1.132-.47zm14.279.988a1.596 1.596 0 0 1-.347 1.742 1.6 1.6 0 0 1-1.132.47h-1.6v-1.6a1.596 1.596 0 0 1 .987-1.478 1.605 1.605 0 0 1 1.745.347c.149.148.266.325.347.519zM19.733 9.6v4.267a1.594 1.594 0 0 1-.987 1.477 1.605 1.605 0 0 1-1.226 0 1.602 1.602 0 0 1-.987-1.477V9.6a1.596 1.596 0 0 1 .987-1.478 1.605 1.605 0 0 1 1.745.347 1.598 1.598 0 0 1 .468 1.131zm-1.6 14.4a1.603 1.603 0 0 0 1.6-1.6 1.595 1.595 0 0 0-.987-1.478 1.605 1.605 0 0 0-.613-.122h-1.6v1.6a1.597 1.597 0 0 0 1.6 1.6zm0-4.267H22.4a1.605 1.605 0 0 0 1.479-.988 1.596 1.596 0 0 0-.347-1.742 1.6 1.6 0 0 0-1.132-.47h-4.267a1.605 1.605 0 0 0-1.478.989A1.596 1.596 0 0 0 17 19.264a1.602 1.602 0 0 0 1.132.47zm-10.012-.988a1.596 1.596 0 0 1 .347-1.742 1.601 1.601 0 0 1 1.132-.47h1.6v1.6a1.596 1.596 0 0 1-.987 1.478 1.605 1.605 0 0 1-1.745-.347 1.597 1.597 0 0 1-.347-.519zm4.146 3.655v-4.267a1.593 1.593 0 0 1 .987-1.477 1.603 1.603 0 0 1 1.745.347 1.6 1.6 0 0 1 .468 1.13V22.4a1.597 1.597 0 0 1-1.6 1.6 1.603 1.603 0 0 1-1.6-1.6z'
        />
      }
    />
  )
}