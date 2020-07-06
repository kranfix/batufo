import App from './App.svelte'

import gameUpdate from '../data/game-update.json'

const routes = {
  home: { id: 'home', hash: '' },
  editor: { id: 'editor', hash: '#editor' },
  watch: { id: 'watch', hash: '#watch' },
  sponsor: { id: 'sponsor', hash: '#sponsor' },
  devlog: { id: 'devlog', hash: '#devlog' },
}

const isOnDevlogPage = () => {
  const hash = location.hash
  return hash.startsWith(routes.devlog.hash)
}

const hash = location.hash
const startingRoute =
  hash === routes.editor.hash
    ? routes.editor
    : hash === routes.watch.hash
    ? routes.watch
    : hash === routes.sponsor.hash
    ? routes.sponsor
    : isOnDevlogPage()
    ? routes.devlog
    : routes.home

const rootURL = location.href.includes('localhost')
  ? '/'
  : 'https://thlorenz.github.io/batufo/'

const app = new App({
  target: document.body,
  props: {
    title: '2D Multiplayer Flutter Game',
    embedVideo: 'https://www.youtube.com/embed/xTcO6lPMUaA',
    embedPlaylist:
      'https://www.youtube.com/embed/videoseries?list=PL4k64WemroGlTDHJzVo_O1l6C0nuwRc6G',
    subChannelURL: 'https://www.youtube.com/user/thlorenz10?sub_confirmation=1',
    gameWebURL: 'http://thlorenz.com/batufo/webgame',
    editorURL: 'https://thlorenz.github.io/batufo/editor',
    latestReleaseURL: gameUpdate.release.url,
    githubSourceURL: 'https://github.com/thlorenz/batufo',
    youtubePlaylistURL:
      'https://www.youtube.com/watch?list=PL4k64WemroGlTDHJzVo_O1l6C0nuwRc6G&v=xTcO6lPMUaA',
    twitchChannel: 'thlorenz',
    twitchChannelURL: 'https://www.twitch.tv/thlorenz',
    twitterURL: 'https://twitter.com/thlorenz',
    githubSponsorURL: 'https://github.com/sponsors/thlorenz',
    paypalSponsorURL: 'https://www.paypal.me/thlorenz/5',
    patreonSponsorURL: 'https://www.patreon.com/bePatron?u=8663953',
    routes,
    state: {
      currentRoute: startingRoute,
    },
    rootURL,
  },
})

export default app
