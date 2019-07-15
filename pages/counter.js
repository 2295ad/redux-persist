import React from 'react';
import Counter from '../components/counter';
import Head from 'next/head';
import {Provider} from 'react-redux';
// import store from '../stateManager/store'
import Nav from '../components/nav'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '../stateManager/store';


class counter extends React.Component{
    render(){
        return(
           <div>
           <Head> 
             <title>Counter</title>
              <link href="/static/button.css" rel="stylesheet" />
            </Head>
            <Nav />
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
               <Counter/>
                </PersistGate>
              </Provider>
           </div>
            )
    }
}

export default counter;