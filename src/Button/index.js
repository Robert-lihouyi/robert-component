/**
 * Copyright 2016-present, Baifendian, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import './index.less'
import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Icon from '../Icon'

const Button = props => {
  const { children, className, type, size, icon, circle, transparent, ...other } = props
  const classNames = classnames(
    'bfd-btn', 
    {
      [`bfd-btn--${type}`]: type,
      [`bfd-btn--${size}`]: size,
      'bfd-btn--circle': circle,
      'bfd-btn--icon': icon && !children,
      'bfd-btn--transparent': transparent
    },
    className
  )
  return (
    <button type="button" className={classNames} { ...other }>
      {icon && <Icon type={icon} />}
      {children}
    </button>
  ) 
}

Button.propTypes = {
  
  // 按钮类型，除默认外可选值: minor / inverse
  type: PropTypes.string,
  
  // 按钮尺寸，除默认外可选值：sm、lg
  size: PropTypes.string,
  
  // 按钮图标，支持 fontawaresome 图标
  icon: PropTypes.string,
  
  // 是否为圆形
  circle: PropTypes.bool,

  // 文字颜色是否继承，背景是否透明
  transparent: PropTypes.bool
}

export default Button