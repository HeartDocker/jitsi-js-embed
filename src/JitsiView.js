import JitsiMeetJS from '@solyd/lib-jitsi-meet';
import { useEffect } from 'react';
// Re-implement of lib-jitsi-meet
// https://github.com/solydhq/lib-jitsi-meet/blob/master/doc/example/example.js
const initOptions = {
    disableAudioLevels: true,
}
var connection = null;

const JitsiView = () => {
    useEffect(() => {
        JitsiMeetJS.init(initOptions);

        connection = new JitsiMeetJS.JitsiConnection(null, null, {
            disableAudioLevels: true,
        });
        console.log(connection);
    })
    return (
        <div>
            Hello world!
        </div>
    )
}

export default JitsiView;