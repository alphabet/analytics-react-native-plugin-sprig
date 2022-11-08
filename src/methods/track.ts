import Sprig from "react-native-userleap";
import type { TrackEventType } from "@segment/analytics-react-native";
const SIGN_OUT_EVENT = "Signed Out";
export default (event: TrackEventType) => {
  if (event.event === SIGN_OUT_EVENT) {
    Sprig.logout();
  } else {
    if (Object.keys(event.properties!).length)
      Sprig.trackWithProperties(
        event.event,
        event.userId,
        event.anonymousId,
        event.properties!,
        (state: string) => {
          if (state === "READY") {
            Sprig.presentSurvey();
          }
        }
      );
    else
      Sprig.trackIdentifyAndPresent(
        event.event,
        event.userId,
        event.anonymousId
      );
  }
};
