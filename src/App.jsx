import React, { useRef,useState} from 'react'
import AlignLeft from "./Alignleft.svg"
import AlignRight from "./Alignright.svg"
import AlignMid from "./AlignMid.svg"
import NumberedList from "./NumberedList.svg"
import PLeft from "./Pleft.svg"
import PRight from "./PRight.svg"
function App() {
  const [showFonts, setShowFonts] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [showTextArea, setShowTextArea] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [textareaText, setTextareaText] = useState('');
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined ,setIsUnderlined]= useState(false);
  const textareaRef = useRef(null);

  const toggleTextArea = () => {
    setShowTextArea(!showTextArea);
}

const toggleFonts = () => {
  setShowFonts(!showFonts);
};

const selectFont = (font) => {
  setSelectedFont(font);
  setShowFonts(false);
};

const handleTextareaChange = (event) => {
  setTextareaText(event.target.value);
};
const toggleBold = () => {
  setIsBold(!isBold);
};
const toggleItalic = () => {
  setIsItalic(!isItalic);
};
const toggleUnderlined=()=>{
  setIsUnderlined(!isUnderlined)
}
const alignLeft = () => {
  const textarea = textareaRef.current;
  const selectionStart = textarea.selectionStart;
  const selectionEnd = textarea.selectionEnd;
  const beforeSelection = textareaText.substring(0, selectionStart);
  const selectedText = textareaText.substring(selectionStart, selectionEnd);
  const afterSelection = textareaText.substring(selectionEnd);

  const alignedText = `<div style="text-align: left">${selectedText}</div>`;
  const updatedTextareaText = `${beforeSelection}${alignedText}${afterSelection}`;
  setTextareaText(updatedTextareaText);
};
const alignCenter = () => {
  const textarea = textareaRef.current;
  const selectionStart = textarea.selectionStart;
  const selectionEnd = textarea.selectionEnd;
  const beforeSelection = textareaText.substring(0, selectionStart);
  const selectedText = textareaText.substring(selectionStart, selectionEnd);
  const afterSelection = textareaText.substring(selectionEnd);

  const alignedText = `<div style="text-align: center">${selectedText}</div>`;
  const updatedTextareaText = `${beforeSelection}${alignedText}${afterSelection}`;
  setTextareaText(updatedTextareaText);
};
  return (
    <>
    <div className='flex space-x-5 fon px-2 text-[10px] w-[30%] rounded-lg mt-5 ml-5 bg-slate-300'>
      <button >↶</button>
      <button>↷</button>
      <button onClick={toggleFonts}>Font Family </button>
      <button onClick={toggleBold}>B</button>
      <button onClick={toggleItalic}><p className=' italic'>I</p></button>
      <button onClick={toggleUnderlined}><p className=' underline '>U</p></button>
      <button onClick={toggleTextArea}><p>Text Area</p></button>
      {/* <button onClick={alignLeft}> <img src={AlignLeft} className='w-[15px]' alt="" /></button>
      <button onClick={alignCenter}><img src={AlignMid} className='w-[15px]' alt=""/></button>
      <button><img src={AlignRight} className='w-[15px]' alt=""/></button>
      <button><img src={NumberedList} className='w-[18px]' alt=""/></button>
      <button><img src={PLeft} className='w-[13px]' alt=""/></button>
      <button><img src={PRight} className='w-[13px]' alt=""/></button> */}
    </div>
    {showTextArea && <textarea onChange={handleTextareaChange} value={textareaText}  className={`ml-[15%] ${selectedFont} ${isBold ? 'font-bold' : ''} ${isUnderlined ? 'underline' : ''} ${isItalic ? 'italic' : ''}  text-xs mt-1 border-[1px] border-blue-400 ]`}></textarea>}
    {showFonts && (
        <div className=" ml-3 mt-1 font-list">
          <button onClick={() => selectFont('font-sans')}>Sans</button><br />
          <button onClick={() => selectFont('font-serif')}>Serif</button><br />
          <button onClick={() => selectFont('font-mono')}>Mono</button><br />
          <button onClick={() => selectFont('font-[roboto]')}>Roboto</button><br />
        </div>
      )}
    </>
  )
}

export default App

