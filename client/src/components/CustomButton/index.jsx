import * as React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {useButton} from '@mui/base/ButtonUnstyled';
import {styled} from '@mui/system';

const CustomButtonRootF = style => styled('button')`
  padding: 5px 20px;
  border-radius: 30px;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  cursor: pointer;
  border: 0;

  ${style}
`;

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const {children, CustomButtonRoot} = props;
  const {active, disabled, focusVisible, getRootProps} = useButton({
    ...props,
    ref,
    component: CustomButtonRoot,
  });

  return (
      <CustomButtonRoot {...getRootProps()}>
        {children}
      </CustomButtonRoot>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
};

export default function UseButton({name, customStyle, onclickAction}) {
  const dispatch = useDispatch();
  const CustomButtonRoot = CustomButtonRootF(customStyle);

  return <CustomButton
      onClick={() => dispatch(onclickAction())}
      CustomButtonRoot={CustomButtonRoot}>{name}</CustomButton>
};

CustomButton.propTypes = {
  CustomButtonRoot: PropTypes.object,
};

UseButton.propTypes = {
  name: PropTypes.string,
  customStyle: PropTypes.string,
  onclickAction: PropTypes.func,
};
