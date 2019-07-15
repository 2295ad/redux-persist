import React from 'react';
import Counter from '../components/counter';
import Head from 'next/head';


class counter extends React.Component{
    render(){
        return(
           <div>
           <Head> 
             <title>Counter</title>
              <link href="/static/button.css" rel="stylesheet" />
            </Head>
            <Counter/>
       
           </div>
            )
    }
}

export default counter;