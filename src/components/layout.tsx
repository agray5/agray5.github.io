import React, { FunctionComponent, useState } from 'react'
import PropTypes from 'prop-types'

import './layout.css'
import UserStatus from './molecule/UserStatus';
import Firebase from '../services/Firebase';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const Layout: FunctionComponent = ({ children }) => {
  const [isLoginFormOpen, toggleLoginFormOpen] = useState(false)

  const handleLoginClose = () =>  toggleLoginFormOpen(false);
  const handleLoginOpen = () =>  toggleLoginFormOpen(true);
  return (
      <>
        <UserStatus login={Firebase.loginWithPopup}/>
        <Dialog onClose={handleLoginClose} aria-labelledby="simple-dialog-title" open={isLoginFormOpen}>
          <DialogTitle id="simple-dialog-title">Login</DialogTitle>

        </Dialog>
        {children}
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
