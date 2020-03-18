import React from 'react';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import { applyStyles, DarkContained, Absolute, Depth } from '../../styles';
import styled from 'styled-components';
import Firebase from '../../services/Firebase';
import Avatar from '@material-ui/core/Avatar';

export type UserStatusProps = {
  className?: string
  login: () => {}
}

class UserStatus extends React.Component<UserStatusProps> {

  render () {
    return (<div></div>)
    /*return (
    <Chip 
      className={this.props.className} 
      label={!Firebase.getUser()?'Sign in for full experience':'User'}
      onClick={this.props.login}
      
    />
    )*/
  }
}

export default applyStyles(UserStatus, 
  DarkContained, 
  Absolute({right: 100, top: 20}), 
  Depth(2)
  );