// components/Tooltip.js
import React from 'react';

import { tooltip } from '@/interface/interface';
const Tooltip = ({ text, children }:tooltip) => (
  <div className="tooltip">
    {children}
    <span className="tooltiptext">{text}</span>
  </div>
);

export default Tooltip;
