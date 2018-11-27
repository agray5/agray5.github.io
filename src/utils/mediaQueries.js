import React from 'react';
import MediaQuery from 'react-responsive';
import { css } from 'styled-components'

export const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone_landscape: 600, 
  phone: 300
}

const heights = {
    giant: 2000,
    desktop: 770,
    tablet: 700, 
    phone: 450,
    phone_landscape: 300,
  }


export const Query_Phone = (props) => {
    return (
        <MediaQuery minDeviceWidth={sizes.phone}>
            {props.children}
        </MediaQuery>
    )
}

export const Query_Tablet = (props) => {
    return (
        <MediaQuery minDeviceWidth={sizes.tablet}>
            {props.children}
        </MediaQuery>
    )
}

export const Query_Computer = (props) => {
    return (
        <MediaQuery minDeviceWidth={sizes.desktop}>
            {props.children}
        </MediaQuery>
    )
}


// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  const emHeight = heights[label] /16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em){
      ${css(...args)}
    }
  `.join("")
  return accumulator
}, {})

// iterate through the sizes and create a media template
export const mediaMax = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)}
      }
    `.join("")
    return accumulator
  }, {})

  export const mediaHeight = Object.keys(heights).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = heights[label] 
    accumulator[label] = (...args) => css`
      @media (min-height: ${emSize}px) {
        ${css(...args)}
      }
    `.join("")
    return accumulator
  }, {})
