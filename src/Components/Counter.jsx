import { useState } from "react";

function Counter({start}) {
    const [count, setCount] = useState(start) //add this to allow state manegement
    return ( <>
        <div>
        <h1>
        Counter
        </h1>
        </div>
  
        <div>
        {count}
        </div>
  
        <button className='bg-violet-900 text-white' 
          onClick={() => setCount(count + 1)
            
          }
        >
          press me
        </button>
  
  
      </> );
}

export default Counter;