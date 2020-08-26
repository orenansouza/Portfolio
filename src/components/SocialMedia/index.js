import React from 'react';

import { Link } from './styles';

function SocialMedia({ Icon, title, link }) {
  return (
    <Link href={link} rel='noopener noreferrer' target='_blank'>
      <Icon color='#fff' size='20px' style={{ marginRight: '5px' }} />
      {title}
    </Link>
  );
}

export default SocialMedia;
