import axios from "axios";

export function getSklads() {
  const url = `https://inventura.flexibee.eu/v2/c/firma2/sklad.json?detail=full`;
  // GET request using fetch inside useEffect React hook
  const promise = axios.get(url, {
    auth: {
      username: "uzivatel2",
      password: "uzivatel2uzivatel2",
    },
  });

  let finData;

  const dataPromise = promise.then((response) => response.data);

  return dataPromise;
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
}
