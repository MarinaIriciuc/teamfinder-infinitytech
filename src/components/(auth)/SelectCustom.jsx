import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {useAtom} from "jotai/index";
import {selectedValueAtom} from "@/store/index.js";

export default function SelectCustom({items}) {

  const [value, setValue] = useAtom(selectedValueAtom);


  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select"/>
      </SelectTrigger>
      <SelectContent>
        {items?.map(function (item) {
          return (
            <SelectItem key={item._id} value={item._id}>{item.name}</SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
