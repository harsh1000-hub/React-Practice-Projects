import { useState } from "react";
import "./styles.css";
export default function TextExpander({
  textOpenButton = "Show More",
  textCloseButton = "Show Less",
  buttonColor = "blue",
  className = "",
  expanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  // handle setExpanded
  function handleSetExpanded() {
    setIsExpanded(true);
  }

  // handle notSetExpanded
  function handleNotSetExpanded() {
    setIsExpanded(false);
  }
  // style the textOpenButton and textCloseButton
  const buttonStyle = {
    color: buttonColor,
    cursor: "pointer",
  };
  return (
    <div className={className}>
      Space travel is the ultimate adventure! Imagine soaring past the
      {isExpanded === false ? (
        "..."
      ) : (
        <span>
          stars and exploring new worlds. It's the stuff of dreams and science
          fiction, but believe it or not, space travel is a real thing. Humans
          and robots are constantly venturing out into the cosmos to uncover its
          secrets and push the boundaries of what's possible.
        </span>
      )}
      <span
        role="button"
        onClick={
          isExpanded === false ? handleSetExpanded : handleNotSetExpanded
        }
        style={buttonStyle}
      >
        {isExpanded === false ? textOpenButton : textCloseButton}
      </span>
    </div>
  );
}
