import { JitsiMeeting } from '@jitsi/react-sdk'
import { useEffect } from 'react'
const JitsiMode2 = () => {

  const pressStartButton = () => {
    const iFrame = document.getElementById('jitsiConferenceFrame0');
    console.log(iFrame.contentWindow.document);
    if (iFrame.contentWindow.document) {
      const iDoc = iFrame.contentWindow.document;
      const element = iDoc.getElementsByClassName('jss18')[0];
      console.log(element);
      if (element) {
        element.click();
      } else {
        setTimeout(pressStartButton, 1000)
      }
    } else {
      setTimeout(pressStartButton, 1000)
    }
  }
  useEffect(() => {
    setTimeout(pressStartButton, 1000);
    
  }, [])
  return (
    <>
      <JitsiMeeting
        configOverwrite={{
          startWithVideoMuted: true
        }}
        userInfo = {{
          displayName: "user",
          email: "test@naver.com"
        }}
        style={{ height: '100vh' }}
        roomName="conf1"
        getIFrameRef = {(iframe) => { iframe.style.height = '100vh'; }}
      />
    </>
  )
}

export default JitsiMode2