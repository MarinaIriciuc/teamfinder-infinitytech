import {Button} from "@/components/ui/button.jsx";
import {useJwt} from "react-jwt";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {useRef} from "react";

export default function SignInURLForm() {

  const {decodedToken} = useJwt(localStorage.getItem("token"));
  const inputRef = useRef();
  // const inputValue = inputRef.current.value;

  return (
    <div>
      <p className="custom-label">Sign In URL</p>
      <input type="text"
             className="custom-input"
             value={`https://teamfinder-infinitytech-yz1j.vercel.app/register-employee?organizationId=${decodedToken?.organizationId}`}
             readOnly="readonly"
             ref={inputRef}
      />
      {/*<CopyToClipboard text={inputValue}>*/}
      {/*  <Button name="addtoclipboard" className="mt-8 px-16 py-6">Copy link</Button>*/}
      {/*</CopyToClipboard>*/}
    </div>
  )
}
