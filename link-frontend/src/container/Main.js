import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postLinks } from "../store/actions/linksActions";

const Main = () => {
    const [linkUrl, setLinkUrl] = useState("");
    const dispatch = useDispatch();
    const links = useSelector(state => state.links.links)
    const handleChange = (e) => {
        setLinkUrl(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(postLinks(linkUrl));
        setLinkUrl("");
    }
    return (
        <div>
            <h2>Shorten your link!</h2>
            <form onSubmit={onSubmit}>
                <input value={linkUrl} onChange={handleChange}/>
                <button type="submit">Shorten</button>
            </form>
            <div>
                <a href={`http://localhost:8000/${links.shortUrl}`} target="_blank" rel="noreferrer">{links.shortUrl}</a>
            </div>
        </div>
    )
};

export default Main;
