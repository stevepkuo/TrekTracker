import React from 'react';import UserEventEntry from './UserEventEntry.jsx';var UserEventList = (props) => {  return (    <div>    	<ul>    		{props.events.map((event, index)=>{    			return <li key={index}><UserEventEntry  event={event} /></li>    		})}    	</ul>    </div>  );  };export default UserEventList;/*  createdAt:"2017-08-26T17:27:12.000Z"  creator_user_id:"115245116847689960870"  date:"2017-08-26T17:27:06.137Z"  desc:"gfdsgsdfgfdsg"  end:"2017-08-26T17:27:09.999Z"  id:1  start:"2017-08-26T17:27:08.318Z"  title:"asdads"  trail_id:339  trailname:null  updatedAt:"2017-08-26T17:27:12.000Z"*/