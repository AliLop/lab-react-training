import React from 'react';

class ClickablePicture extends React.Component {

    state = {
        glasses: false
    }

    handleImageSrc = () => {
        if(this.state.glasses) {
            this.setState({
                glasses: false
            });
        } else {
          this.setState({
                glasses: true
            });     
        }
    }
//    handleImageSrc = () => {
 //       this.setState({
           // glasses: !this.state.glasses
   //     });
  //  }

    render() {
        let src = this.props.img
        if(this.state.glasses) {
            src = this.props.imgClicked
        }

        return (
            <div>
                <img src={src} onClick={this.handleImageSrc}/>
            </div>
        )
    }
}

export default ClickablePicture; 