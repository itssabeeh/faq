import React, { useState } from 'react'
import { BiPlusCircle,BiMinusCircle } from 'react-icons/bi';

const FaqCard = ({title,info}) => {
    const [isShow,setIsShow]=useState(false);

    return (
        <section className="container-inner">
            <article>
            <h1>{title}</h1>
            <button className="btn" onClick={()=>setIsShow(!isShow)}>
                {isShow?<BiMinusCircle/>:<BiPlusCircle/>}
                </button>
            <div>
            {isShow && <p>{info}</p>}
            </div>
            </article>
        </section>
    )
}

export default FaqCard
