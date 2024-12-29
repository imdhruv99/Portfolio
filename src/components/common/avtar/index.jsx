import React, { useEffect, useRef, useState } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

// model paths
import darkModeAvtar from '../../../assets/models/darkModeAvtar.glb';
import lightModeAvtar from '../../../assets/models/lightModeAvtar.glb';

// animation paths
import greetingAnimationEffect from '../../../assets/animations/Greeting.fbx';

const Avtar = ({ isDarkTheme, ...props }) => {
    const avtarGroup = useRef();
    const animationRef = useRef(null);
    const [isFirstMount, setIsFirstMount] = useState(true);

    // Load the model based on theme
    const { scene } = useGLTF(isDarkTheme ? darkModeAvtar : lightModeAvtar);
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone);

    // Load animation
    const { animations: greetingAnimation } = useFBX(greetingAnimationEffect);
    greetingAnimation[0].name = 'Greeting';

    const { actions } = useAnimations(greetingAnimation, avtarGroup);

    // Handle initial mount animation
    useEffect(() => {
        if (isFirstMount && actions.Greeting) {
            // Play from mid-point of animation (standing position)
            actions.Greeting.reset();
            actions.Greeting.time = actions.Greeting._clip.duration / 2;
            actions.Greeting.play();

            // Set flag to false after initial mount
            setIsFirstMount(false);
        }
    }, [actions, isFirstMount]);

    // Handle theme change animations
    useEffect(() => {
        if (!isFirstMount && actions.Greeting) {
            if (animationRef.current) {
                animationRef.current.stop();
            }

            // Play greeting animation from standing position
            actions.Greeting.reset();
            actions.Greeting.time = actions.Greeting._clip.duration / 2;
            actions.Greeting.play();
            animationRef.current = actions.Greeting;
        }

        return () => {
            if (animationRef.current) {
                animationRef.current.stop();
            }
        };
    }, [actions, isDarkTheme, isFirstMount]);

    if (!nodes || !materials) return null;

    return (
        <group {...props} dispose={null} ref={avtarGroup}>
            <group rotation-x={-Math.PI / 2}>
                <primitive object={nodes.Hips} />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Hair.geometry}
                    material={materials.Wolf3D_Hair}
                    skeleton={nodes.Wolf3D_Hair.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Glasses.geometry}
                    material={materials.Wolf3D_Glasses}
                    skeleton={nodes.Wolf3D_Glasses.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Body.geometry}
                    material={materials.Wolf3D_Body}
                    skeleton={nodes.Wolf3D_Body.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                    material={materials.Wolf3D_Outfit_Bottom}
                    skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                    material={materials.Wolf3D_Outfit_Footwear}
                    skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Outfit_Top.geometry}
                    material={materials.Wolf3D_Outfit_Top}
                    skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                />
                <skinnedMesh
                    name="EyeLeft"
                    geometry={nodes.EyeLeft.geometry}
                    material={materials.Wolf3D_Eye}
                    skeleton={nodes.EyeLeft.skeleton}
                    morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                />
                <skinnedMesh
                    name="EyeRight"
                    geometry={nodes.EyeRight.geometry}
                    material={materials.Wolf3D_Eye}
                    skeleton={nodes.EyeRight.skeleton}
                    morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
                />
                <skinnedMesh
                    name="Wolf3D_Head"
                    geometry={nodes.Wolf3D_Head.geometry}
                    material={materials.Wolf3D_Skin}
                    skeleton={nodes.Wolf3D_Head.skeleton}
                    morphTargetDictionary={
                        nodes.Wolf3D_Head.morphTargetDictionary
                    }
                    morphTargetInfluences={
                        nodes.Wolf3D_Head.morphTargetInfluences
                    }
                />
                <skinnedMesh
                    name="Wolf3D_Teeth"
                    geometry={nodes.Wolf3D_Teeth.geometry}
                    material={materials.Wolf3D_Teeth}
                    skeleton={nodes.Wolf3D_Teeth.skeleton}
                    morphTargetDictionary={
                        nodes.Wolf3D_Teeth.morphTargetDictionary
                    }
                    morphTargetInfluences={
                        nodes.Wolf3D_Teeth.morphTargetInfluences
                    }
                />
            </group>
        </group>
    );
};

export default Avtar;

useGLTF.preload(darkModeAvtar);
useGLTF.preload(lightModeAvtar);
