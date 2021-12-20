import * as React from 'react';
import MuiLink from '@mui/material/Link';
import MuiButton, { ButtonProps} from '@mui/material/Button';
import theme from '../styles/theme';


const MyButton = (props: { buttonText: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; sx?: ButtonProps | null | undefined}) => {
  return (
        <MuiButton sx={{
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '13.4px',
          color: theme.palette.primary.main,
          ...props.sx,
        }}>{props.buttonText}</MuiButton>
  );
};


const MyLink = (props: { buttonText: string | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; href?: string | undefined,linkPaddingRight?: string | null| undefined, sx?: Record<string, unknown>  | null | undefined}) => {
  
  return (
     <MuiLink href={props.href} sx={{
        textDecoration: 'none',
        paddingRight: props.linkPaddingRight, 
        }}> 
           <MyButton buttonText={props.buttonText} sx={props.sx}/>
      </MuiLink>
  );
};

export default MyLink;