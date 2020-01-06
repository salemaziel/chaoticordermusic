import React from 'react'
import '../css/main.css'
import mainStyles from '../css/main.css'
import Releases from './releases'
import TContentCards from './tcontentcardsrow1'
import { TaggedContentCard } from 'react-ui-cards'
import ResponsivePlayer from './responsiveplayer01'
import Albumcover from '../images/album-cover.jpg'
import Container01 from '../components/container01'
import Container02 from '../components/container02'
import Container03 from '../components/container03'
import Container04 from '../components/container04'
import Container05 from '../components/container05'
import ContainerInfo from '../components/containerInfo'


console.log(mainStyles)


//const Main = () => (

class Main extends React.Component {
  render() {
    return (
      <div className="main">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <section id="home-section">
             <div id="containerHeader" className="container default full screen">
                <div className="inner">
                  <h1 id="text03" className="style3">Chaotic Order</h1>
                    <p id="text04" className="style4">New Album FEED THE PEOPLE Out Now!</p>
                {/**<hr id="divider06" />**/}
                </div>
              </div>
        <Container01 />
        <Container02 />
        <Container03 />
        <Container04 />
        <Container05 />
      </section>
      <Releases />
      <section id="done-section">
        <ContainerInfo />
        <div id="containerInfo" className="container default full screen">
          <div className="inner">
            <h2 id="text09" className="style1">For More Info</h2>
            {/**<hr id="divider04" />**/}
            <p id="text08" className="style2">Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. Aliquam blandit etiam vel massa eget mollis. Donec at quam orci. Proin et semper metus consequat etiam.</p>
            <ul id="buttons01" className="style1 buttons">
              <li>
                <a href="#" className="button n01">
                  <svg>
                    <use xlinkHref="#icon-a3b" />
                  </svg>
                  <span className="label">Continue</span>
                </a>
              </li>
            </ul>
            <p id="text12" className="style5">© Chaotic Order Music. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
</div>
    )
}
}
export default Main
