import type { Component } from 'solid-js'
import Versions from './components/Versions'
import logo from './assets/logo.svg'

const App: Component = () => {
  return (
    <main class="container">
      <Versions />
      <article style={{ display: 'grid', 'place-content': 'center', height: '256px' }}>
        <section>
          <h1 style={{ 'font-size': '32px' }}>Hello World!</h1>
        </section>
      </article>
      <img class="hero-logo" src={logo} alt="logo" />
    </main>
  )
}

export default App
