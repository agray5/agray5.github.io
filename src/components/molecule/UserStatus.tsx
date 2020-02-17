import React from 'react';
import Box from '@material-ui/core/Box';
import { applyStyles, DarkContained } from '../../styles';

class UserStatus extends React.Component {
  render () {
    return (
    <Box style={{background: 'red', zIndex: 1000, position: "absolute", left: 100}}>
      Hello
    </Box>
    )
  }
}

const Y = () => <div>sfgfg</div>
export default applyStyles(UserStatus, DarkContained);