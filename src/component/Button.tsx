import { forwardRef } from 'react';
import { css } from '@emotion/react';

/**---------------------------------------------------------------------------
 * type
 * --------------------------------------------------------------------------*/
type AnchorProps = JSX.IntrinsicElements['a'];

/**---------------------------------------------------------------------------
 * component
 * --------------------------------------------------------------------------*/
const Button = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, ...props }, ref) => {
    return (
      <a css={s_link} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);

Button.displayName = 'Button';
export default Button;

/**---------------------------------------------------------------------------
 * style
 * --------------------------------------------------------------------------*/
const s_link = css`
  background-color: #020202;
  border-radius: 20px;
  color: #fff;
  display: block;
  font-size: 18px;
  font-weight: bold;
  padding: 6px 10px;
  text-align: center;
  text-decoration: none;
  transition: all 0.25s ease-out;
  width: 200px;
  &:hover {
    background-color: #005799;
  }
`;
