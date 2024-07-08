import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAllData } from "../Redux/Slice/urlSlice";
import { IoCopyOutline } from "react-icons/io5";
import Navbar from "../Components/Navbar";

const Landingpage = () => {
  const [longUrl, setLongUrl] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [msg, setMsg] = useState("");
  const { allData } = useSelector((state) => state.url);
  const { currentUser } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  // =============================================fetch Data once page reloaded or refreshed============================
  const fetchData = async () => {
    const payload1 = {
      currentUser: currentUser._id,
    };
    await axios
      .post("http://localhost:4000/api/user/fetch_url", payload1)
      .then((res) => {
        console.log(res.data);
        dispatch(updateAllData(res.data.allUrls.reverse()));
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // ============================================handle submit for link generation==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShortenedUrl("");
    const payload = {
      url: longUrl,
      identifier: identifier,
      currentUser: currentUser._id,
    };
    await axios
      .post("https://url-shortner-backend-cqtj.onrender.com/api/user/generate_url", payload)
      .then((res) => {
        console.log(res.data);
        if (res.data.message) {
          setMsg(res.data.message);
        }
        if (res.data.shortURL) {
          setShortenedUrl(res.data.shortURL);
        }

        if (res.data.allUrls) {
          dispatch(updateAllData(res.data.allUrls.reverse()));
        }
      })

      .catch((err) => {
        setMsg(err.response.data.message)
        console.log(err.response.data.message)
      });
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shortenedUrl);
  };

  // =================================================content==================================================
  return (
    <div className="landingPage">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="generatingSection">
        <div className="generationContent">
          <h1 className="landingTitle">Shorten Your Loooong Links !&#10091;</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="longUrl"
              type="url"
              placeholder="enter your long url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              required
            />
            <input
              className="identifier"
              type="text"
              placeholder='Identifier Eg: " Youtube url "'
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
            <button className="formSubmit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="displayBoard">
          <a href={shortenedUrl}>{shortenedUrl}</a>
          {shortenedUrl ? (
            <IoCopyOutline className="copyIcon" onClick={handleCopyClick} />
          ) : (
            msg
          )}
        </div>
      </div>
      <div className="table_container">
        <table className="table" id="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th className="display" scope="col">
                Identifier
              </th>
              <th scope="col">Short Url</th>
              <th className="display" scope="col">
                Long Url
              </th>
            </tr>
          </thead>
          <tbody>
            {allData.map((ele, index) => {
              return (
                <tr key={index}>
                  <th className="tdPadding" scope="row">
                    {index}
                  </th>
                  <td className="display tdPadding identifierTd">
                    {ele.identifier}
                  </td>
                  <td className="tdPadding">
                    http://localhost:4000/api/user/{ele.shortUrl}
                  </td>
                  <td className="urlCol display tdPadding">{ele.url}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Landingpage;
