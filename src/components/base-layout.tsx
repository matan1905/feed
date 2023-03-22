import React from 'react';
import Feed from "./feed";


/*
* Note: I've decided to not spend too much time on this component, as I don't think it's the main focus of this assignment
* Here are how I would do things differently:
* 1. Set a menu on smaller screens break
* 2. Put the menu on the right on it's own component
* 3. Add an active page state
* */
function BaseLayout() {
    return (
        <div className={"flex flex-col w-full h-full"}>
           <header className={"flex flex-row justify-around  bg-white"}>
               <div className={"flex flex-row space-x-4 p-2"}>
                 <img src={"logo.svg"}/>
                   <div  className={"bg-gray-100 rounded-full space-x-2 flex flex-row items-center p-2"}>
                       <img src={"search-icon.svg"}/>
                       <input type={"text"} placeholder={"Search"} className={"ring-0 outline-none font-thin bg-transparent"}/>
                   </div>
               </div>
               <div className={"flex flex-row  space-x-4 items-center"}>
                   <div className="flex flex-row items-center space-x-2 border-b-2 h-full border-primary">
                       <img src={"home-icon.svg"}  />
                       <span className={"text-primary"}>Home</span>
                   </div>
                   <div className="flex flex-row items-center space-x-1">
                       <img src={"message-icon.svg"}  />
                       <span className={"text-silver font-extralight"}>Messaging</span>
                   </div>
                   <div className="flex flex-row items-center space-x-2">
                       <img src={"bell-icon.svg"}  />
                       <span className={"text-silver"}>Notifications</span>
                   </div>
                   <div className={''}>
                       <img className={"rounded-full w-10 h-10 object-cover"}  src={"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"}/>
                   </div>
               </div>
           </header>
                <Feed />
        </div>
    );
}

export default BaseLayout;