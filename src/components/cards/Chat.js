import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components'
import React from 'react';
import { ThemeProvider } from 'styled-components';

const Chat = () =>{
	return(
		<div>
			<ChatBot
			  steps={[
			    {
			      id: 'hello-world',
			      message: 'Hello World!',
			      end: true,
			    },
			  ]}
			  floating= {true}
			  opened={false}
			  width='350px'
			/>
		</div>
	);
}


export default Chat;