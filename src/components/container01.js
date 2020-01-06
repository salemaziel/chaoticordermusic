import React from 'react'
import container01Styles from '../css/container01.module.css'
import Albumcover from '../images/album-cover.jpg'
import ResponsivePlayer01 from './responsiveplayer01'
import TContentCards01 from './tcontentcardsrow1'
import TContentCards02 from './tcontentcardsrow2'





class Container01 extends React.Component {
    render() {
      return (
      <div id="container01" className="container columns full screen" data-scroll-id="one" data-scroll-behavior="center"  /*className={container01Styles.columns} className={container01Styles.full} className={container01Styles.full.screen}*/>
          <div className={container01Styles.inner}> 
            <div className={container01Styles.afterSpacer}>
                
              <h2 id="text01" className={container01Styles.style1}>Feed The People</h2>
              {/**<hr id="divider03" />**/}
              <p id="text02" className={container01Styles.style2}>Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. </p>
              <ResponsivePlayer01 />
            
              {/**<ul id="buttons03" className="style1 buttons">
                <li>
                  <a href="#two" className="button n01">
                    <svg>
                      <use xlinkHref="#icon-a3b" />
                    </svg>
                    <span className="label">Next</span>
                  </a>
                </li>
              </ul>**/}
            </div>
            <row>
              <TContentCards01 />
            
            {/**<TContentCards />**/}
            {/**<TaggedContentCard
                href=''
                thumbnail={Albumcover}
                title='Chaotic Order'
                description='Feed The People'
                tags={[
                    '',
                    '',
                    ''
                ]}
              />**/}
              </row>
              <br />
              <row>
                <TContentCards02 />
              </row>
              <br />
              <hr />
          </div>
        </div>
      )
    }
}

export default Container01