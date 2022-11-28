import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';


export default function Contacts() {
  return (
    <div>
      <h1>Contacts</h1>
      <h2>Department Erasmus Coordinator(s)</h2>
      <div style={{display: 'block'}}>
        <div style={{display: 'flex'}}>
            <p>Can Alkan</p>
            <IconButton>
                <MessageIcon sx={{color: 'black'}}/>
            </IconButton>
            <IconButton>
                <EmailIcon sx={{color: 'black'}}/>
            </IconButton>
        </div>

        <div style={{display: 'flex'}}>
            <p>Ayşegül Dündar   </p>
            <IconButton>
                <MessageIcon sx={{color: 'black'}}/>
            </IconButton>
            <IconButton>
                <EmailIcon sx={{color: 'black'}}/>
            </IconButton>
        </div>
        
        </div>

        <h2>Administrative Erasmus Coordinator</h2>
        <div style={{display: 'flex'}}>
            <p>Yelda İrem Ateş</p>
            <IconButton>
                <MessageIcon sx={{color: 'black'}}/>
            </IconButton>
            <IconButton>
                <EmailIcon sx={{color: 'black'}}/>
            </IconButton>
        </div>

        <h2>International Students Office</h2>
        <div style={{display: 'flex'}}>
            <p>Elif Ünsal</p>
            <IconButton>
                <MessageIcon sx={{color: 'black'}}/>
            </IconButton>
            <IconButton>
                <EmailIcon sx={{color: 'black'}}/>
            </IconButton>
        </div>

        <h2>Other Outgoing Students</h2>
        <div style={{display: 'flex'}}>
            <p>Ahmet Şahin</p>
            <IconButton>
                <MessageIcon sx={{color: 'black'}}/>
            </IconButton>
            <IconButton>
                <EmailIcon sx={{color: 'black'}}/>
            </IconButton>
        </div>
        
    </div>
  )
}
