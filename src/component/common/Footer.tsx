import { css } from '@emotion/react';

const Footer = () => {
  return (
    <footer css={s_footer}>
      <p css={s_text}>
        <small css={s_small}>
          Copyright © 2022 sandwhale Inc. All Rights Reserved.
        </small>
      </p>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;

//=============================================
// style
//=============================================
const s_footer = css`
  background-color: #020202;
  padding: 20px 0;
`;
const s_text = css`
  text-align: center;
`;
const s_small = css`
  color: #bbb;
`;
