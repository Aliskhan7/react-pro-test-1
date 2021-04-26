import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function App() {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then ((res) => {
        return res.json();
        })
        .then((json) => {
            setData (json);
            setLoad(false)
        });

    useSelector(state => state);




    return (
      <div>
          список дел:
          {load ? (
              <div>
                  loading...
              </div>
          ) : (
              data.map(item => {
                  return(
                      <div>
                          {item.title}
                      </div>
                  )
              })
          ) }
      </div>
  );
}

export default App;
