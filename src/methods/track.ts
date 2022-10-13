import Sprig from 'react-native-userleap';
import type { TrackEventType } from '@segment/analytics-react-native';
const SIGN_OUT_EVENT = 'Signed Out';
export default (event: TrackEventType) => {
  if (event.event === SIGN_OUT_EVENT) {
    Sprig.logout();
  } else {
    Sprig.trackIdentifyAndPresent(event.event, event.userId, event.anonymousId);
  }
};