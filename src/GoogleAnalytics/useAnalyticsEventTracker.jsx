import ReactGA from "react-ga4";

const useAnalyticsEventTracker = (category="Unknown Category") => {
  const eventTracker = (action = "Unknown Action", label = "Unknown Label") => {
    ReactGA.event({
        category, 
        action, 
        label
    });
  }
  return eventTracker;
}

export default useAnalyticsEventTracker;