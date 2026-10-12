import React from 'react'

import { ButtonBack, ButtonFront } from './index'

// A link styled as the site's pill button. External links open in a new tab.
const Button = ({ href, children, external = true }) => (
  <ButtonBack
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    {children}
    <ButtonFront aria-hidden="true">{children}</ButtonFront>
  </ButtonBack>
);

export default Button
