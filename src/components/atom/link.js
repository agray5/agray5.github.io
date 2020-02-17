import React, { Component } from 'react';
import { Link } from '@reach/router';
import posed from 'react-pose'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import isExternal from 'is-url-external';
import PropTypes from 'prop-types'
import { TransitionState } from 'gatsby-plugin-transition-link';
import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';

const propTypes = {
  to: PropTypes.string.isRequired,
};

const useHref = (link) => {
  return isExternal(link) || /mailto:.*/.test(link);
}

/**
 * Link that also works for external URL's
 */
export default class LinkDuo extends Component {
  render() {
    return useHref(this.props.to) ?
      <a
        href={this.props.to}
        {...this.props}
        target={!this.props.notab && "_blank"}
      />
      :
      // @ts-ignore
      <AniLink swipe direction="right" {...this.props}/>;
  }
}

LinkDuo.propTypes = propTypes;

export const Fade = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})
  // We're using the TransitionState component here to provide the current transition status to our pose
  export const FadeWrapper = ({ children }) => (
    // We're using the TransitionState component here to provide the current transition status to our pose
    <TransitionState>
      {({ transitionStatus }) => (
        <Fade
            pose={
               ['entering', 'entered'].includes(transitionStatus)
               ? 'visible'
               : 'hidden'
            }>
            {children}
        </Fade>
      )}
    </TransitionState>
  )

  const FadeLink = ({ children, ...props }) => (
    <TransitionLink {...props} exit={{ length: 0.5 }}>
      {children}
    </TransitionLink>
  )

  const RippleLink = ({children, ...props}) => (
    <TransitionLink
      exit={{
        length: 0.6,
        trigger: ({ exit, e, node }) =>
          this.createRipple(exit, e, props.color, node),
      }}
      entry={{
        delay: 0.3,
        length: 0.6,
        trigger: ({ entry, node }) => this.slideIn(entry, node, "left"),
      }}
      {...props}
    >
      {children}
    </TransitionLink>
  )