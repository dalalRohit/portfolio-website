const getAllTags = (data) => {
  const allTags = {}
  data.edges.filter((edge) => {
    let tags = edge.node.frontmatter.tags

    tags.forEach((tag) => {
      if (tag in allTags) {
        allTags[tag] += 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  return allTags
}

const projects = [
  {
    name: 'Patelness Website Revamp',
    tags: ['gatsby', 'react', 'node.js'],
    desc: `This was my first client project as a freelancer along with my friend.`,
    link: 'https://www.patelness.in/',
  },
  {
    name: 'Digital Invoice maker',
    tags: ['express.js', 'mongodb', 'bootstrap'],
    desc: `A digital invoice maker to solve manually keeping track of the invoices.`,
    link: 'https://shreeji-bill-maker.herokuapp.com/',
  },
  {
    name: 'Google News Clone',
    tags: ['axios', 'react'],
    desc: `Simple clone of Google News built using React`,
    link: 'https://newsapp.rohitdalal.com/',
    github: 'https://github.com/dalalRohit/newsapp',
  },
  {
    name: 'React, Redux ToDo',
    tags: ['react', 'redux'],
    desc: `A simple demo ToDo app demonstrating usage of Redux with React`,
    link: 'https://todos.rohitdalal.com/',
    github: 'https://github.com/dalalRohit/react-redux-todo',
  },
  {
    name: 'Complete User Auth',
    tags: ['node.js', 'mongodb'],
    desc:
      'A complete and easy to integrate User-Authentication REST API for any application with Express.js and MongoDB as backend.',
    github: `https://github.com/dalalRohit/complete-user-auth`,
  },
]
const content = {
  about: `Hello, Nice to see you here. <br/>
    I'm a Self-taught Full Stack Software Developer. <br/ >
    <b class="rohit">Available for Freelance Projects and Work</b>. <br/>
    Contact me for any collaboration or just to say Hii`,
}

const metaData = {
  title: 'Rohit Dalal | Full Stack Software Developer',
  description:
    'Rohit Dalal is a self-taught Full Stack Software Developer. I develop Websites, Web-Apps, and I also write Technical blogs, related to Web Development.',
  image: '/logo.png',
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  twitterUsername: `dalal__rohit`,
  author: `Rohit Dalal`,
  siteUrl: `https://www.rohitdalal.com`,
  siteLogo: '/logo.png',
}

const getSlugFromHeadings = (id) => {
  let x = id
    .trim()
    .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
    .trim()
    .split(' ')
    .join('-')
    .toLocaleLowerCase()
  return x
}

module.exports = {
  getAllTags,
  content,
  projects,
  metaData,
  getSlugFromHeadings: getSlugFromHeadings,
}
