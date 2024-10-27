

import {OrbitControls ,ScrollControls, Scroll, PerspectiveCamera ,Cloud  , Html , Text ,Text3D , Center , Float,Sparkles, Stars } from "@react-three/drei";

const Text3d = () => {
    return(
        <>
            <OrbitControls />
            <Text3D>
                This is a 3d text
            </Text3D>
        </>
    )
};
export default Text3d;