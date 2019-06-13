import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from 'react-icons-kit';
import Link  from "./link";


/** Only Supports react icons kit Icons */
const LinkList = ({links, className = "nav-link", size = 28}) => (
  <List>
    {
      links.map(({icon, name, url}, index) => (
        <ListItem button key={index} className={className} component={Link} to={url}>
          {icon && <ListItemIcon><Icon icon={icon} size={size}/></ListItemIcon>}
          {name && <ListItemText primary={name} />}
        </ListItem>
    ))}
  </List>
)

export default LinkList;