import React from 'react'


function NoSSR_IFrame_MAP(props) {

  return (<>
    <iframe allowfullscreen="" frameborder="0" src={props.src}></iframe>
    <style jsx>{`
        iframe {
          width:100%;
          height:400px;
        }
        
      `}</style>
  </>)
}

export default NoSSR_IFrame_MAP
