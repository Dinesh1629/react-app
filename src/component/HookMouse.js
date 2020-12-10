import React, {useState ,useEffect} from 'React'

function HookMouse(){
  const [x, setx] = useState(0)
  const [y, sety] = useState(0)

  const logMousePosition = e =>
  {
    console.log('MOuse event')
    setx(e.clientx)
    sety(e.clienty)
  }
  useEffect(()=>{
    console.log('useEffect called')
    window.addEventListner('mousemove',logMousePosition)
  },[])


  return(
    <div> 
    Hook X-{x} Y-{y}

    </div>
  )
} 

export default HookMouse