import { DivContainer, DivGrid, DivContent } from './styles'

import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import arrowRight from '../../assets/arrowRight.svg'
import featuredImage from '../../assets/featuredImage.png'

import post1 from '../../assets/post1.png'
import post2 from '../../assets/post2.png'
import post3 from '../../assets/post3.png'
import post4 from '../../assets/post4.png'

export function Home() {
  return (
    <div>
      <DivContainer>
        <div className="geralDiv">
          <header className="header">
            <div>
              <img src={logo} alt="logo RocketBlog" />
            </div>
            <div className="divNavBar">
              <a href="#">Home</a>
              <a href="#">Sobre</a>
              <a href="#">Categorias</a>
              <a href="#">Contato</a>
            </div>
            <div className="divForm">
              <input type="text" placeholder="Buscar"></input>
              <button>
                <img src={search} />
              </button>
            </div>
          </header>

          <DivGrid>
            <div className="div1">
              <h1>
                Veja o guia definitivo para conquistar seus objetivos como DEV
                em 2022
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique placerat hac.
              </p>
              <a href="#">
                Veja mais <img src={arrowRight} />
              </a>
            </div>
            <div className="div2">
              <img src={featuredImage} />
            </div>
          </DivGrid>
        </div>
      </DivContainer>
      <DivContent>
        <div className="aplyGrid">
          <div className="groupPosts1">
            <div className="posts1">
              <img src={post1} />

              <span>Novembro 30, 2022</span>

              <h2>Começando no ReactJS em 2022</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit
                vitae, sed tristique nibh nibh eu in aliquet ut adipiscing
                neque. Sed volutpat aenean sit vitae, sed tristique. Sed
                volutpat aenean.
              </p>
            </div>

            <div className="posts2">
              <div className="post1InPosts2">
                <span>Novembro 30, 2022</span>
                <h2>
                  Conheça as principais técnicas para conseguir uma vaga
                  internacional em programação
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                  sit vitae, sed tristique.
                </p>
              </div>
              <div className="divider" />
              <div className="post2InPosts2">
                <span>Novembro 30, 2022</span>
                <h2>Veja a evolução do Front-end na prática</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  nibh eu in aliquet ut adipiscing neque.
                </p>
              </div>
            </div>
          </div>

          <div className="groupPosts2">
            <div className="PostsGroup2">
              <img src={post2} />
              <div className="postGroup2Gap">
                <span>Novembro 30, 2022</span>
                <h2>10 dicas para conseguir a vaga desejada</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                  sit vitae, sed tristique.
                </p>
              </div>
            </div>

            <div className="PostsGroup2">
              <img src={post3} />
              <div className="postGroup2Gap">
                <span>Novembro 30, 2022</span>
                <h2>Deixe seu código mais semântico com essas dicas</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                  sit vitae, sed tristique.
                </p>
              </div>
            </div>
            <div className="PostsGroup2">
              <img src={post4} />
              <div className="postGroup2Gap">
                <span>Novembro 30, 2022</span>
                <h2>Use essas dicas nas suas aplicações mobile</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                  nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean
                  sit vitae, sed tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DivContent>
    </div>
  )
}
