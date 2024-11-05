import React from 'react';
import Gati from './assets/gati.jpg';  // Imagen del perfil
import gatito from './assets/gatito6.jpg';  // Imagen de ejemplo del post
import { Post } from './components/post/Post';
import { NavBar } from './components/layout/navbar/NavBar';  // NavBar importado
import { Stories } from './components/stories/Stories';  // Componente Stories

function App({ userName, setIsLoggeding }) {
  return (
    <>
      <NavBar userName={userName} setIsLoggeding={setIsLoggeding} />  {/* NavBar */}
      
      <Stories>  {/* Historias */}
        <Post
          type='story'
          seen={false}
          userName='SEÑOR GATO'
          profilPic={Gati}
          contentImage={gatito}
        />
        <Post
          type='story'
          seen={true}
          userName='GATO JEFE'
          profilPic={Gati}
          contentImage={gatito}
        />
      </Stories>

      <div className="posts">
        <Post
          type='post'
          seen={true}
          userName='GATO INFLUENCER'
          profilPic={Gati}
          contentImage={gatito}
        />
        <Post
          type='post'
          seen={false}
          userName='GATO CELEBRITY'
          profilPic={Gati}
          contentImage={gatito}
        />
      </div>
    </>
  );
}

export default App;
