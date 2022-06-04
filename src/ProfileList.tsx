import { useMemo, useCallback } from "react";
import Profile from "./Profile";
import LeftSideBar from "./LeftSideBar";
import GoBack from "./GoBack";
import { Alerts } from "./Alerts";
import { useState, createContext } from "react";
import AlertContext from "./AlertContext";
import { uniqueId } from "lodash";

function ProfileList() {
  const [alerts, setAlerts] = useState([]);

  const showAlerts = (message, type = "success", dismiss = 4) => {
    const id = uniqueId();
    const alert = { message, type, id };
    setAlerts([...alerts, alert]);

    dismiss &&
      setTimeout(() => {
        removeAlert(alert);
      }, dismiss * 1000);
  };

  const removeAlert = useCallback(
    alert => {
      setAlerts(latestOldAlert => {
        return latestOldAlert.filter(a => a.id !== alert.id);
      });
    },
    [alert]
  );

  return (
    <>
      <AlertContext.Provider
        value={useMemo(() => {
          return { alerts, showAlerts, removeAlert };
        }, [alerts])}
      >
        <div className="flex">
          <div>
            <LeftSideBar> </LeftSideBar>
          </div>
          <div>
            <Profile />
          </div>
          <div className="flex m-2">
            <Alerts> </Alerts>
            <GoBack> </GoBack>
          </div>
        </div>
      </AlertContext.Provider>
    </>
  );
}

export default ProfileList;
