import "./styles.css";
import { Children, useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return <Accordion data={faqs} />;
}

function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null); // setCurrentOpen update  when in child component that is AccordionItem handleToggle hit
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          num={index}
          title={el.title}
          key={index}
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

// here in AccordionItem we need same state for every element so we lift the state to parent component that is Accordion
function AccordionItem({ num, title, children, currentOpen, onOpen }) {
  // calculate isOpen
  const isOpen = num === currentOpen; // this line means that after hitting to icon that + after that num and currentOpen value will be same
  // console.log(isOpen);

  // function handleToggle
  // here handleToggle hit than state of currentOpen will be change that will equal to num that is index of particular element that is open now
  function handleToggle() {
    // console.log("Current Open previous" + currentOpen);
    onOpen(isOpen ? null : num);
    // console.log(num);
  }

  // console.log("Current Open after" + currentOpen);
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
export default App;
