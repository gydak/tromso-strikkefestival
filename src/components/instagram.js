import React from 'react'
import $ from 'jquery'
import { Image } from 'react-bootstrap'
import '../styles/social.css'

const userID = '5988958011'
const accessToken = '5988958011.1677ed0.5346f3fac6214b05adb995479f5d087a'
const numImages = 4
const url = 'https://api.instagram.com/v1/users/' + userID + '/media/recent/?access_token=' + accessToken + '&count=' + numImages

class Instagram extends React.Component {
  constructor(props) {
    super(props)
    this.state = { images: [] }
  }

  componentDidMount() {
    let images = [];

    $.ajax({
      url: url,
      error: (e) => console.log(e),
      success: (r) => {
        let images = r.data.map(img => {
          return {
            link: img.link,
            src: img.images.standard_resolution.url
          }
        })
        this.setState({ images: images })
      },
      type: 'GET',
      dataType: "jsonp"
    });
  }

  render() {
    return (
      <div id='instagram-div'>
        {this.state.images.map(i => {
          const openImage = () => window.open(i.link);
          return (
            <div className={'instagram-image'} key={i.link}>
              <Image src={i.src} responsive onClick={openImage} />
            </div>
          )
        })}
      </div>
    )
  }
}


export default Instagram
