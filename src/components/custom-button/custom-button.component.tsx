import React from 'react';

import '../custom-button/custom-button.component';

const CustomButton = ({ children, ...otherProps }: any) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
