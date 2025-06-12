import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import DOTS from 'vanta/dist/vanta.dots.min'

export default function HomePage(){

    class VantaBg extends React.Component {
        constructor() {
            super()
            this.vantaRef = React.createRef()
        }
        componentDidMount() {
            this.vantaEffect = DOTS({
            el: this.vantaRef.current,
            backgroundColor: 0xffffff,
            color: 0x222222,
            color2: 0x222222,
            spacing:50
            })
        }
        componentWillUnmount() {
            if (this.vantaEffect) this.vantaEffect.destroy()
        }
        render() {
            return <div ref={this.vantaRef} className = "w-dvw h-dvh flex flex-col justify-center">
                {this.props.children}
            </div>
        }
    }

    
    return(
        // <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        //     <div className="flex flex-col justify-center absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#19aab5,transparent)]">
        //         <div>
        //                 <Outlet/>
        //         </div>
        //     </div>
        // </div>
        <VantaBg className="flex flex-col justify-center">
            <Outlet></Outlet>
        </VantaBg>
        
    );
}