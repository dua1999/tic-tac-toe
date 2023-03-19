import { Ref } from "nuxt/dist/app/compat/capi";

export function useMouseTracker(){
   
const x:Ref<number> =ref(0);
const y = ref(0);

const onMouseMoved = (e: MouseEvent) =>{
    console.log(e.pageX, e.pageY);
    x.value = e.pageX;
    y.value = e.pageY;
  };
  
  onMounted(() => {
  window.addEventListener("mousemove", onMouseMoved);
    
  });
  
  onUnmounted(()=>{
    window.removeEventListener("mousemove", onMouseMoved);
  })

  return {x,y}
}