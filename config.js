import {twitter}  from 'react-icons-kit/fa/twitter';
import {envelope} from 'react-icons-kit/fa/envelope';
import {github} from 'react-icons-kit/fa/github';
import {linkedin} from 'react-icons-kit/fa/linkedin';
import {home} from 'react-icons-kit/fa/home';
import {addressCard} from 'react-icons-kit/fa/addressCard';
import {briefcase} from 'react-icons-kit/fa/briefcase';
import {commenting} from 'react-icons-kit/fa/commenting'

const pageLinks = [
  {type: "config", closeOnClick: true},
  {icon: home, name: "Home", url: "/"},
  {icon: addressCard, name: "About", url: "/about"},
  {icon: briefcase, name: "Portfolio", url: "/portfolio"},
  {icon: commenting, name: "Contact", url: "/contact"}
];

const socialLinks = [
  {icon: linkedin, name: "Linkedin", url: "https://www.linkedin.com/in/aprgray5/"},
  {icon: github, name: "Github", url: "https://github.com/agray5"},
  {icon: twitter, name: "Twitter", url: "https://twitter.com/aprgray5"},
  {icon: envelope, name: "Email", url: "mailto:aprgray5@gmail.com"}
]

export const links = [pageLinks, socialLinks];