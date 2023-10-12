import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

interface FooterProps {
  open: boolean;
}

function Footer(props: FooterProps) {
  return (
    <div className='footer'>
      <CopyrightIcon fontSize='small' />
      <h5>Fantastic 5 Inc</h5>
    </div>
  );
}

export default Footer;
