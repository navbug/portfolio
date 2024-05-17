import { useRef } from "react";

// let isFirstRender = true;

const useCustomEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  //First render
  if(isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();
    //cleanup - can't simulate cleanup fn on component unmount because it's handled by react under the hood
    return () => {
      if(cleanup && typeof cleanup === "function") {
        cleanup();
      }
    }
  }

  //Deps changes & No Deps array
  const depsChanged = deps ? (JSON.stringify(prevDeps) !== JSON.stringify(deps)) : true;
  if(depsChanged) {
    // const cleanup = effect();
    // //Cleanup 
    // if(cleanup && typeof cleanup === "function" && deps) {
    //   cleanup();
    // }
  }
  
  prevDeps.current = deps || [];
}

export default useCustomEffect;