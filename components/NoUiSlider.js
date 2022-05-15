import React, {useEffect, useRef} from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import dynamic from "next/dynamic";

const NoUiSlider = ({onUpdate, onChange}) => {

    const ref = useRef()


   useEffect(() => {
       noUiSlider.create(ref.current, {
           start: [0, 100],
           step: 1,
           connect: true,
           range: {
               'min': 0,
               'max': 100
           }
       });

       ref.current.noUiSlider.on('update', onUpdate)
       ref.current.noUiSlider.on('change', onChange)

       // return () => {
       //     ref.current.noUiSlider.destroy()
       // }

   }, [])

    return (
        <div ref={ref} id="range">

        </div>
    );
};

export default NoUiSlider;