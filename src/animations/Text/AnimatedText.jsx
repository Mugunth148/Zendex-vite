import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{children}</span>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Wrapper };


// Map API "type" values to JSX tag names
const tagMap = {
  inputText: "p",
};

const AnimatedCharacters = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  // Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create a storage array
  const words = [];

  // Push each word into the words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type] || "p";

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};

// PropTypes for type and text
AnimatedCharacters.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AnimatedCharacters;
