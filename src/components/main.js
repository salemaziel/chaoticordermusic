import React from 'react'
import '../css/main.css'
import Releases from './releases'


const Main = () => (

<div id="wrapper">
  <div id="main">
    <div className="inner">
      <section id="home-section">
        <div id="container08" className="container default full screen">
          <div className="inner">
            <h1 id="text03" className="style3">Chaotic Order</h1>
            <p id="text04" className="style4">New Album FEED THE PEOPLE Out Now!</p>
            {/**<hr id="divider06" />**/}
          </div>
        </div>
        <div id="container01" data-scroll-id="one" data-scroll-behavior="center" className="container columns full screen">
          <div className="inner">
            <span />
            <div className="after-spacer">
                
              <h2 id="text01" className="style1">Sed Aliquam</h2>
              {/*<hr id="divider03" />*/}
              <p id="text02" className="style2">Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. Aliquam blandit etiam vel massa eget mollis. Donec at quam orci. Proin et semper metus consequat etiam.</p>
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
          </div>
        </div>
        <div id="container03" data-scroll-id="two" data-scroll-behavior="center" className="container columns full screen">
          <div className="inner">
            <div className="before-spacer">
              <h2 id="text05" className="style1">Magna Feugiat</h2>
             {/*} <hr id="divider02" />*/}
              <p id="text06" className="style2">Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. Aliquam blandit etiam vel massa eget mollis. Donec at quam orci. Proin et semper metus consequat etiam.</p>
              {/**<ul id="buttons04" className="style1 buttons">
                <li>
                  <a href="#three" className="button n01">
                    <svg>
                      <use xlinkHref="#icon-a3b" />
                    </svg>
                    <span className="label">Next</span>
                  </a>
                </li>
              </ul>**/}
            </div>
            <span />
          </div>
        </div>
        <div id="container04" data-scroll-id="three" data-scroll-behavior="center" className="container columns full screen">
          <div className="inner">
            <span />
            <div className="after-spacer">
              <h2 id="text07" className="style1">Lorem Ipsum</h2>
             {/** <hr id="divider01" />**/}
              <p id="text10" className="style2">Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. Aliquam blandit etiam vel massa eget mollis. Donec at quam orci. Proin et semper metus consequat etiam.</p>
              {/**<ul id="buttons05" className="style1 buttons">
                <li>
                  <a href="#signup" className="button n01">
                    <svg>
                      <use xlinkHref="#icon-a3b" />
                    </svg>
                    <span className="label">Next</span>
                  </a>
                </li>
              </ul>**/}
            </div>
          </div>
        </div>
        <div id="container06" data-scroll-id="signup" data-scroll-behavior="center" className="container columns full screen">
          <div className="inner">
            <div>
              <h2 id="text11" className="style1">Contact</h2>
             {/** <hr id="divider05" />**/}
              <p id="text13" className="style2">Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. Aliquam blandit etiam vel massa eget mollis. Donec at quam orci. Proin et semper metus consequat etiam.</p>
            </div>
            <div>
              <form id="form02" method="post">
                <div className="inner">
                  <div className="field">
                    <label htmlFor="form02-fname">Name</label>
                    <input type="text" name="fname" id="form02-fname" placeholder maxLength={128} required />
                  </div>
                  <div className="field">
                    <label htmlFor="form02-email">Email</label>
                    <input type="email" name="email" id="form02-email" placeholder maxLength={128} required />
                  </div>
                  <div className="field">
                    <input type="text" name="sms" id="form02-sms" placeholder="Sms" maxLength={128} />
                  </div>
                  <div className="actions">
                    <button type="submit">Submit</button>
                  </div>
                </div>
                <input type="hidden" name="id" defaultValue="form02" />
              </form>
            </div>
          </div>
        </div>
        <div id="container07" className="container default full screen">
          <div className="inner">
            <ul id="icons02" className="icons">
              <li>
                <a className="n01" href="https://domain.ext/path">
                  <svg>
                    <use xlinkHref="#icon-905" />
                  </svg>
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a className="n02" href="https://domain.ext/path">
                  <svg>
                    <use xlinkHref="#icon-906" />
                  </svg>
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a className="n03" href="https://domain.ext/path">
                  <svg>
                    <use xlinkHref="#icon-910" />
                  </svg>
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a className="n04" href="https://domain.ext/path">
                  <svg>
                    <use xlinkHref="#icon-956" />
                  </svg>
                  <span className="label">Product Hunt</span>
                </a>
              </li>
            </ul>
           
          </div>
        </div>
      </section>
      <Releases />
      <section id="done-section">
        <div id="container02" className="container default full screen">
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


)

export default Main
