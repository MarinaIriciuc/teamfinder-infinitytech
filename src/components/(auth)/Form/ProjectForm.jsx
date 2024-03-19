import {Button} from "@/components/(guest)/ui/button.jsx";
import SelectCustom from "@/components/(auth)/SelectCustom.jsx";

export default function ProjectForm() {
  return (
    <form>
      <div className="grid grid-cols-2 gap-20">
        <div>
          <p className="custom-label">Project Name</p>
          <input type="text" className="custom-input"/>
          <p className="custom-label">Perioada proiectului</p>
          <SelectCustom/>
          <p>fix in desfasurare</p>
          {/*<p className="custom-label">Team Size</p>*/}
          {/*<input type="number" className="custom-input"/>*/}
          <p className="custom-label">Description</p>
          <textarea className="custom-input"/>
        </div>
        <div>
          <p className="custom-label">Start Time</p>
          <input type="date" className="custom-input"/>
          <p className="custom-label">End Time</p>
          <input type="date" className="custom-input"/>
          <p className="custom-label">Starea proiectului</p>
          <SelectCustom/>
          {/*<p>neinceput incepand in desfasurare inchidere incheiat</p>*/}
          {/*<p>la inceput pot selecta doar neinceput sau incepand cand creez proiectul</p>*/}
          <p className="custom-label">Required skills</p>
          <SelectCustom/>
        </div>
      </div>
      <Button name="addproject" className="px-20 mt-10">Adauga Proiect</Button>
    </form>
  )
}
