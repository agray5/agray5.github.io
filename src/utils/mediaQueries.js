import { css } from 'styled-components'

export const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone_landscape: 600, 
  phone: 420
}

const heights = {
    giant: 2000,
    desktop: 700,
    tablet: 1000, 
    phone: 600,
    phone_landscape: 300,
  }

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
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
    `
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
    `
    return accumulator
  }, {})