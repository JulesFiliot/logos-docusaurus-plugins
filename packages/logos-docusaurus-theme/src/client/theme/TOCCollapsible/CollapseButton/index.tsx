import React from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import type { Props } from '@theme/TOCCollapsible/CollapseButton'

import styles from './styles.module.scss'
import { IconArrowLeftCircle } from '@logos-theme/components/Icon'

export default function TOCCollapsibleCollapseButton({
  collapsed,
  ...props
}: Props): JSX.Element {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        'clean-btn',
        styles.tocCollapsibleButton,
        !collapsed && styles.tocCollapsibleButtonExpanded,
        props.className,
      )}
    >
      <IconArrowLeftCircle />
      <Translate
        id="theme.TOCCollapsible.toggleButtonLabel"
        description="The label used by the button on the collapsible TOC component"
      >
        Contents
      </Translate>
    </button>
  )
}
