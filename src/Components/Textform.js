import React, { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const wordCount = text.split(" ").filter((word) => word).length;
  const timeCount = (wordCount * 0.008).toFixed(3);
  //   UpperCase Func
  const toUpper = () => {
    if (text.length === 0) {
      props.changeAlert("Please Enter Some Text Below!", "warning");
    } else {
      setText(text.toUpperCase());
      props.changeAlert("Changed to Uppercase!", "success");
    }
  };
  //   LowerCase Func
  const toLower = () => {
    if (text.length === 0) {
      props.changeAlert("Please Enter Some Text Below!", "warning");
    } else {
      setText(text.toLowerCase());
      props.changeAlert("Changed to Lowercase!", "success");
    }
  };
  // Clear Text
  const clearText = () => {
    if (text.length > 0) {
      setText("");
      props.changeAlert("Cleared the text!", "success");
    }
  }


  //   First Letter UpperCase
  const firstUpper = () => {
    if (text.length === 0) {
      props.changeAlert("Please Enter Some Text Below!", "warning");
    } else {
      const words = text.split(" ").filter((words) => words);
      const capArr = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
      });
      const newText = capArr.join(" ");
      setText(newText);
      props.changeAlert("Changed First Letters to Uppercase!", "success");
    }

  };

  //  Hashtag Func
  const makeHashtag = () => {
    if (text.length === 0) {
      props.changeAlert("Please Enter Some Text Below!", "warning");
    } else {
      const words = text.split(" ").filter((word) => word);
      const hashArr = words.map((word) => "#" + word);
      const newText = hashArr.join(",");
      setText(newText);
      props.changeAlert("Changed to Hashtags!", "success");
    }

  };
  //Copy Text Func
  const copyText = () => {
    if (text.length === 0) {
      props.changeAlert("Please Enter Some Text Below!", "warning");
    } else {
      let copyText = document.getElementById("my-box");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      props.changeAlert("Copied Text!", "success");
    }

  };

  //Preview text Heading
  const previewTitle = "Preview";
  return (
    <>
      <div
        className="container my-4 "
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <label htmlFor="my-box">
            <h3>{props.formHeading}</h3>
          </label>
          <textarea
            className="form-control"
            id="my-box"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#3a4c66",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={toUpper}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={toLower}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary" onClick={firstUpper}>
          First Letters to Uppercase
        </button>
        <button className="btn btn-primary  mx-3" onClick={makeHashtag}>
          Turn into Hashtags
        </button>

        <button className="btn btn-warning " onClick={copyText}>
          Copy Text
        </button>

        <button className="btn btn-danger  mx-3" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your Text Summary:</h3>
        <p>
          <b>
            {text.length} characters & {wordCount} words
          </b>
        </p>
        <p>This can be read in {timeCount} Minutes</p>
        {/* ---Conditional Rendering--- */}
        <h3>{text.length > 0 && previewTitle}</h3>

        <p
          className="preview-block"
          style={
            text.length === 0
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
        >
          {text}
        </p>
      </div>
    </>
  );
}

export default Textform;
