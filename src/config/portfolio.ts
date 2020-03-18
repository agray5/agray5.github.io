export const tags = {
  MATERIAL: 'Material-UI',
  STYLED: 'Styled-Components',
  REACT: 'React',
  JS: 'JavaScript',
  SASS: 'Sass',
  GULP: 'Gulp',
  PROCCESSING: 'Processing',
  JAVA: 'Java',
  GAME: 'Game',
  GODOT: 'Godot',
  SERVER: 'Server',
  PYTHON: 'Python',
  SOCKET: 'Socket Programming'
}

const ProfileObjects = [
  {
    title: 'Prompt Generator',
    links: [
      ['Live', '/PromptGenerator/'], 
      ['Github', 'https://github.com/agray5/PromptGenerator']
    ],
    tags: [tags.JS, tags.REACT, tags.MATERIAL, tags.STYLED]
  },
  {
    title: 'Weather App',
    links: [
      ['Live', '/Weather-Widget/'], 
      ['Github', 'https://github.com/agray5/Weather-Widget']
    ],
    tags: [tags.JS, tags.REACT]
  },
  {
    title: 'Calender',
    links: [
      ['Live', '/Calender/'], 
      ['Github', 'https://github.com/agray5/Calender']
    ],
    tags: [tags.JS, tags.SASS, tags.GULP]
  },
  {
    title: 'Processing Tic-Tac-Toe',
    links: [
      ['Github', 'https://github.com/agray5/ProcessingTicTacToe']
    ],
    tags: [tags.JAVA, tags.PROCCESSING, tags.GAME] 
  },
  {
    title: 'Random 2D Map',
    links: [
      ['Github', 'https://github.com/agray5/Random-Tilemap-In-Godot']
    ],
    tags: [tags.GODOT, tags.GAME]
  },
  {
    title: 'Mock Airplane Reservation Server',
    links: [
      ['Download', '/downloads/Multiprocessing%20Server.zip']
    ],
    tags: [tags.PYTHON, tags.SERVER, tags.SOCKET]
  }
]


export default ProfileObjects;