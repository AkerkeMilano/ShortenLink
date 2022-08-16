import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postLinks } from "../store/actions/linksActions";
import "./Main.css";

const Main = () => {
  const [linkUrl, setLinkUrl] = useState("");
  const dispatch = useDispatch();
  const links = useSelector((state) => state.links.links);
  const handleChange = (e) => {
    setLinkUrl(e.target.value);
  };
  const onSubmit = (e) => {
    if(linkUrl.length !== 0){
        e.preventDefault();
        dispatch(postLinks(linkUrl));
        setLinkUrl("");
    } 
  };
  return (
    <div>
      <h1>Shorten your link!</h1>
      <form onSubmit={onSubmit} className="link-form">
        <input className="link-input" value={linkUrl} onChange={handleChange} required />

        <button className="link-btn" type="submit">
          Shorten!
        </button>
      </form>
      {links.shortUrl ? (
        <div>
          <h4>Your link now looks like this: </h4>
          <a
            href={`http://localhost:8000/${links.shortUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            {`http://localhost:8000/${links.shortUrl}`}
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
