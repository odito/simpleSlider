import React, { Component } from 'react'

export default class slider2 extends Component {


state={
    count:1,
    anim:false
}


handleLeft=()=>{
let neCount = this.state.count + 1;


this.setState({
    count:neCount,
    anim:true
})


this.timer();

// counting parameter according to images
if(this.state.count===4){
 this.setState({
     count:1
 })
}

console.log(this.state.count);


}



handleRight=()=>{
    let neCount = this.state.count - 1;


    this.setState({
        count:neCount,
        anim:true
    })


    this.timer();
    
    // counting parameter according to images
    if(this.state.count===1){
     this.setState({
         count:4
     })
    }
    
    console.log(this.state.count);
    
    }



 componentDidMount(){
     this.intervalClear=this.timer();
 }


    timer=()=>{
        setTimeout(()=>{
            this.setState({
                anim:false
            })
        },500)
    }

    componentWillUnmount(){
        clearInterval(this.intervalClear);
    }





    render() {
        return (
            <div className='central'>
               <div className={this.state.anim?'newPhotos photos':'photos'}>
                   <img src={`./photos/decor-${this.state.count}.jpg`} alt="image"/>
               </div>

               <div className="btns">
                   <i className="fas fa-chevron-left" onClick={this.handleLeft}></i>
                   <i className="fas fa-chevron-right" onClick={this.handleRight}></i>

               </div>
            </div>
        )
    }
}




